# Dekkalkulator

En norsk web-basert kalkulator for å beregne verdien av brukte dekk basert på mønsterdybde, alder og andre faktorer.

## Beskrivelse

Dekkalkulatoren hjelper deg med å estimere den nåværende verdien av brukte dekk ved å ta hensyn til:
- Nåværende mønsterdybde vs. ny mønsterdybde
- Minimum sikker mønsterdybde
- Dekkenes alder og produksjonsår
- Opprinnelig nypris
- Monteringskostnader
- Forventet levetid

## Funksjoner

- **Automatisk dekktype-valg**: Velg mellom vinterdekk (8mm/3mm) og sommerdekk (7mm/1,6mm)
- **Intelligent beregning**: Tar hensyn til både mønsterslitasje og aldersavskrivning
- **Norsk språk**: Komplett norsk brukergrensesnitt
- **Responsiv design**: Fungerer på alle enheter
- **Sanntidsberegning**: Umiddelbare resultater

## Hvordan bruke

1. Åpne `index.html` i en nettleser
2. Velg dekktype (vinterdekk eller sommerdekk)
3. Fyll inn nåværende mønsterdybde
4. Legg inn produksjonsår, nypris og monteringskostnad
5. Klikk "Beregn dekkverdi" for å få resultatet

## Filer

- `index.html` - Hovedside med brukergrensesnitt
- `style.css` - Styling og layout
- `script.js` - Beregningslogikk og interaktivitet

## Beregningsmetode

1. **Mønsterlevetid**: Beregnes som prosent av gjenværende brukbar mønsterdybde
2. **Aldersavskrivning**: 10% per år etter første år
3. **Minimumsverdi**: Minimum 10% av nypris for sikkerhetshensyn
4. **Nettoverdi**: Monteringskostnad trekkes fra dekkverdien

## Tilstandsvurdering

- **Utmerket**: >70% mønster igjen
- **God**: 50-70% mønster igjen  
- **Akseptabel**: 30-50% mønster igjen
- **Dårlig**: <30% mønster igjen

## Teknologi

- HTML5
- CSS3 med responsive design
- Vanilla JavaScript
- Ingen eksterne avhengigheter

## Lisens

Dette prosjektet er åpen kildekode og tilgjengelig under MIT-lisensen.
