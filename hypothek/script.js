// Ensure DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    createQuestionnaire();
});

// Text content object
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
            <p>Eine langfristige Festhypothek mit einer Laufzeit von 10 Jahren oder mehr sichert Ihnen die aktuellen Zinskonditionen für einen sehr langen Zeitraum. Dies gibt Ihnen maximale Planungssicherheit und schützt Sie vollständig vor Zinserhöhungen – allerdings zu höheren Kosten und