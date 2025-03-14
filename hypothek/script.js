document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded, creating questionnaire");
    try {
        createQuestionnaire();
        // Send initial height after loading
        sendHeight();
    } catch (e) {
        console.error("Error in createQuestionnaire:", e);
        document.getElementById('questionnaire').innerHTML = "<p style='color:red;'>Fehler beim Laden der Fragen: " + e.message + "</p>";
    }
});

// [Your existing textContent object remains unchanged]

// Function to create the questionnaire
function createQuestionnaire() {
    console.log("Running createQuestionnaire");
    document.getElementById('mainTitle').innerText = textContent.mainTitle;
    document.getElementById('introText1').innerText = textContent.introText1;
    document.getElementById('introText2').innerText = textContent.introText2;
    document.getElementById('disclaimerTitle').innerText = textContent.disclaimerTitle;
    document.getElementById('disclaimerText').innerText = textContent.disclaimerText;

    const questionnaireForm = document.getElementById('questionnaire');
    if (!questionnaireForm) {
        throw new Error("Element #questionnaire not found");
    }
    questionnaireForm.innerHTML = '';

    textContent.questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('h3');
        questionText.textContent = `${question.id}. ${question.text.trim()}`;
        questionText.style.display = 'inline-block';
        questionText.style.lineHeight = '1';
        questionDiv.appendChild(questionText);

        const infoIcon = document.createElement('span');
        infoIcon.classList.add('info-icon');
        infoIcon.textContent = 'i';

        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.textContent = question.info;

        infoIcon.appendChild(tooltip);
        questionText.appendChild(infoIcon);

        question.options.forEach(option => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${question.id}`;
            radio.value = option.value;
            label.appendChild(radio);
            label.append(option.label);
            questionDiv.appendChild(label);
        });

        questionnaireForm.appendChild(questionDiv);
    });
}

// Function to send height to parent window
function sendHeight() {
    const height = document.body.scrollHeight + 20; // Add padding
    console.log("Sending height:", height); // Debug
    window.parent.postMessage({ height: height }, '*');
}

// Function to calculate the result
function calculateResult() {
    const formElements = document.getElementById('questionnaire').elements;
    let allAnswered = true;

    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'radio' && !formElements[i].checked) {
            let foundChecked = false;
            const radioGroupName = formElements[i].name;
            for (let j = 0; j < formElements.length; j++) {
                if (formElements[j].type === "radio" && formElements[j].name === radioGroupName && formElements[j].checked) {
                    foundChecked = true;
                    break;
                }
            }
            if (!foundChecked) {
                allAnswered = false;
                break;
            }
        }
    }

    if (!allAnswered) {
        document.getElementById('result').innerHTML = "<p style='color:red;'>Bitte beantworten Sie alle Fragen.</p>";
        sendHeight(); // Update height even on error
        return;
    }

    const answers = {};
    textContent.questions.forEach(question => {
        answers[`q${question.id}`] = document.querySelector(`input[name="question${question.id}"]:checked`)?.value;
    });

    let points = {
        saron: 0, kurz: 0, lang: 0, splitting: 0, beratung: 0
    };

    function adjustPoints(question, valuePoints) {
        if (answers[question] && valuePoints[answers[question]]) {
            for (const key in valuePoints[answers[question]]) {
                points[key] += valuePoints[answers[question]][key];
            }
        }
    }

    adjustPoints('q1', {
        sicher: { saron: -2, kurz: 1, lang: 3, splitting: -1 },
        ausgewogen: { saron: 0, kurz: 1, lang: 1, splitting: 1 },
        risikofreudig: { saron: 3, kurz: 0, lang: -2, splitting: 0 }
    });
    // [Rest of adjustPoints calls remain unchanged]

    const thresholdSaron = 7;
    const thresholdKurz = 5;
    const thresholdLang = 7;
    const thresholdSplitting = 5;

    let profileSummary = `
        <h3>Aus Ihrem Profil folgt:</h3>
        <table>
            <tr>
                <th>Saron-Hypothek</th>
                <td class="profile-result">${points.saron >= thresholdSaron && answers.q12 !== "tragbarNein" && answers.q1 !== "sicher" ? "geeignet" : (points.saron > 0 ? "möglich" : "ungeeignet")}</td>
            </tr>
            <tr>
                <th>Kurzfristige Festhypothek</th>
                <td class="profile-result">${points.kurz >= thresholdKurz ? "geeignet" : (points.kurz > 0 ? "möglich" : "ungeeignet")}</td>
            </tr>
            <tr>
                <th>Langfristige Hypothek</th>
                <td class="profile-result">${points.lang >= thresholdLang && answers.q1 !== "risikofreudig" ? "geeignet" : (points.lang > 0 ? "möglich" : "ungeeignet")}</td>
            </tr>
            <tr>
                <th>Splitting</th>
                <td class="profile-result">${points.splitting >= thresholdSplitting ? "geeignet" : (points.splitting > 0 ? "möglich" : "ungeeignet")}</td>
            </tr>
            <tr>
                <th>Beratungsbedarf</th>
                <td class="profile-result">${answers.q12 === "tragbarNein" || (answers.q11 === "pensionJa" && (answers.q12 === "tragbarAngespannt" || answers.q12 === "tragbarNein")) ? "sehr hoch" : (points.beratung > 3 ? "hoch" : "normal")}</td>
            </tr>
        </table>
    `;

    let resultText = "";
    if (answers.q12 === "tragbarNein" || (answers.q11 === "pensionJa" && (answers.q12 === "tragbarAngespannt" || answers.q12 === "tragbarNein")) || points.beratung > 5) {
        resultText = textContent.results.beratung;
    } else if (points.saron >= thresholdSaron && answers.q12 !== "tragbarNein" && answers.q1 !== "sicher") {
        resultText = textContent.results.saron;
    } else if (points.kurz >= thresholdKurz) {
        resultText = textContent.results.kurzfrist;
    } else if (points.lang >= thresholdLang && answers.q1 !== "risikofreudig") {
        resultText = textContent.results.langfrist;
    } else if (points.splitting >= thresholdSplitting) {
        resultText = textContent.results.splitting;
    } else {
        resultText = textContent.results.beratung;
    }

    document.getElementById('result').innerHTML = `<div id="profile-summary">${profileSummary}</div>${resultText}`;
    // Send updated height after result is rendered
    setTimeout(sendHeight, 100); // Delay to ensure DOM updates
}
