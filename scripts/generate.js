const fs = require('fs');
const path = require('path');

/**
 * Generiert eine zufällige 4-stellige Zahlenfolge.
 */
function generateRandomSuffix() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

/**
 * Generiert eine neue Werkstatt-Webseite aus einem Template.
 * @param {string} rawSlug - Der Basis-Name (z.B. 'autodienst-harburg')
 * @param {string} templateName - Der Dateiname des Templates (z.B. 'Template_A.html')
 * @param {Object} config - Die spezifischen Daten der Werkstatt
 */
function generateWorkshop(rawSlug, templateName, config) {
    const slug = `${rawSlug}-${generateRandomSuffix()}`;
    const templatePath = path.join(__dirname, '../templates', templateName);
    const outputDir = path.join(__dirname, '../docs', slug);
    const outputPath = path.join(outputDir, 'index.html');

    if (!fs.existsSync(templatePath)) {
        console.error(`Template nicht gefunden: ${templatePath}`);
        return;
    }

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    let templateContent = fs.readFileSync(templatePath, 'utf8');

    // Ersetzt das CONFIG Objekt im Template
    // Wir suchen nach 'const CONFIG = { ... };' und ersetzen den Inhalt
    const configRegex = /const CONFIG = \{[\s\S]*?\};/;
    const newConfigStr = `const CONFIG = ${JSON.stringify(config, null, 4)};`;

    templateContent = templateContent.replace(configRegex, newConfigStr);

    // Optional: Kopieren von spezifischen Bildern, falls nötig
    // Aktuell gehen wir davon aus, dass Pfade in der Config stimmen

    fs.writeFileSync(outputPath, templateContent, 'utf8');
    console.log(`Erfolgreich generiert: ${outputPath}`);
}

// Beispiel Aufruf (kann später durch CLI Argumente ersetzt werden)
/*
const sampleConfig = {
    company: {
        name: "Autodienst Harburg",
        shortName: "Autodienst",
        logo: "../../images/harburg/logo.png",
        primaryColor: "#003B95",
    },
    // ... restliche Config
};
generateWorkshop('autodienst-harburg', 'Template_A.html', sampleConfig);
*/

module.exports = { generateWorkshop };
