const textContent = {
    mainTitle: "Hypotheken-Finder: Welche Finanzierungsstrategie passt zu Ihnen?",
    introText1: "Mit diesem Fragebogen finden Sie die für Ihre Situation passende Hypothekenlösung. Je sorgfältiger Ihre Antworten, desto präziser wird unsere Empfehlung auf Ihre persönlichen Bedürfnisse zugeschnitten sein.",
    introText2: "Der Fragebogen bietet Ihnen eine erste Orientierung und kann als Grundlage für ein persönliches Beratungsgespräch dienen.",
    disclaimerTitle: "Bitte beachten Sie: ",
    disclaimerText: "Die Ergebnisse dieses Fragebogens dienen als erste Orientierungshilfe und stellen keine verbindliche Finanzberatung dar. Für eine individuell auf Ihre Gesamtsituation abgestimmte Beratung empfehlen wir ein Gespräch mit einem Hypothekenexperten.",
    questions: [
        {
            id: 1,
            text: "Wie hoch ist Ihre Bereitschaft, Zinsschwankungen bei Ihrer Hypothek in Kauf zu nehmen?",
            options: [
                { value: "sicher", label: "Sehr sicherheitsorientiert (stabile, vorhersehbare Kosten sind mir wichtiger als potenziell tiefere Zinsen)" },
                { value: "ausgewogen", label: "Ausgewogen (ich suche eine Balance zwischen Stabilität und Kostenoptimierung)" },
                { value: "risikofreudig", label: "Risikofreudig (ich bin bereit, Zinsschwankungen in Kauf zu nehmen, um von potenziell tieferen Kosten zu profitieren)" }
            ],
            info: "Ihre Risikoneigung ist entscheidend: Bei niedriger Risikobereitschaft empfiehlt sich eine Festhypothek mit stabilen, planbaren Zinsen. Bei höherer Risikobereitschaft kann eine variable Hypothek (z.B. Saron) sinnvoll sein, die bei niedrigen Marktzinsen Vorteile bietet, aber auch zu steigenden Kosten führen kann, wenn die Zinsen anziehen."
        },
        {
            id: 2,
            text: "Wie schätzen Sie persönlich die Zinsentwicklung in den nächsten drei bis fünf Jahren ein?",
            options: [
                { value: "steigend", label: "Steigend (ich erwarte, dass die Hypothekarzinsen tendenziell steigen werden)" },
                { value: "gleichbleibend", label: "Gleichbleibend (ich erwarte keine wesentlichen Veränderungen des aktuellen Zinsniveaus)" },
                { value: "fallend", label: "Fallend (ich erwarte, dass die Hypothekarzinsen tendenziell sinken werden)" }
            ],
            info: "Ihre Einschätzung der Zinsentwicklung beeinflusst die Wahl der optimalen Hypothek: Bei erwarteten steigenden Zinsen sichern Sie sich mit einer Festhypothek günstige Konditionen für die Zukunft. Bei erwarteten fallenden Zinsen profitieren Sie mit einer variablen (Saron) oder kurzfristigen Festhypothek von sinkenden Konditionen."
        },
        {
            id: 3,
            text: "Wie hoch ist der aktuelle Zinsabstand zwischen einer kurz- und langfristigen Festhypothek?",
            options: [
                { value: "klein", label: "Gering (weniger als 0,4 Prozentpunkte Unterschied)" },
                { value: "mittel", label: "Mittel (zwischen 0,4 und 0,8 Prozentpunkte Unterschied)" },
                { value: "gross", label: "Hoch (mehr als 0,8 Prozentpunkte Unterschied)" }
            ],
            info: "Die Zinsdifferenz (Zinskurve) gibt an, wie viel mehr Sie für langfristige Planungssicherheit bezahlen. Bei einem grossen Unterschied (steile Zinskurve) zahlen Sie einen höheren Preis für langfristige Sicherheit. Bei geringem Unterschied (flache Zinskurve) ist die längere Laufzeit vergleichsweise günstig zu haben."
        },
        {
            id: 4,
            text: "Wie beurteilen Sie die langfristige Stabilität Ihrer finanziellen Situation in den nächsten 10 Jahren (Einkommen, berufliche Perspektiven, Vermögensentwicklung)?",
            options: [
                { value: "stabil", label: "Sehr stabil und sicher (gesicherte Einkommenssituation, positive Vermögensentwicklung)" },
                { value: "gut", label: "Grundsätzlich stabil mit leichten Unsicherheiten (z.B. möglicher Stellenwechsel, Teilzeitarbeit)" },
                { value: "angespannt", label: "Mit erheblichen Unsicherheiten verbunden (z.B. befristete Anstellung, selbständige Tätigkeit, geplante grössere Ausgaben)" }
            ],
            info: "Ihre finanzielle Zukunftsaussicht ist entscheidend für die Risikofähigkeit: Je stabiler Ihre Einkommens- und Vermögenssituation, desto mehr Spielraum haben Sie bei der Hypothekenwahl. Bei unsicheren Perspektiven ist eine vorhersehbare Zinsbelastung meist wichtiger als potenzielle Zinsersparnisse."
        },
        {
            id: 5,
            text: "Wie wichtig ist Ihnen Flexibilität im Vergleich zu Planungssicherheit?",
            options: [
                { value: "flexibel", label: "Flexibilität ist sehr wichtig" },
                { value: "ausgewogen2", label: "Ein ausgewogenes Verhältnis ist ideal" },
                { value: "sicher2", label: "Planungssicherheit hat oberste Priorität" }
            ],
            info: "Mehr Flexibilität ermöglicht Ihnen, die Hypothek bei Bedarf anzupassen, beispielsweise bei Verkauf des Wohneigentums oder zum Nutzen günstigerer Zinsen. Planungssicherheit garantiert Ihnen gleichbleibende Zinskosten über die gesamte Laufzeit, unabhängig von Marktschwankungen."
        },
        {
            id: 6,
            text: "Werden Sie aktiv Angebote verschiedener Hypothekenanbieter vergleichen und bei besseren Konditionen wechseln?",
            options: [
                { value: "ja", label: "Ja, unbedingt" },
                { value: "nein", label: "Eher nicht" },
                { value: "vielleicht", label: "Vielleicht gelegentlich" }
            ],
            info: "Regelmässige Angebotsvergleiche und Verhandlungen mit verschiedenen Anbietern können Ihre Zinskosten deutlich senken. Dies erfordert aber Zeit, Marktbeobachtung und die Bereitschaft, den Anbieter zu wechseln."
        },
        {
            id: 7,
            text: "Wie lange planen Sie, das Wohneigentum zu besitzen?",
            options: [
                { value: "kurz", label: "Kurzfristig (weniger als 5 Jahre)" },
                { value: "mittel2", label: "Mittelfristig (5-10 Jahre)" },
                { value: "lang", label: "Langfristig (mehr als 10 Jahre)" }
            ],
            info: "Die Besitzdauer ist ein Schlüsselfaktor: Bei kurzfristigem Horizont können lange Vertragsbindungen zu hohen Entschädigungszahlungen führen, falls Sie vorzeitig verkaufen. Bei langfristiger Planung bieten lange Hypothekenlaufzeiten Schutz vor Zinserhöhungen."
        },
        {
            id: 8,
            text: "Wie hoch sind Ihre liquiden finanziellen Reserven (Bargeld, Sparkonto, leicht verkäufliche Wertpapiere) im Verhältnis zu Ihren jährlichen Hypothekarzinsen?",
            options: [
                { value: "ja2", label: "Ja, umfangreiche Reserven (mehr als 12 Monatshypothekarzinsen)" },
                { value: "begrenzt", label: "Begrenzte Reserven (etwa 6-12 Monatshypothekarzinsen)" },
                { value: "nein2", label: "Kaum Reserven (weniger als 6 Monatshypothekarzinsen)" }
            ],
            info: "Liquide Reserven sind Ihr Sicherheitspolster bei steigenden Zinsen oder unerwarteten Ausgaben. Bei variablen Hypotheken sollten Sie ausreichend Reserven haben, um Zinssteigerungen über mehrere Jahre abfedern zu können, ohne Ihre Tragbarkeitsgrenze zu überschreiten."
        },
        {
            id: 9,
            text: "Wie intensiv werden Sie sich mit Ihrer Hypothek beschäftigen?",
            options: [
                { value: "aktiv", label: "Sehr aktiv (ich verfolge regelmässig die Zinsentwicklung und bin bereit, meine Strategie entsprechend anzupassen)" },
                { value: "passiv", label: "Mässig aktiv (ich informiere mich gelegentlich, möchte aber keine ständigen Anpassungen vornehmen)" },
                { value: "sehrPassiv", label: "Passiv (ich möchte eine langfristige Lösung mit minimalem Verwaltungsaufwand)" }
            ],
            info: "Variable Hypotheken wie die Saron-Hypothek erfordern regelmässige Marktbeobachtung und Entscheidungen bei Zinsveränderungen. Festhypotheken bieten dagegen einen Ansatz mit weniger Aufwand, aber auch weniger Optimierungspotenzial."
        },
        {
            id: 10,
            text: "Sind Sie offen für ein Hypotheken-Splitting (Aufteilung in mehrere Tranchen)?",
            options: [
                { value: "ja3", label: "Ja, das ist eine Option" },
                { value: "nein3", label: "Nein, lieber alles in einer Tranche" },
                { value: "unsicher", label: "Ich bin mir unsicher" }
            ],
            info: "Beim Hypotheken-Splitting teilen Sie Ihre Gesamthypothek in mehrere Teile mit unterschiedlichen Laufzeiten und/oder Zinsmodellen auf. Dies reduziert das Risiko, dass die gesamte Hypothek zum ungünstigsten Zeitpunkt erneuert werden muss, erhöht aber die Komplexität."
        },
        {
            id: 11,
            text: "Steht Ihre Pensionierung in den nächsten 10 Jahren bevor?",
            options: [
                { value: "pensionJa", label: "Ja" },
                { value: "pensionNein", label: "Nein" }
            ],
            info: "Mit dem Renteneintritt sinkt Ihr Einkommen typischerweise. Dies kann die Tragbarkeit Ihrer Hypothek beeinträchtigen. Die Bank prüft, ob die Hypothek nach der Pensionierung mit den reduzierten Einnahmen tragbar bleibt."
        },
        {
            id: 12,
            text: "Wären Ihre Wohnkosten bei einem Zinsanstieg um zwei Prozentpunkte noch tragbar? Dabei sollten Hypothekarzinsen, Nebenkosten und Unterhaltskosten zusammen weniger als zwei Drittel Ihres Bruttoeinkommens ausmachen.",
            options: [
                { value: "tragbarKeinProblem", label: "Unproblematisch, die Tragbarkeit wäre weiterhin deutlich unter der Grenze" },
                { value: "tragbarAngespannt", label: "Grenzwertig, die Tragbarkeit würde sich der Grenze nähern oder leicht überschreiten" },
                { value: "tragbarNein", label: "Kritisch, die Tragbarkeit würde deutlich über der Grenze liegen" }
            ],
            info: "Ein plötzlicher Zinsanstieg kann die Belastung bei einer variablen Hypothek erheblich erhöhen. Banken berechnen die Tragbarkeit in der Regel mit einem Kalkulationszinssatz von 4,5 bs 5%, also deutlich über den aktuellen Marktzinsen, um genau dieses Risiko einzuplanen."
        }
    ],
    results: {
        saron: `
            <h2>Empfehlung: Variable Saron-Hypothek</h2>
            <p>Eine Saron-Hypothek (variable Geldmarkthypothek) passt gut zu Ihrem Profil. Der Zins passt sich automatisch dem Schweizer Referenzzinssatz Saron an und wird typischerweise alle 3, 6 oder 12 Monate neu berechnet.</p>
                <p><strong>Vorteile:</strong></p>
            <ul>
                <li>Potenziell tiefere Zinskosten.</li>
                <li>Hohe Flexibilität.</li>
                <li>Transparenz.</li>
            </ul>
            <p><strong>Nachteile:</strong></p>
            <ul>
                <li>Zinsrisiko.</li>
                <li>Erfordert finanzielle Reserven.</li>
            </ul>
            <p><strong>Für wen geeignet:</strong></p>
            <ul>
                <li>Wohneigentümer, die ein gewisses Zinsrisiko eingehen können.</li>
                <li>Personen mit einer soliden finanziellen Situation.</li>
                <li>Kurz- bis mittelfristiger Anlagehorizont kann von Vorteil sein.</li>
            </ul>
            <p><strong>Zusätzliche Überlegungen:</strong></p>
            <ul>
                <li>Prüfen Sie die Möglichkeit eines «Caps», einer Obergrenze für den variablen Zins.</li>
                <li>Vergleichen Sie die Konditionen verschiedener Anbieter.</li>
                <li>Überlegen Sie, ob eine 3-, 6- oder 12-monatliche Zinsanpassungsperiode für Sie optimal ist.</li>
                <li>Die Tragbarkeitsberechnung der Bank berücksichtigt in der Regel einen Kalkulationszinssatz von 4,5 bis 5%.</li>
            </ul>
        `,
        kurzfrist: `
            <h2>Empfehlung: Kurz- bis mittelfristige Festhypothek (2–5 Jahre)</h2>
            <p>Eine Festhypothek mit 2 bis 5 Jahren Laufzeit bietet einen Mittelweg: Sie haben einerseits für einen überschaubaren Zeitraum Zinssicherheit, bleiben aber andererseits flexibel, um auf mittelfristige Veränderungen wie etwa die Zinsentwicklung oder die Lebenssituation zu reagieren.</p>
            <p><strong>Vorteile:</strong></p>
            <ul>
                <li>Fester Zinssatz für die Laufzeit.</li>
                <li>Geringeres Zinsänderungsrisiko als bei einer Saron-Hypothek.</li>
                <li>Nach Ablauf der Laufzeit können Sie neu verhandeln.</li>
            </ul>
            <p><strong>Nachteile:</strong></p>
            <ul>
                <li>Potenziell höhere Zinskosten als bei einer Saron-Hypothek.</li>
                <li>Weniger Flexibilität als bei einer Saron-Hypothek.</li>
            </ul>
            <p><strong>Für wen geeignet:</strong></p>
            <ul>
                <li>Wohneigentümer, die kurz- bis mittelfristige Planungssicherheit wünschen.</li>
                <li>Personen, die eine gewisse Flexibilität behalten möchten.</li>
                <li>Wenn eine baldige Pensionierung ansteht, sollte eine Tragbarkeitsberechnung vorgenommen werden.</li>
            </ul>
            <p><strong>Zusätzliche Überlegungen:</strong></p>
            <ul>
                <li>Achten Sie auf den Ablauf Ihrer Hypothek.</li>
                <li>Prüfen Sie Forward-Hypotheken.</li>
                <li>Der direkte Richtwert für die Tragbarkeit ist der sogenannte Kalkulationszinssatz von 4,5–5%.</li>
                <li>Steuerliche Aspekte: Die Hypothekarzinsen sind abziehbar.</li>
            </ul>
        `,
        langfrist: `
            <h2>Empfehlung: Langfristige Festhypothek (10+ Jahre)</h2>
            <p>Eine langfristige Festhypothek mit einer Laufzeit von 10 Jahren oder mehr sichert Ihnen die aktuellen Zinskonditionen für einen sehr langen Zeitraum. Dies gibt Ihnen maximale Planungssicherheit und schützt Sie vollständig vor Zinserhöhungen – allerdings zu höheren Kosten und mit eingeschränkter Flexibilität.</p>
            <p><strong>Vorteile:</strong></p>
            <ul>
                <li>Konstante monatliche Raten.</li>
                <li>Kein Zinsänderungsrisiko.</li>
                <li>Ideal für langfristige Planung.</li>
            </ul>
            <p><strong>Nachteile:</strong></p>
            <ul>
                <li>Potenziell höhere Zinskosten als bei kürzeren Laufzeiten.</li>
                <li>Geringe Flexibilität.</li>
            </ul>
            <p><strong>Für wen geeignet:</strong></p>
            <ul>
                <li>Sicherheitsorientierte Wohneigentümer.</li>
                <li>Personen, die Wert auf maximale Planbarkeit legen.</li>
            </ul>
            <p><strong>Zusätzliche Überlegungen:</strong></p>
            <ul>
                <li>Vorzeitige Auflösung: Es wird eine Vorfälligkeitsentschädigung fällig.</li>
                <li>Amortisation: Prüfen Sie die indirekte Amortisation.</li>
                <li>Überprüfen Sie etwa sechs Monate vor Ablauf die Konditionen.</li>
            </ul>
        `,
        splitting: `
            <h2>Empfehlung: Hypotheken-Splitting</h2>
            <p>Das Hypotheken-Splitting – also die Aufteilung Ihrer Gesamthypothek in mehrere Teilhypotheken mit unterschiedlichen Laufzeiten und Zinsmodellen – ermöglicht Ihnen eine Risikostreuung.</p>
            <p><strong>Beispiel-Splitting:</strong></p>
            <ul>
                <li>40% Saron-Hypothek</li>
                <li>30% mittelfristige Festhypothek (5 Jahre)</li>
                <li>30% langfristige Festhypothek (10 Jahre)</li>
            </ul>
            <p><strong>Vorteile:</strong></p>
            <ul>
                <li>Diversifikation des Zinsrisikos.</li>
                <li>Kombination verschiedener Hypothekenarten.</li>
            </ul>
            <p><strong>Nachteile:</strong></p>
            <ul>
                <li>Kann komplexer sein.</li>
                <li>Kann die Flexibilität einschränken.</li>
            </ul>
            <p><strong>Für wen geeignet:</strong></p>
            <ul>
                <li>Wohneigentümer, die Risiken streuen möchten.</li>
                <li>Personen, die sich nicht festlegen möchten.</li>
            </ul>
            <p><strong>Empfehlungen für effektives Splitting:</strong></p>
            <ul>
                <li>Verteilen Sie die Ablaufdaten sinnvoll.</li>
                <li>Vermeiden Sie zu kleine Tranchen (unter 100'000 Fr.).</li>
                <li>Überprüfen Sie regelmässig Ihre Strategie.</li>
            </ul>
        `,
        beratung: `
            <h2>Persönliche Fachberatung empfohlen</h2>
            <p>Basierend auf Ihren Antworten erfordert Ihre Situation eine Analyse durch einen Experten, um die passende Lösung zu finden.</p>
            <p><strong>Nächste Schritte für Sie:</strong></p>
            <ul>
                <li>Holen Sie Offerten von verschiedenen Anbietern ein.</li>
                <li>Bereiten Sie folgende Unterlagen für das Beratungsgespräch vor: Lohnausweise, Steuererklärung, Betreibungsregisterauszug, Grundbuchauszug, bestehende Hypothekarverträge und Details zu Ihren Vermögenswerten.</li>
                <li>Klären Sie im Beratungsgespräch: Zinssätze, Zinsentwicklung, Amortisationsstrategie, steuerliche Optimierung und Eigenkapitalstruktur.</li>
            </ul>
        `
    }
};

function createQuestionnaire() {
    console.log("createQuestionnaire function called");

    const mainTitleElement = document.getElementById('mainTitle');
    const introText1Element = document.getElementById('introText1');
    const introText2Element = document.getElementById('introText2');
    const disclaimerTitleElement = document.getElementById('disclaimerTitle');
    const disclaimerTextElement = document.getElementById('disclaimerText');
    const questionnaireForm = document.getElementById('questionnaire');

    if (!mainTitleElement || !introText1Element || !introText2Element || !disclaimerTitleElement || !disclaimerTextElement || !questionnaireForm) {
        console.error("One or more required elements not found in the DOM.");
        return;
    }

    mainTitleElement.innerText = textContent.mainTitle;
    introText1Element.innerText = textContent.introText1;
    introText2Element.innerText = textContent.introText2;
    disclaimerTitleElement.innerText = textContent.disclaimerTitle;
    disclaimerTextElement.innerText = textContent.disclaimerText;

    questionnaireForm.innerHTML = '';

    console.log("textContent.questions:", textContent.questions);

    if (!textContent.questions || !Array.isArray(textContent.questions)) {
        console.error("textContent.questions is missing or not an array.");
        return;
    }

    textContent.questions.forEach(question => {
        console.log("Current question:", question);
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

        if (!question.options || !Array.isArray(question.options)) {
            console.warn(`Question ${question.id} has missing or invalid options.`);
            return;
        }

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
    adjustPoints('q2', {
        steigend: { saron: -3, kurz: 1, lang: 2 },
        gleichbleibend: { saron: 1, kurz: 1, lang: 0, splitting: 1 },
        fallend: { saron: 2, kurz: 0, lang: -3 }
    });
    adjustPoints('q3', {
        klein: { saron: -1, kurz: 0, lang: 1, splitting: 1 },
        mittel: { saron: 1, kurz: 0, lang: 0 },
        gross: { saron: 2, kurz: 1, lang: -2, splitting: -1 }
    });
    adjustPoints('q4', {
        stabil: { saron: 0, kurz: 1, lang: 2, beratung: -1 },
        gut: { saron: 1, kurz: 1, lang: 0, splitting: 1 },
        angespannt: { saron: 2, kurz: -1, lang: -2, beratung: 2, splitting: 1 }
    });
    adjustPoints('q5', {
        flexibel: { saron: 3, kurz: -1, lang: -2, splitting: 1 },
        ausgewogen2: { saron: 1, kurz: 1, lang: 0, splitting: 1 },
        sicher2: { saron: -2, kurz: 1, lang: 3, splitting: -1 }
    });
    adjustPoints('q6', {
        ja: { saron: 2, kurz: 0, lang: -1, splitting: 1 },
        vielleicht: { saron: 1, kurz: 1, lang: 0 },
        nein: { saron: -1, kurz: 0, lang: 1, beratung: 1, splitting: -1 }
    });
    adjustPoints('q7', {
        kurz: { saron: 3, kurz: 1, lang: -2 },
        mittel2: { saron: 1, kurz: 2, lang: 0, splitting: 1 },
        lang: { saron: -2, kurz: 0, lang: 3, splitting: -1 }
    });
    adjustPoints('q8', {
        ja2: { saron: 2, kurz: 0, lang: -1, beratung: -1 },
        begrenzt: { saron: 1, kurz: 1, lang: 0, splitting: 1 },
        nein2: { saron: -2, kurz: 0, lang: 1, beratung: 2, splitting: -1 }
    });
    adjustPoints('q9', {
        aktiv: { saron: 3, kurz: -1, lang: -2, splitting: 1 },
        passiv: { saron: 1, kurz: 1, lang: 0, splitting: 1 },
        sehrPassiv: { saron: -2, kurz: 1, lang: 2, splitting: -1 }
    });
    adjustPoints('q10', {
        ja3: { splitting: 3 },
        nein3: { splitting: -3 },
        unsicher: { beratung: 3 }
    });
    adjustPoints('q11', {
        pensionJa: { kurz: 2, lang: 1, beratung: 2 },
        pensionNein: { saron: 1, kurz: 0, lang: 0 },
    });
    adjustPoints('q12', {
        tragbarKeinProblem: { saron: 3, kurz: 0, lang: -2, beratung: -2 },
        tragbarAngespannt: { kurz: 1, lang: 1, beratung: 1, splitting: 1 },
        tragbarNein: { saron: -3, kurz: 0, lang: 2, beratung: 3, splitting: -1 }
    });

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
    debouncedSendHeight(); // Send height after calculating the result.
}


// --- iFrame Resizing Logic (Improved) ---

let resizeTimeout;
const cmsDomain = 'your-cms-domain.com'; // *** REPLACE WITH YOUR CMS DOMAIN ***

function sendHeight() {
    // Use document.documentElement for more reliable height
    const height = document.documentElement.scrollHeight;

    if (window.parent !== window) { // Check if in iframe
        console.log("Sending height:", height);
        window.parent.postMessage({ type: 'resize', height: height }, cmsDomain);
    } else {
        console.warn("Not in an iframe - height not sent.");
    }
}

function debouncedSendHeight() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(sendHeight, 200); // Debounce by 200ms
}

// --- Initialize ---

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired");
    try {
        createQuestionnaire();

        // Use ResizeObserver for the most reliable height updates
        const resizeObserver = new ResizeObserver(debouncedSendHeight);
        resizeObserver.observe(document.documentElement); // Observe the root element

        // Initial height send (after a small delay, just in case)
        setTimeout(sendHeight, 500);

    } catch (e) {
        console.error("Error in createQuestionnaire:", e);
        const questionnaireElement = document.getElementById('questionnaire');
        if (questionnaireElement) {
            questionnaireElement.innerHTML = "<p style='color:red;'>Fehler beim Laden der Fragen: " + e.message + "</p>";
        }
        debouncedSendHeight(); // Send height even on error.
    }
});

window.addEventListener('load', debouncedSendHeight); // Also send after all resources load.