# 🚀 Netlify Deployment Guide

## Metod 1: Via Netlify Dashboard (Enklast)

### Steg 1: Skapa Netlify-konto
1. Gå till: https://www.netlify.com/
2. Klicka **Sign up** (eller logga in om du redan har konto)
3. Välj **GitHub** för att logga in

### Steg 2: Importera från GitHub
1. Klicka **Add new site** → **Import an existing project**
2. Välj **Deploy with GitHub**
3. Auktorisera Netlify att komma åt dina repos
4. Välj repository: **Presentation-ESM**

### Steg 3: Konfigurera build-inställningar
Netlify kommer automatiskt att upptäcka inställningarna från `netlify.toml`, men verifiera:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

Klicka **Deploy site**

### Steg 4: Vänta på deployment
- Första bygget tar ~2-3 minuter
- Du får en URL typ: `https://random-name-123456.netlify.app`

### Steg 5: Anpassa domän (Valfritt)
1. Gå till **Site settings** → **Domain management**
2. Klicka **Options** → **Edit site name**
3. Ändra till något som: `esm-presentation`
4. Din nya URL: `https://esm-presentation.netlify.app`

---

## Metod 2: Via Netlify CLI (Avancerat)

### Installation
```bash
npm install -g netlify-cli
```

### Logga in
```bash
netlify login
```

### Deploy
```bash
# Första gången
netlify init

# Framtida deployments
netlify deploy --prod
```

---

## Automatisk Deployment

Netlify är nu kopplat till ditt GitHub-repo!

**Varje gång du pushar till `main`:**
1. Netlify upptäcker ändringen automatiskt
2. Bygger projektet
3. Deployer den nya versionen
4. Tar ~1-2 minuter

---

## Fördelar med Netlify vs GitHub Pages

✅ **Snabbare deployment** (~1-2 min vs 3-5 min)  
✅ **Bättre preview** - Automatiska preview-URLs för pull requests  
✅ **Enklare custom domains** - Gratis SSL-certifikat  
✅ **Bättre felmeddelanden** - Tydligare build-logs  
✅ **Formulär & funktioner** - Kan lägga till serverless functions  
✅ **Analytics** - Inbyggd besöksstatistik  

---

## Felsökning

### Problem: Build misslyckas

**Kontrollera build-loggen:**
1. Gå till **Deploys** i Netlify dashboard
2. Klicka på den misslyckade deployen
3. Läs felmeddelandet

**Vanliga lösningar:**
- Kontrollera att `package.json` har rätt dependencies
- Se till att Node-versionen är kompatibel (18+)

### Problem: Sidan visar blank/vit skärm

**Lösning:**
1. Öppna browser console (F12)
2. Kolla efter 404-fel
3. Verifiera att alla filer finns i `/public`

### Problem: Bilder syns inte

**Lösning:**
Kontrollera att bilderna ligger i `/public`:
```
public/
  ├── ESM_logo_main.jpg
  ├── TrivselBo.png
  ├── SocialBo.png
  ├── KulturBo.png
  └── ServiceBo.png
```

---

## Custom Domain (Egen domän)

Om du vill använda `presentation.esm.se`:

### I Netlify:
1. **Domain settings** → **Add custom domain**
2. Skriv: `presentation.esm.se`
3. Netlify ger dig DNS-inställningar

### Hos din DNS-leverantör:
Lägg till en CNAME-record:
```
Type: CNAME
Name: presentation
Value: [din-site].netlify.app
```

Netlify hanterar SSL-certifikat automatiskt! 🔒

---

## Jämförelse: Dina deployment-alternativ

| Feature | Netlify | GitHub Pages |
|---------|---------|--------------|
| **Deployment-tid** | 1-2 min | 3-5 min |
| **Setup** | Mycket enkelt | Kräver konfiguration |
| **Custom domain** | Gratis SSL | Gratis SSL |
| **Build logs** | Tydliga | Mindre tydliga |
| **Preview URLs** | ✅ Ja | ❌ Nej |
| **Analytics** | ✅ Inbyggt | ❌ Nej |
| **Kostnad** | Gratis | Gratis |

---

**Rekommendation:** Använd Netlify för enklare hantering och snabbare deployment! 🚀

**Din Netlify-URL kommer vara:**
```
https://[ditt-site-namn].netlify.app
```
