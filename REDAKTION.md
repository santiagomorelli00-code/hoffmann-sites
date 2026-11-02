# Redaktionelle Hinweise

Die Änderungen aus Homepage_.pdf sind im lokalen Projekt umgesetzt. Es wurde nichts auf den bestehenden Webserver veröffentlicht.

## Noch einzupflegen

- Unternehmensstrafrecht: Der freigegebene Fachtext folgt. Sichtbarer Platzhalter in `unternehmensstrafrecht.html` und den beiden Tätigkeitsübersichten.
- Materielles Strafrecht: Die 13 Karten enthalten HTML-Kommentare für spätere Beschreibungen.

## Aktuelles pflegen

`assets/js/news-data.js` ist die gemeinsame Datenquelle für die Startseite und das Archiv. Einen neuen Eintrag mit eindeutiger `id`, Datum im Format `YYYY-MM-DD`, `title`, `body`, `excerpt` und `category` hinzufügen. Kategorien: `Aktuelles`, `Publikation`, `Vortrag`. Das Datum bestimmt die Reihenfolge. Die drei neuesten Einträge der Kategorie `Aktuelles` erscheinen automatisch auf der Startseite; alle Einträge bleiben im Archiv. `body` enthält geprüftes HTML und darf keine Skripte, Ereignisattribute oder automatisch geladenen externen Einbettungen enthalten. Bilder lokal unter `assets/news/` ablegen.

106 Beiträge wurden über die öffentliche WordPress-Schnittstelle der bestehenden Kanzleiwebsite übernommen (56 Meldungen, 27 Publikationen, 23 Vorträge). Als Sortierdatum dient das ursprüngliche Veröffentlichungsdatum, nicht ein im Artikel erwähnter Veranstaltungs- oder Urteilstermin. Die HTML-Dateien enthalten zusätzlich einen statischen Stand als Fallback ohne JavaScript; bei späteren Änderungen diesen Stand für Suchmaschinen und Browser ohne JavaScript ebenfalls aktualisieren.

## Externe Dienste

Schriften und Beitragsbilder werden lokal geladen. Die bisher direkt eingebettete Google-Karte wurde durch einen externen Link ersetzt. Die Website setzt selbst keine Cookies und speichert keine Einwilligungsdaten. LinkedIn und Google Maps werden erst beim Anklicken der jeweiligen Links geöffnet.

Die bestehende Datenschutzerklärung enthält weiterhin den bereits vorhandenen Hinweis auf ihren Vorlagenstatus; die Abschnitte zu Cookies und Kartendienst wurden an die technische Umsetzung angepasst.
