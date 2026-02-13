# Metriq KFZ - Multitenant Website Generator

Dieses Repository dient zur zentralen Verwaltung und Generierung von Webseiten für KFZ-Werkstätten.

## Struktur

- `templates/`: Enthält die Master-Layouts (Variante A, B, C...).
- `docs/`: Enthält die generierten Live-Webseiten für die GitHub Pages Veröffentlichung.
- `images/`: Zentrale Bildverwaltung.
  - `mocks/`: Allgemeine Platzhalterbilder für Leistungen etc.
- `scripts/`: Automatisierungsskripte zur Generierung neuer Werkstatt-Seiten.

## Deployment

Die Webseiten werden über GitHub Pages unter folgenden URLs bereitgestellt:
`https://[username].github.io/Metriq_kfz/[werkstatt-name]/`

## Workflow

1. Neues Template in `templates/` erstellen oder ein bestehendes wählen.
2. Bilder des Kunden in einen entsprechenden Ordner unter `images/` ablegen.
3. Generierungsskript ausführen (Details folgen).
