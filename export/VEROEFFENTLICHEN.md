# Veröffentlichung über GitHub Pages + Strato-Domain

## 1. Repository anlegen

1. github.com → oben rechts **+** → **New repository**
2. Name: `unvia-website`
3. Sichtbarkeit: **Public** (GitHub Pages ist bei privaten Repos nur mit bezahltem Plan möglich)
4. **Create repository**

## 2. Dateien hochladen

1. Im leeren Repo: **uploading an existing file**
2. Den **Inhalt** des Ordners `export` hineinziehen – nicht den Ordner selbst.
   `index.html` muss auf der obersten Ebene liegen, daneben der Ordner `assets`.
3. Unten **Commit changes**

Enthalten sein müssen:
`index.html`, `leistungen.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`,
`site.js`, `robots.txt`, `sitemap.xml`, `CNAME`, Ordner `assets/`

## 3. GitHub Pages aktivieren

1. Repo → **Settings** → links **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, Ordner: **/ (root)** → **Save**
4. Nach ein bis zwei Minuten ist die Seite unter `https://<benutzername>.github.io/unvia-website/` erreichbar.

## 4. Eigene Domain in GitHub eintragen

1. Settings → Pages → **Custom domain**: `www.unvia.online` → **Save**
2. GitHub prüft nun die DNS-Einstellungen; die Meldung „Domain's DNS record could not be verified"
   ist normal, bis Schritt 5 erledigt und verteilt ist.

## 5. DNS bei Strato einstellen

Strato-Kundenlogin → **Domainverwaltung** → bei `unvia.online` auf **Verwalten** →
**DNS-Einstellungen** (teilweise „Nameserver / DNS").

**A-Records für die Hauptdomain** `unvia.online` – alle vier anlegen:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME für die www-Adresse:**

```
Name:  www
Ziel:  <benutzername>.github.io
```

`<benutzername>` ist Ihr GitHub-Kontoname, kleingeschrieben, mit Punkt am Ende, falls Strato das verlangt.

Falls Strato bei der Hauptdomain eine Weiterleitung („Domain-Weiterleitung", „Frame-Weiterleitung")
voreingestellt hat: deaktivieren, sonst greifen die A-Records nicht.

Die Verteilung dauert meist 15 Minuten bis wenige Stunden, in Einzelfällen bis 24 Stunden.

## 6. HTTPS aktivieren

Sobald GitHub die Domain als verifiziert anzeigt: Settings → Pages → **Enforce HTTPS** anhaken.
Das Zertifikat stellt GitHub kostenlos über Let's Encrypt aus.

## 7. Danach prüfen

- `https://www.unvia.online` lädt die Startseite
- `https://unvia.online` leitet auf die www-Adresse weiter
- Alle Seiten und Bilder laden, Menü und Kontaktformular funktionieren
- `https://www.unvia.online/sitemap.xml` ist erreichbar

## Änderungen später

Datei im Repo öffnen → Stift-Symbol → bearbeiten → **Commit changes**.
Die Seite aktualisiert sich innerhalb einer Minute selbst.

## Noch offen vor dem Livegang

- **Impressum:** USt-IdNr. ergänzen (im Text beige markiert)
- **Datenschutz:** als Hosting-Anbieter „GitHub Inc." eintragen (Server in den USA,
  Standardvertragsklauseln) – der Abschnitt „Zugriffsdaten und Hosting" ist entsprechend markiert
- **Schriftarten:** Outfit und Manrope werden noch von Google geladen. Für eine DSGVO-saubere
  Lösung lokal einbinden – Anleitung in `LIESMICH.md`
- **Zitat** von Joscha Tümmler ist als Entwurf markiert und braucht seine Freigabe
- **LinkedIn:** Social-Block im Footer entfernt, bis die Unternehmens-URL vorliegt
