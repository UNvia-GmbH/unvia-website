# UNvia Website – Livegang

## Inhalt des Pakets

```
index.html          Startseite
leistungen.html     Was wir machen
kontakt.html        Kontakt
impressum.html      Impressum
datenschutz.html    Datenschutz
site.js             Navigation, Scroll-Animationen, Kontaktformular
robots.txt          Suchmaschinen
sitemap.xml         Seitenverzeichnis (Domain ggf. anpassen)
assets/             Logo, Signet, Bilder
```

Reine statische Dateien: kein Server, kein CMS, keine Datenbank nötig.

## Empfehlung Hosting

Für eine deutsche GmbH mit DSGVO-Anspruch: **Webspace bei einem deutschen Anbieter**, z. B.
All-Inkl (Paket „Privat"/„PrivatPlus", ab ca. 5 €/Monat) oder Hetzner Webhosting. Dort
Vertrag zur Auftragsverarbeitung (AVV) im Kundenkonto abschließen und den Anbieter in der
Datenschutzerklärung eintragen.

Ablauf:

1. Webhosting-Paket bestellen, Domain `unvia.online` dort einbinden (Nameserver oder A-Record).
2. Inhalt dieses Ordners per FTP/SFTP in das Web-Verzeichnis hochladen (`/httpdocs` bzw. `/html`).
   `index.html` muss direkt im Wurzelverzeichnis liegen.
3. SSL-Zertifikat (Let's Encrypt) im Hosting-Panel aktivieren und Weiterleitung auf HTTPS einschalten.
4. Weiterleitung von `unvia.online` auf `www.unvia.online` (oder umgekehrt) festlegen – eine Variante als Standard.

Schneller, aber US-Anbieter: Netlify (netlify.com/drop) – Ordner ins Browserfenster ziehen,
HTTPS und CDN inklusive. Dann Netlify in der Datenschutzerklärung als Auftragsverarbeiter nennen.

## Schriftarten lokal einbinden (empfohlen)

Aktuell werden Outfit und Manrope von Google Fonts geladen; dabei wird die IP-Adresse der
Besucher an Google übertragen. So wird daraus eine lokale Einbindung:

1. Auf https://gwfh.mranftl.com die Familien **Outfit** (300, 400, 500, 600) und
   **Manrope** (400, 500, 600) auswählen, „Modern Browsers" wählen und die woff2-Dateien
   herunterladen.
2. Dateien nach `assets/fonts/` legen.
3. In jeder HTML-Datei die beiden Google-Zeilen im `<head>` löschen:

   ```html
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
   <link href="https://fonts.googleapis.com/css2?family=Outfit..." rel="stylesheet">
   ```

4. Stattdessen im `<style>`-Block ergänzen (Beispiel, pro Schnitt eine Regel):

   ```css
   @font-face{font-family:'Outfit';font-style:normal;font-weight:400;font-display:swap;
     src:url('assets/fonts/outfit-v11-latin-regular.woff2') format('woff2');}
   @font-face{font-family:'Manrope';font-style:normal;font-weight:400;font-display:swap;
     src:url('assets/fonts/manrope-v15-latin-regular.woff2') format('woff2');}
   ```

   Dateinamen an den Download anpassen; für jeden benötigten Schnitt (300/500/600) eine
   weitere Regel mit passendem `font-weight`.

## Noch offen vor dem Livegang

- **Impressum:** USt-IdNr. ergänzen (im Text beige markiert).
- **Datenschutz:** Hosting-Anbieter eintragen, Abschnitt zu Schriftarten anpassen, sobald
  die Fonts lokal liegen. Text juristisch prüfen lassen.
- **Kontaktformular:** öffnet derzeit das E-Mail-Programm des Besuchers (mailto). Für echten
  Serverversand ist ein Formulardienst oder ein PHP-Skript nötig.
- **sitemap.xml / robots.txt:** Domain anpassen, falls nicht `www.unvia.online`.
