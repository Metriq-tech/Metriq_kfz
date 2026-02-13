# Metriq KFZ - Multitenant Website Generator

Dieses Repository dient zur zentralen Verwaltung und Generierung von Webseiten für KFZ-Werkstätten.

## Struktur

- `templates/`: Enthält die Master-Layouts (Variante A, B, C...).
- `docs/`: Enthält die generierten Live-Webseiten für die GitHub Pages Veröffentlichung.
- `images/`: Zentrale Bildverwaltung.
  - `mocks/`: Allgemeine Platzhalterbilder für Leistungen etc.
- `scripts/`: Automatisierungsskripte zur Generierung neuer Werkstatt-Seiten.

## Deployment & Privatsphäre

Die Webseiten werden über GitHub Pages bereitgestellt. Um die Privatsphäre der Kunden zu schützen:
- Gibt es **keine öffentliche Auflistung** der Werkstätten auf der Hauptseite.
- Erhält jeder Unterordner eine **zufällige 4-stellige Endung** (z.B. `autodienst-harburg-8273`), sodass die URL nicht einfach erraten werden kann.

URL Format: `https://[username].github.io/Metriq_kfz/[werkstatt-name]-[random-id]/`

## Workflow

1. Neues Template in `templates/` erstellen oder ein bestehendes wählen.
2. Bilder des Kunden in einen entsprechenden Ordner unter `images/` ablegen.
3. Generierungsskript ausführen:
   - Das Skript erzeugt automatisch einen Ordner mit Zufalls-ID in `docs/`.
   - Die URL kann dann direkt an den Kunden kommuniziert werden.
