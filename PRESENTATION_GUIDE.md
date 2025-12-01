# 📊 ESM Presentation Guide

## Snabbstart

1. **Öppna applikationen**: `http://localhost:3000`
2. **Välj läge**:
   - "Starta Presentation" för fullständig genomgång
   - "Direkt till ESMA Demo" för endast interaktiv demo

## Presentationsflöde (25 slides)

### 🎯 Steg 1: Mål (2 slides)
**Slide 1-2**: Nytta för kunden & Före/Efter
- Visar värdeförslaget
- Konkret jämförelse

### ⚠️ Steg 2: Dagens Problem (4 slides)
**Slide 3-6**: Utmaningar i fastighetsbranschen
- Långsamma processer
- ÄTA och osäkra kalkyler
- Informationsflöde

### 🏠 Steg 3: Bo-Koncept (5 slides)
**Slide 7-11**: ESM:s lösningar
- Konceptintroduktion
- TrivselBo (med bild)
- SocialBo (med bild)
- KulturBo (med bild)
- ServiceBo (med bild)

### 🔄 Steg 4: Process (1 slide)
**Slide 12**: Processöversikt
- 5-stegs process från analys till optimering

### 🤖 Steg 5: AI (2 slides)
**Slide 13-14**: AI-funktionalitet
- Vad AI:t gör
- Före/Efter arbetsflöde

### ✅ Steg 6: Fördelar (4 slides)
**Slide 15-18**: Vardagsfördelar
- Mindre administration
- Tryggare kalkyler
- Snabbare beslut
- Bättre uppföljning

### 🎮 Steg 7: ESMA (2 slides)
**Slide 19-20**: ESMA-verktyget
- Introduktion
- **INTERAKTIV DEMO** (Tryck 'D' här!)

### 💰 Steg 8: ROI (2 slides)
**Slide 21-22**: Ekonomi
- Fördelar
- Scenariojämförelse

### ❓ Steg 9: Avslutning (1 slide)
**Slide 23**: Q&A
- Kontaktinformation

## Tangentbordskommandon

### Navigation
- **→** eller **Mellanslag**: Nästa slide
- **←** eller **PageUp**: Föregående slide
- **Home**: Första sliden
- **End**: Sista sliden

### Funktioner
- **F**: Toggle fullskärm (rekommenderas!)
- **D**: Hoppa till interaktiv demo (vid ESMA-slide)
- **Esc**: Avsluta fullskärm

## Tips för Presentatören

### Förberedelser
1. ✅ Starta appen minst 5 min innan presentation
2. ✅ Testa fullskärmsläge (F)
3. ✅ Bekanta dig med tangentbordsnavigation
4. ✅ Testa övergången till interaktiv demo (slide 20)

### Under Presentationen
- **Timing**: ~20-25 minuter total
  - Slides 1-19: ~15-17 minuter
  - Interaktiv demo: ~3-5 minuter
  - Q&A: ~5 minuter

- **Animationer**: Varje slide har inbyggda animationer
  - Vänta 1-2 sekunder mellan klick för bästa effekt
  - Låt animationerna spela klart

- **Interaktiv Demo** (Slide 20):
  1. Tryck 'D' för att starta demon
  2. Välj ett Bo-koncept (TrivselBo rekommenderas)
  3. Visa nuläget
  4. Demonstrera AI-åtgärder (bocka i/ur)
  5. Visa hur siffror uppdateras i realtid
  6. Visa sammanfattning
  7. Klicka "Tillbaka till start" för att återgå

### Rekommenderade Pausplatser
- Efter Slide 6 (Problem): Fråga om publiken känner igen sig
- Efter Slide 11 (Bo-koncept): Fråga vilket koncept som är mest relevant
- Efter Slide 20 (Demo): Ta frågor om ESMA
- Slide 23 (Q&A): Öppna upp för diskussion

## Tekniska Detaljer

### Bildformat
- Optimerad för: **1920x1080** (Full HD projektor)
- Fungerar på: Alla skärmstorlekar (responsiv)
- Rekommendation: Använd fullskärm (F)

### Prestanda
- Animationer: 60 fps
- Laddningstid: < 2 sekunder
- Ingen internetanslutning krävs efter laddning

### Felsökning

**Problem**: Animationer laggar
- **Lösning**: Stäng andra program, använd Chrome/Edge

**Problem**: Bilder syns inte
- **Lösning**: Kontrollera att bilderna finns i `/public`

**Problem**: Fullskärm fungerar inte
- **Lösning**: Tryck F11 istället för F

**Problem**: Kan inte navigera
- **Lösning**: Klicka någonstans på sliden först, tryck sedan piltangenter

## Anpassning

### Ändra Kontaktinformation (Q&A slide)
Redigera: `src/data/presentationData.js`
```javascript
{
  id: 'qa',
  contact: {
    company: 'Energy Service Management',
    person: 'Ditt Namn',
    email: 'din.email@esm.se',
    phone: '+46 (0)XX XXX XX XX'
  }
}
```

### Ändra Bo-koncept Data
Redigera: `src/data/mockData.js`

### Lägga till/Ta bort Slides
Redigera: `src/data/presentationData.js`

## Checklista Innan Presentation

- [ ] Applikation startad och testad
- [ ] Fullskärmsläge fungerar
- [ ] Alla bilder laddas korrekt
- [ ] Interaktiv demo testad
- [ ] Tangentbordsnavigation testad
- [ ] Projektor/skärm ansluten och testad
- [ ] Backup-plan (PDF?) förberedd
- [ ] Vatten och anteckningar redo
- [ ] Publiken redo! 🎉

---

**Lycka till med presentationen!** 🚀
