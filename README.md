# ESM Presentation & Demo – ESMA AI för Energismarta Fastigheter

En komplett presentationsapplikation med interaktiv demo som visar hur ESM:s AI-plattform (ESMA) analyserar fastigheter och föreslår åtgärder för energieffektivisering.

## 🎯 Syfte

Denna applikation används under presentationer för att:
- Presentera ESM:s värdeförslag och lösningar steg-för-steg
- Visa konkret värde av AI-analys genom interaktiv demo
- Ge publiken en "aha-upplevelse"
- Demonstrera energibesparingar visuellt och interaktivt

## 📋 Två lägen

### 1. **Presentationsläge** 📊
Komplett genomgång med 25+ slides som täcker:
- **Steg 1**: Mål och nytta för kunden
- **Steg 2**: Dagens problem i fastighetsbranschen
- **Steg 3**: ESM:s Bo-koncept (TrivselBo, SocialBo, KulturBo, ServiceBo)
- **Steg 4**: Processöversikt
- **Steg 5**: AI-funktionalitet
- **Steg 6**: Fördelar i vardagen
- **Steg 7**: ESMA-verktyget (med övergång till interaktiv demo)
- **Steg 8**: ROI och scenariojämförelser
- **Steg 9**: Q&A

### 2. **Interaktiv Demo** 🤖
Hands-on demonstration av ESMA där användaren kan:
- Välja mellan olika Bo-koncept
- Se nulägesanalys
- Bocka i/ur AI-föreslagna åtgärder
- Se realtidsberäkningar av besparingar
- Visualisera resultat i diagram

## 🚀 Kom igång

### Installation

```bash
npm install
```

### Starta utvecklingsserver

```bash
npm run dev
```

Applikationen öppnas automatiskt på `http://localhost:3000`

### Bygga för produktion

```bash
npm run build
```

### Förhandsgranska produktionsbygge

```bash
npm run preview
```

## 📋 Funktioner

### 1. Konceptväljare
Välj mellan fyra Bo-koncept:
- 🏠 **TrivselBo** – Rosengården, Malmö
- 🤝 **SocialBo** – Björkhagen, Stockholm
- 🏛️ **KulturBo** – Gamla Stadshuset, Göteborg
- 🏥 **ServiceBo** – Ekbacken, Uppsala

### 2. Nulägesanalys
Visar aktuella kostnader och utsläpp:
- ⚡ Energikostnad per år
- 🌍 CO₂-utsläpp per år
- 🔧 Underhållskostnad per år

### 3. AI-åtgärdsförslag
Interaktiv planering där användaren kan:
- Bocka i/ur olika åtgärder
- Se realtidsuppdatering av besparingar
- Visualisera före/efter i diagram
- Beräkna återbetalningstid

### 4. Sammanfattning
Tydlig översikt med:
- Total besparing (kr/år och %)
- CO₂-minskning (ton/år och %)
- Återbetalningstid och ROI
- Visuell jämförelse före/efter

## 🛠️ Teknisk Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Diagram**: Chart.js + react-chartjs-2
- **Typsnitt**: Poppins (Google Fonts)

## 🎨 Design

### Färgpalett
- **Primär grön**: `#2AAE82`
- **Sekundär grön**: `#27B1A6`
- **Mörk grön**: `#17818E`
- **Röd** (före): `#E53E3E`
- **Gul** (varning): `#ECC94B`
- **Blå** (info): `#4299E1`

### Typografi
- **Font**: Poppins
- **Vikter**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 📁 Projektstruktur

```
esm-demo/
├── public/
│   ├── ESM_logo_main.jpg
│   └── *.png (Bo-koncept bilder)
├── src/
│   ├── components/
│   │   ├── ConceptSelector.jsx
│   │   ├── CurrentState.jsx
│   │   ├── ActionPlanner.jsx
│   │   ├── Summary.jsx
│   │   ├── MetricCard.jsx
│   │   ├── ActionCard.jsx
│   │   └── ComparisonChart.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎭 Användning under presentation

### Alternativ 1: Full presentation
1. Starta appen och välj "Starta Presentation"
2. Tryck F för fullskärm
3. Navigera med piltangenter eller mellanslag
4. Vid ESMA-demon (slide ~22), tryck D för att hoppa till interaktiv demo
5. Genomför demon (3-5 minuter)
6. Återgå till presentationen eller avsluta

### Alternativ 2: Endast demo
1. Starta appen och välj "Direkt till ESMA Demo"
2. Välj ett Bo-koncept (t.ex. TrivselBo)
3. Visa nuläget
4. Demonstrera AI-förslagen och interaktiviteten
5. Bocka i/ur åtgärder och visa hur siffrorna uppdateras
6. Visa sammanfattningen med tydliga besparingar

### Tangentbordsgenvägar (Presentationsläge)
- **→ / Mellanslag**: Nästa slide
- **← / PageUp**: Föregående slide
- **F**: Toggle fullskärm
- **D**: Hoppa till interaktiv demo (vid ESMA-slide)
- **Home**: Första sliden
- **End**: Sista sliden
- **Esc**: Avsluta fullskärm

## 💡 Tips för presentation

- Använd helskärmsläge (F11)
- Optimerad för 1920x1080 (projektor)
- Stora textstorlekar för god läsbarhet
- Animationer är smidiga (60 fps)
- Alla data uppdateras i realtid

## 📊 Mockdata

All data är hårdkodad i `src/data/mockData.js` och inkluderar:
- 4 olika Bo-koncept
- 5 åtgärder per koncept
- Realistiska kostnader och besparingar
- CO₂-beräkningar

## 🔧 Anpassning

För att lägga till nya koncept eller ändra data, redigera:
```javascript
// src/data/mockData.js
export const propertyData = {
  // Lägg till nya koncept här
}
```

## 📝 Licens

© 2024 ESM – Alla rättigheter förbehållna

---

**Utvecklad för ESM-presentationer**
