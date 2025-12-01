# 🚀 Deployment Guide - GitHub Pages

## Automatisk Deployment (Rekommenderas)

Din app är nu konfigurerad för automatisk deployment via GitHub Actions!

### Första gången - Aktivera GitHub Pages

1. **Pusha din kod till GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Aktivera GitHub Pages i ditt repo:**
   - Gå till: `https://github.com/[ditt-användarnamn]/Presentation-demo`
   - Klicka på **Settings** (⚙️)
   - Klicka på **Pages** i vänstermenyn
   - Under **Source**, välj: **GitHub Actions**
   - Klicka **Save**

3. **Vänta på deployment:**
   - Gå till **Actions**-fliken i ditt repo
   - Se att workflow "Deploy to GitHub Pages" körs
   - När den är klar (grön checkmark ✅), är din sida live!

### Din Live-URL

Din presentation kommer vara tillgänglig på:
```
https://[ditt-användarnamn].github.io/Presentation-demo/
```

### Framtida Updates

Varje gång du pushar till `main`-branchen kommer sidan automatiskt att uppdateras!

```bash
git add .
git commit -m "Uppdatera presentation"
git push origin main
```

---

## Manuell Deployment (Alternativ)

Om du föredrar manuell deployment:

```bash
npm run deploy
```

Detta bygger projektet och pushar till `gh-pages`-branchen.

**OBS:** Om du använder manuell deployment, välj `gh-pages` branch under Settings → Pages → Source.

---

## Felsökning

### Problem: Sidan visar 404

**Lösning:**
1. Kontrollera att GitHub Pages är aktiverat
2. Vänta 2-3 minuter efter första deployment
3. Kontrollera att `base` i `vite.config.js` matchar ditt repo-namn

### Problem: Bilder syns inte

**Lösning:**
Kontrollera att alla bilder ligger i `/public`-mappen:
- `/public/ESM_logo_main.jpg`
- `/public/TrivselBo.png`
- `/public/SocialBo.png`
- `/public/KulturBo.png`
- `/public/ServiceBo.png`

### Problem: GitHub Actions misslyckas

**Lösning:**
1. Gå till Settings → Actions → General
2. Under "Workflow permissions", välj:
   - ✅ Read and write permissions
3. Klicka Save

---

## Testa Lokalt Före Deployment

Bygg och testa produktionsversionen lokalt:

```bash
npm run build
npm run preview
```

Öppna: `http://localhost:4173`

---

## Custom Domain (Valfritt)

Om du vill använda en egen domän:

1. Skapa fil: `public/CNAME`
2. Lägg till din domän: `presentation.esm.se`
3. Konfigurera DNS hos din domänleverantör
4. Pusha till GitHub

---

**Lycka till med deployment!** 🎉
