# Elektrisk Kalkulator Samling

En samling av profesjonelle web-baserte kalkulatorer for elektriske beregninger. Alle kalkulatorene er bygget med moderne web-teknologi og følger industristandarder.

## ⚡ Oversikt

Denne samlingen inneholder to spesialiserte elektriske kalkulatorer:

1. **⚡ Spenningsfall Kalkulator** - Beregn spenningsfall i elektriske kabler  
2. **🔌 Kabel Dimensjonering Kalkulator** - Finn riktig kabeltverrsnitt

## ⚡ Spenningsfall Kalkulator

**Beskrivelse:** Flerspråklig kalkulator for å beregne spenningsfall i elektriske kabler for riktig kretsdesign og sikkerhet.

**Funksjoner:**
- Støtter enfase og trefase systemer
- Kobber og aluminium kabler
- Temperaturkompensasjon (-40°C til +90°C)
- Multiple spenningsnivåer (12V, 13.8V, 24V, 230V, 400V)
- Automatiske sikkerhetsadvarsler
- Flerspråklig støtte (engelsk, norsk, tysk, fransk)

**Beregninger:**
- Spenningsfall i volt og prosent
- Spenning ved last
- Effekttap i watt
- Kabelmotstand i ohm
- Fargekoding: Grønn (<3%), gul (3-5%), rød (>5%)

**Tekniske detaljer:**
- Korrekte resistivitetsverdier for materialer
- Temperaturkoeffisienter
- Trefase-beregninger med √3 faktor
- Tur/retur for enfase, enveis for trefase

**Fil:** `voltage-drop-calculator.html`

## 🔌 Kabel Dimensjonering Kalkulator

**Beskrivelse:** Flerspråklig kalkulator som bestemmer nødvendig kabeltverrsnitt basert på ønsket spenning ved last og systemparametere.

**Funksjoner:**
- Omvendt spenningsfall-beregning
- Anbefaling av standard kabelstørrelser
- Sammenligningstabeller med alle størrelser
- Materiale- og temperaturfaktorer
- Statusindikatorer (OK/Marginal/Utilstrekkelig)
- Flerspråklig støtte (engelsk, norsk, tysk, fransk)

**Beregninger:**
- Maksimalt tillatt spenningsfall
- Nødvendig kabeltverrsnitt
- Anbefalt kabel fra standardstørrelser
- Faktisk spenningsfall med anbefalt kabel
- Detaljert sammenligningstabeller

**Standard kabelstørrelser:**
1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 630 mm²

**Fil:** `cable-sizing-calculator.html`

## 🚀 Kom i gang

1. **Åpne hovedsiden:** Last `index.html` i en nettleser
2. **Velg kalkulator:** Klikk på ønsket kalkulator fra hovedsiden
3. **Fyll inn data:** Legg inn nødvendige parametere
4. **Få resultater:** Klikk beregn-knappen for umiddelbare resultater
5. **Naviger:** Bruk "Tilbake til hovedsiden" for å bytte kalkulator

## 📁 Filstruktur

```
├── index.html                    # Hovedside med kalkulator-oversikt
├── voltage-drop-calculator.html  # Spenningsfall kalkulator (flerspråklig)
├── cable-sizing-calculator.html  # Kabel dimensjonering (flerspråklig)
├── voltage-drop-script.js        # Spenningsfall logikk
├── voltage-drop-style.css        # Spenningsfall styling
├── cable-sizing-script.js        # Kabel dimensjonering logikk
├── cable-sizing-style.css        # Kabel dimensjonering styling
└── README.md                     # Denne filen
```

## 🌐 Språkstøtte

- **Spenningsfall kalkulator:** Engelsk, norsk, tysk, fransk
- **Kabel dimensjonering:** Engelsk, norsk, tysk, fransk

## 🛠️ Teknologi

- **HTML5** - Moderne markup
- **CSS3** - Responsiv design med gradients og animasjoner
- **Vanilla JavaScript** - Ingen eksterne avhengigheter
- **Responsive design** - Fungerer på alle enheter
- **Cross-browser kompatibilitet** - Støtter alle moderne nettlesere

## 📊 Nøyaktighet

Alle kalkulatorer følger industristandarder:
- Elektriske beregninger bruker korrekte resistivitetsverdier
- Temperaturkoeffisienter er nøyaktige for materialer
- Dekkvurderinger basert på bransjepraksis
- Sikkerhetsmarginaler inkludert i alle beregninger

## 📄 Lisens

Dette prosjektet er åpen kildekode og tilgjengelig under MIT-lisensen.

## 🤝 Bidrag

Bidrag er velkommen! Vennligst følg disse retningslinjene:
- Hold koden ren og kommentert
- Test alle endringer grundig
- Følg eksisterende kodestil
- Oppdater dokumentasjon ved behov
