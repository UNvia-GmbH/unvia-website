# Preview der Gesamtschule Am Wassermann veröffentlichen

Ziel-Adresse: **https://www.unvia.de/wassermann/**

## Warum nicht wassermann.unvia.de

GitHub Pages erlaubt pro Repository genau eine eigene Domain, und die ist im Repo
`unvia-website` schon mit `www.unvia.de` belegt. Eine Subdomain würde ein zweites
Repository plus eigenen DNS-Eintrag bei Strato brauchen. Der Unterordner kostet
nichts, ist in zwei Minuten online und liest sich in einer Mail genauso gut.

## Hochladen

1. github.com/UNvia-GmbH/unvia-website öffnen
2. **Add file** → **Upload files**
3. Die Datei `index.html` aus diesem Ordner hineinziehen
4. Im Feld über der Dateiliste den Pfad voranstellen: `wassermann/index.html`
   (alternativ vorher **Create new file** und `wassermann/index.html` eintippen)
5. Unten **Commit changes**

Nach etwa einer Minute ist die Seite unter https://www.unvia.de/wassermann/ erreichbar.

## Vor Google verstecken

Die Seite trägt bereits `<meta name="robots" content="noindex, nofollow">`.
Zusätzlich in der `robots.txt` des Repos eine Zeile ergänzen:

```
Disallow: /wassermann/
```

## Später aktualisieren

Neue Version aus dem Projekt exportieren und `wassermann/index.html` im Repo
überschreiben (Datei öffnen → Stift → Inhalt ersetzen → Commit).

## Hinweis zu den Bildern

Die Fotos werden von amwassermann.de geladen. Ändert die Schule dort etwas,
fehlen sie hier. Für eine belastbare Präsentation die Bilder herunterladen,
in `wassermann/bilder/` legen und die Pfade ersetzen.
