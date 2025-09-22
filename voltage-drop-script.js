// Language translations for voltage drop calculator
const translations = {
    en: {
        title: "Voltage Drop Calculator",
        language: "Language:",
        backToHome: "← Back to Home",
        voltage: "System Voltage (V)",
        current: "Current (A)",
        length: "Cable Length - One Way (m)",
        cableType: "Cable Type",
        copper: "Copper",
        aluminum: "Aluminum",
        crossSection: "Cross Section (mm²)",
        phases: "System Type",
        singlePhase: "Single Phase",
        threePhase: "Three Phase",
        temperature: "Temperature (°C)",
        calculateButton: "Calculate Voltage Drop",
        voltageDrop: "Voltage Drop:",
        voltageDropPercent: "Voltage Drop (%):",
        voltageAtLoad: "Voltage at Load:",
        powerLoss: "Power Loss:",
        resistance: "Cable Resistance:",
        howItWorks: "How it works:",
        howItWorks1: "Voltage drop is calculated using Ohm's law: V = I × R",
        howItWorks2: "Cable length is given one-way, calculation includes return cable",
        howItWorks3: "Cable resistance depends on material, length, cross-section and temperature",
        howItWorks4: "Recommended maximum voltage drop: 3% for lighting, 5% for power circuits",
        howItWorks5: "Three-phase calculations use line-to-line voltage and √3 factor",
        warning: "⚠️ Warning",
        currentPlaceholder: "e.g., 16",
        lengthPlaceholder: "e.g., 50",
        temperaturePlaceholder: "e.g., 20",
        alertFillFields: "Please fill in all required fields with valid numbers",
        warningHighDrop: "Voltage drop exceeds 5%! Consider using larger cable cross-section.",
        warningVeryHighDrop: "Voltage drop exceeds 10%! This is dangerous and not acceptable for most applications."
    },
    no: {
        title: "Spenningsfall Kalkulator",
        language: "Språk:",
        backToHome: "← Tilbake til hovedsiden",
        voltage: "Systemspenning (V)",
        current: "Strøm (A)",
        length: "Kabellengde - En vei (m)",
        cableType: "Kabeltype",
        copper: "Kobber",
        aluminum: "Aluminium",
        crossSection: "Tverrsnitt (mm²)",
        phases: "Systemtype",
        singlePhase: "Enfase",
        threePhase: "Trefase",
        temperature: "Temperatur (°C)",
        calculateButton: "Beregn spenningsfall",
        voltageDrop: "Spenningsfall:",
        voltageDropPercent: "Spenningsfall (%):",
        voltageAtLoad: "Spenning ved last:",
        powerLoss: "Effekttap:",
        resistance: "Kabelmotstand:",
        howItWorks: "Slik fungerer det:",
        howItWorks1: "Spenningsfall beregnes med Ohms lov: V = I × R",
        howItWorks2: "Kabellengde angis en vei, beregning inkluderer returkabel",
        howItWorks3: "Kabelmotstand avhenger av materiale, lengde, tverrsnitt og temperatur",
        howItWorks4: "Anbefalt maksimalt spenningsfall: 3% for belysning, 5% for kraftkretser",
        howItWorks5: "Trefase-beregninger bruker linje-til-linje spenning og √3 faktor",
        warning: "⚠️ Advarsel",
        currentPlaceholder: "f.eks. 16",
        lengthPlaceholder: "f.eks. 50",
        temperaturePlaceholder: "f.eks. 20",
        alertFillFields: "Vennligst fyll ut alle påkrevde felt med gyldige tall",
        warningHighDrop: "Spenningsfall overstiger 5%! Vurder å bruke større kabeltverrsnitt.",
        warningVeryHighDrop: "Spenningsfall overstiger 10%! Dette er farlig og ikke akseptabelt for de fleste anvendelser."
    },
    de: {
        title: "Spannungsfall Rechner",
        language: "Sprache:",
        backToHome: "← Zurück zur Startseite",
        voltage: "Systemspannung (V)",
        current: "Strom (A)",
        length: "Kabellänge - Ein Weg (m)",
        cableType: "Kabeltyp",
        copper: "Kupfer",
        aluminum: "Aluminium",
        crossSection: "Querschnitt (mm²)",
        phases: "Systemtyp",
        singlePhase: "Einphasig",
        threePhase: "Dreiphasig",
        temperature: "Temperatur (°C)",
        calculateButton: "Spannungsfall berechnen",
        voltageDrop: "Spannungsfall:",
        voltageDropPercent: "Spannungsfall (%):",
        voltageAtLoad: "Spannung an der Last:",
        powerLoss: "Leistungsverlust:",
        resistance: "Kabelwiderstand:",
        howItWorks: "So funktioniert es:",
        howItWorks1: "Spannungsfall wird mit dem Ohmschen Gesetz berechnet: V = I × R",
        howItWorks2: "Kabellänge wird ein Weg angegeben, Berechnung inkludiert Rückkabel",
        howItWorks3: "Kabelwiderstand hängt von Material, Länge, Querschnitt und Temperatur ab",
        howItWorks4: "Empfohlener maximaler Spannungsfall: 3% für Beleuchtung, 5% für Kraftkreise",
        howItWorks5: "Dreiphasen-Berechnungen verwenden Leiter-zu-Leiter-Spannung und √3 Faktor",
        warning: "⚠️ Warnung",
        currentPlaceholder: "z.B. 16",
        lengthPlaceholder: "z.B. 50",
        temperaturePlaceholder: "z.B. 20",
        alertFillFields: "Bitte füllen Sie alle erforderlichen Felder mit gültigen Zahlen aus",
        warningHighDrop: "Spannungsfall überschreitet 5%! Erwägen Sie einen größeren Kabelquerschnitt.",
        warningVeryHighDrop: "Spannungsfall überschreitet 10%! Dies ist gefährlich und für die meisten Anwendungen nicht akzeptabel."
    },
    fr: {
        title: "Calculateur de Chute de Tension",
        language: "Langue:",
        backToHome: "← Retour à l'accueil",
        voltage: "Tension du Système (V)",
        current: "Courant (A)",
        length: "Longueur du Câble - Un Sens (m)",
        cableType: "Type de Câble",
        copper: "Cuivre",
        aluminum: "Aluminium",
        crossSection: "Section (mm²)",
        phases: "Type de Système",
        singlePhase: "Monophasé",
        threePhase: "Triphasé",
        temperature: "Température (°C)",
        calculateButton: "Calculer la Chute de Tension",
        voltageDrop: "Chute de Tension:",
        voltageDropPercent: "Chute de Tension (%):",
        voltageAtLoad: "Tension à la Charge:",
        powerLoss: "Perte de Puissance:",
        resistance: "Résistance du Câble:",
        howItWorks: "Comment ça marche:",
        howItWorks1: "La chute de tension est calculée avec la loi d'Ohm: V = I × R",
        howItWorks2: "Longueur du câble donnée un sens, calcul inclut le câble de retour",
        howItWorks3: "La résistance du câble dépend du matériau, longueur, section et température",
        howItWorks4: "Chute de tension maximale recommandée: 3% pour éclairage, 5% pour circuits de puissance",
        howItWorks5: "Les calculs triphasés utilisent la tension ligne-à-ligne et le facteur √3",
        warning: "⚠️ Avertissement",
        currentPlaceholder: "ex. 16",
        lengthPlaceholder: "ex. 50",
        temperaturePlaceholder: "ex. 20",
        alertFillFields: "Veuillez remplir tous les champs requis avec des nombres valides",
        warningHighDrop: "La chute de tension dépasse 5%! Considérez utiliser une section de câble plus grande.",
        warningVeryHighDrop: "La chute de tension dépasse 10%! Ceci est dangereux et non acceptable pour la plupart des applications."
    }
};

let currentLanguage = 'en';

// Resistivity values at 20°C (Ω⋅mm²/m)
const resistivity = {
    copper: 0.0175,
    aluminum: 0.0283
};

// Temperature coefficient (per °C)
const tempCoeff = {
    copper: 0.00393,
    aluminum: 0.00403
};

function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    updateTexts();
    updatePlaceholders();
}

function updateTexts() {
    const lang = translations[currentLanguage];
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            if (element.tagName === 'TITLE') {
                element.textContent = lang[key];
            } else {
                element.textContent = lang[key];
            }
        }
    });
    
    document.documentElement.lang = currentLanguage === 'no' ? 'no' : currentLanguage;
}

function updatePlaceholders() {
    const lang = translations[currentLanguage];
    
    document.querySelectorAll('[data-placeholder]').forEach(element => {
        const key = element.getAttribute('data-placeholder');
        if (lang[key]) {
            element.placeholder = lang[key];
        }
    });
}

function updateConductivity() {
    // This function can be used to update UI based on cable type if needed
}

function calculateVoltageDrop() {
    const lang = translations[currentLanguage];
    
    // Get input values
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const length = parseFloat(document.getElementById('length').value);
    const cableType = document.getElementById('cableType').value;
    const crossSection = parseFloat(document.getElementById('crossSection').value);
    const phases = parseInt(document.getElementById('phases').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    
    // Validate inputs
    if (isNaN(current) || isNaN(length) || isNaN(temperature)) {
        alert(lang.alertFillFields);
        return;
    }
    
    // Calculate resistance per meter at given temperature
    const rho20 = resistivity[cableType];
    const alpha = tempCoeff[cableType];
    const rhoTemp = rho20 * (1 + alpha * (temperature - 20));
    const resistancePerMeter = rhoTemp / crossSection;
    
    // Total cable resistance (round trip for single phase, one way for three phase)
    let totalResistance;
    if (phases === 1) {
        totalResistance = resistancePerMeter * length * 2; // Round trip
    } else {
        totalResistance = resistancePerMeter * length; // One way for 3-phase
    }
    
    // Calculate voltage drop
    let voltageDrop;
    if (phases === 1) {
        voltageDrop = current * totalResistance;
    } else {
        voltageDrop = current * totalResistance * Math.sqrt(3);
    }
    
    // Calculate percentage
    const voltageDropPercent = (voltageDrop / voltage) * 100;
    
    // Calculate voltage at load
    const voltageAtLoad = voltage - voltageDrop;
    
    // Calculate power loss
    const powerLoss = Math.pow(current, 2) * totalResistance * (phases === 3 ? 3 : 1);
    
    // Update display
    document.getElementById('voltageDropValue').textContent = `${voltageDrop.toFixed(2)} V`;
    document.getElementById('voltageDropPercent').textContent = `${voltageDropPercent.toFixed(2)}%`;
    document.getElementById('voltageAtLoad').textContent = `${voltageAtLoad.toFixed(1)} V`;
    document.getElementById('powerLoss').textContent = `${powerLoss.toFixed(1)} W`;
    document.getElementById('resistance').textContent = `${totalResistance.toFixed(4)} Ω`;
    
    // Color coding for voltage drop percentage
    const percentElement = document.getElementById('voltageDropPercent');
    percentElement.className = 'value highlight';
    
    if (voltageDropPercent <= 3) {
        percentElement.classList.add('good');
    } else if (voltageDropPercent <= 5) {
        percentElement.classList.add('warning-color');
    } else {
        percentElement.classList.add('danger');
    }
    
    // Show warnings
    const warningDiv = document.getElementById('warning');
    const warningText = document.getElementById('warningText');
    
    if (voltageDropPercent > 10) {
        warningDiv.style.display = 'block';
        warningText.textContent = lang.warningVeryHighDrop;
    } else if (voltageDropPercent > 5) {
        warningDiv.style.display = 'block';
        warningText.textContent = lang.warningHighDrop;
    } else {
        warningDiv.style.display = 'none';
    }
}

// Add Enter key support for calculation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateVoltageDrop();
    }
});

// Initialize on page load
window.addEventListener('load', function() {
    document.getElementById('languageSelect').value = 'en';
    currentLanguage = 'en';
    updateTexts();
    updatePlaceholders();
});