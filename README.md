# Metriq KFZ - Digital Presence Hub

Dieses Repository dient zur zentralen Verwaltung, Generierung und Präsentation von Webseiten für KFZ-Werkstätten und Automotive-Unternehmen.

## 📁 Projektstruktur

- **`sites/`**: Enthält die fertig generierten Live-Projekte für Kunden.
  - `kuehler-kneesch/`: Das aktuelle Hauptprojekt inkl. aller Entwürfe (Version A, B, C) und dem zentralen Preview-Dashboard.
- **`templates/`**: Enthält Master-Konzepte und das universelle `Template_preview.html` für neue Kundenpräsentationen.
- **`images/`**: Zentrale Asset-Verwaltung.
  - `Metriq_Logo_Transparent.png`: Das offizielle Metriq-Branding.
  - `mocks/`: Hochwertiges Automotive-Bildmaterial für Radiator-Service, Klimatechnik, etc.
- **`AI_STATUS.md`**: Interner Statusbericht für die agentische Weiterentwicklung des Projekts.
- **`Roh-Informationen/`**: (Lokal ignoriert) Enthält Kundenbeschreibungen, Texte und unstrukturiertes Quellmaterial.

## 🚀 Key Features

- **Multi-Design Konzepte:** Pro Kunde werden drei strategisch unterschiedliche Designs erstellt (Tradition, Moderne, High-Tech).
- **Preview Hub:** Jedes Kundenverzeichnis enthält eine `preview.html`, die als zentrales, mobiles Dashboard für die Design-Abnahme dient.
- **Branding-Konsistenz:** Automatisierte Anwendung des Metriq-Coroporate-Designs (Farben: `#2DB7A3`, `#EAF6F5`, `#0F2436`).

## 🛠 Workflow

1.  **Input:** Rohdaten in `Roh-Informationen/` ablegen.
2.  **Generierung:** Auswahl des passenden Templates aus `templates/`.
3.  **Vorschau:** Link zur `preview.html` im entsprechenden Unterordner an den Kunden senden.

## 🔒 Privatsphäre & Hygiene

- Rohdaten, interne Baupläne und Statusberichte sind über die `.gitignore` vor versehentlichem Push geschützt.
- Die Ausspielung erfolgt über ein sauberes Verzeichnis-Mapping direkt in `sites/`.

---
*Created with ❤️ by Metriq Coding Lab*
