// Language translations for cable sizing calculator
const translations = {
    en: {
        title: "Cable Sizing Calculator",
        language: "Language:",
        backToHome: "← Back to Home",
        sourceVoltage: "Source Voltage (V)",
        targetVoltage: "Required Voltage at Load (V)",
        current: "Current (A)",
        length: "Cable Length (m)",
        cableType: "Cable Type",
        copper: "Copper",
        aluminum: "Aluminum",
        phases: "System Type",
        singlePhase: "Single Phase",
        threePhase: "Three Phase",
        temperature: "Temperature (°C)",
        calculateButton: "Calculate Cable Size",
        maxVoltageDrop: "Maximum Voltage Drop:",
        maxVoltageDropPercent: "Max Voltage Drop (%):",
        requiredCrossSection: "Required Cross Section:",
        recommendedCable: "Recommended Cable:",
        actualVoltageDrop: "Actual Voltage Drop:",
        standardCables: "Standard Cable Sizes:",
        crossSection: "Cross Section",
        voltageDrop: "Voltage Drop",
        voltageAtLoad: "Voltage at Load",
        status: "Status",
        howItWorks: "How it works:",
        howItWorks1: "Calculates required cross-section based on acceptable voltage drop",
        howItWorks2: "Shows comparison table with standard cable sizes",
        howItWorks3: "Recommends the smallest suitable cable from standard sizes",
        howItWorks4: "Considers cable material, temperature and system type",
        warning: "⚠️ Warning",
        targetVoltagePlaceholder: "e.g., 220",
        currentPlaceholder: "e.g., 16",
        lengthPlaceholder: "e.g., 50",
        temperaturePlaceholder: "e.g., 20",
        alertFillFields: "Please fill in all required fields with valid numbers",
        alertInvalidVoltage: "Target voltage must be less than source voltage",
        warningLargeCable: "Very large cable required. Consider using higher voltage or shorter distance.",
        statusOK: "OK",
        statusMarginal: "Marginal",
        statusInsufficient: "Insufficient"
    },
    no: {
        title: "Kabel Dimensjonering Kalkulator",
        language: "Språk:",
        backToHome: "← Tilbake til hovedsiden",
        sourceVoltage: "Kildespenning (V)",
        targetVoltage: "Ønsket spenning ved last (V)",
        current: "Strøm (A)",
        length: "Kabellengde (m)",
        cableType: "Kabeltype",
        copper: "Kobber",
        aluminum: "Aluminium",
        phases: "Systemtype",
        singlePhase: "Enfase",
        threePhase: "Trefase",
        temperature: "Temperatur (°C)",
        calculateButton: "Beregn kabelstørrelse",
        maxVoltageDrop: "Maksimalt spenningsfall:",
        maxVoltageDropPercent: "Maks spenningsfall (%):",
        requiredCrossSection: "Nødvendig tverrsnitt:",
        recommendedCable: "Anbefalt kabel:",
        actualVoltageDrop: "Faktisk spenningsfall:",
        standardCables: "Standard kabelstørrelser:",
        crossSection: "Tverrsnitt",
        voltageDrop: "Spenningsfall",
        voltageAtLoad: "Spenning ved last",
        status: "Status",
        howItWorks: "Slik fungerer det:",
        howItWorks1: "Beregner nødvendig tverrsnitt basert på akseptabelt spenningsfall",
        howItWorks2: "Viser sammenligningstabeller med standard kabelstørrelser",
        howItWorks3: "Anbefaler den minste passende kabelen fra standardstørrelser",
        howItWorks4: "Tar hensyn til kabelmateriale, temperatur og systemtype",
        warning: "⚠️ Advarsel",
        targetVoltagePlaceholder: "f.eks. 220",
        currentPlaceholder: "f.eks. 16",
        lengthPlaceholder: "f.eks. 50",
        temperaturePlaceholder: "f.eks. 20",
        alertFillFields: "Vennligst fyll ut alle påkrevde felt med gyldige tall",
        alertInvalidVoltage: "Målspenning må være lavere enn kildespenning",
        warningLargeCable: "Svært stor kabel kreves. Vurder å bruke høyere spenning eller kortere avstand.",
        statusOK: "OK",
        statusMarginal: "Marginal",
        statusInsufficient: "Utilstrekkelig"
    },
    de: {
        title: "Kabel Dimensionierung Rechner",
        language: "Sprache:",
        backToHome: "← Zurück zur Startseite",
        sourceVoltage: "Quellspannung (V)",
        targetVoltage: "Erforderliche Spannung an der Last (V)",
        current: "Strom (A)",
        length: "Kabellänge (m)",
        cableType: "Kabeltyp",
        copper: "Kupfer",
        aluminum: "Aluminium",
        phases: "Systemtyp",
        singlePhase: "Einphasig",
        threePhase: "Dreiphasig",
        temperature: "Temperatur (°C)",
        calculateButton: "Kabelgröße berechnen",
        maxVoltageDrop: "Maximaler Spannungsfall:",
        maxVoltageDropPercent: "Max Spannungsfall (%):",
        requiredCrossSection: "Erforderlicher Querschnitt:",
        recommendedCable: "Empfohlenes Kabel:",
        actualVoltageDrop: "Tatsächlicher Spannungsfall:",
        standardCables: "Standard Kabelgrößen:",
        crossSection: "Querschnitt",
        voltageDrop: "Spannungsfall",
        voltageAtLoad: "Spannung an der Last",
        status: "Status",
        howItWorks: "So funktioniert es:",
        howItWorks1: "Berechnet erforderlichen Querschnitt basierend auf akzeptablem Spannungsfall",
        howItWorks2: "Zeigt Vergleichstabelle mit Standard-Kabelgrößen",
        howItWorks3: "Empfiehlt das kleinste geeignete Kabel aus Standardgrößen",
        howItWorks4: "Berücksichtigt Kabelmaterial, Temperatur und Systemtyp",
        warning: "⚠️ Warnung",
        targetVoltagePlaceholder: "z.B. 220",
        currentPlaceholder: "z.B. 16",
        lengthPlaceholder: "z.B. 50",
        temperaturePlaceholder: "z.B. 20",
        alertFillFields: "Bitte füllen Sie alle erforderlichen Felder mit gültigen Zahlen aus",
        alertInvalidVoltage: "Zielspannung muss niedriger als Quellspannung sein",
        warningLargeCable: "Sehr großes Kabel erforderlich. Erwägen Sie höhere Spannung oder kürzere Entfernung.",
        statusOK: "OK",
        statusMarginal: "Grenzwertig",
        statusInsufficient: "Unzureichend"
    },
    fr: {
        title: "Calculateur de Dimensionnement de Câble",
        language: "Langue:",
        backToHome: "← Retour à l'accueil",
        sourceVoltage: "Tension Source (V)",
        targetVoltage: "Tension Requise à la Charge (V)",
        current: "Courant (A)",
        length: "Longueur du Câble (m)",
        cableType: "Type de Câble",
        copper: "Cuivre",
        aluminum: "Aluminium",
        phases: "Type de Système",
        singlePhase: "Monophasé",
        threePhase: "Triphasé",
        temperature: "Température (°C)",
        calculateButton: "Calculer la Taille du Câble",
        maxVoltageDrop: "Chute de Tension Maximale:",
        maxVoltageDropPercent: "Chute de Tension Max (%):",
        requiredCrossSection: "Section Requise:",
        recommendedCable: "Câble Recommandé:",
        actualVoltageDrop: "Chute de Tension Réelle:",
        standardCables: "Tailles de Câbles Standard:",
        crossSection: "Section",
        voltageDrop: "Chute de Tension",
        voltageAtLoad: "Tension à la Charge",
        status: "Statut",
        howItWorks: "Comment ça marche:",
        howItWorks1: "Calcule la section requise basée sur la chute de tension acceptable",
        howItWorks2: "Montre un tableau de comparaison avec les tailles de câbles standard",
        howItWorks3: "Recommande le plus petit câble approprié parmi les tailles standard",
        howItWorks4: "Considère le matériau du câble, la température et le type de système",
        warning: "⚠️ Avertissement",
        targetVoltagePlaceholder: "ex. 220",
        currentPlaceholder: "ex. 16",
        lengthPlaceholder: "ex. 50",
        temperaturePlaceholder: "ex. 20",
        alertFillFields: "Veuillez remplir tous les champs requis avec des nombres valides",
        alertInvalidVoltage: "La tension cible doit être inférieure à la tension source",
        warningLargeCable: "Très gros câble requis. Considérez utiliser une tension plus élevée ou une distance plus courte.",
        statusOK: "OK",
        statusMarginal: "Marginal",
        statusInsufficient: "Insuffisant"
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

// Standard cable cross-sections (mm²)
const standardCables = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240, 300, 400, 500, 630];

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

function calculateCableSize() {
    const lang = translations[currentLanguage];
    
    // Get input values
    const sourceVoltage = parseFloat(document.getElementById('sourceVoltage').value);
    const targetVoltage = parseFloat(document.getElementById('targetVoltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const length = parseFloat(document.getElementById('length').value);
    const cableType = document.getElementById('cableType').value;
    const phases = parseInt(document.getElementById('phases').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    
    // Validate inputs
    if (isNaN(targetVoltage) || isNaN(current) || isNaN(length) || isNaN(temperature)) {
        alert(lang.alertFillFields);
        return;
    }
    
    if (targetVoltage >= sourceVoltage) {
        alert(lang.alertInvalidVoltage);
        return;
    }
    
    // Calculate maximum allowable voltage drop
    const maxVoltageDrop = sourceVoltage - targetVoltage;
    const maxVoltageDropPercent = (maxVoltageDrop / sourceVoltage) * 100;
    
    // Calculate resistance per meter at given temperature
    const rho20 = resistivity[cableType];
    const alpha = tempCoeff[cableType];
    const rhoTemp = rho20 * (1 + alpha * (temperature - 20));
    
    // Calculate required resistance
    let requiredTotalResistance;
    if (phases === 1) {
        requiredTotalResistance = maxVoltageDrop / current;
    } else {
        requiredTotalResistance = maxVoltageDrop / (current * Math.sqrt(3));
    }
    
    // Calculate required cross-section
    const resistancePerMeter = requiredTotalResistance / (length * (phases === 1 ? 2 : 1));
    const requiredCrossSection = rhoTemp / resistancePerMeter;
    
    // Find recommended cable from standard sizes
    const recommendedCable = standardCables.find(size => size >= requiredCrossSection);
    
    // Calculate actual voltage drop with recommended cable
    let actualVoltageDrop = 0;
    let actualVoltageAtLoad = sourceVoltage;
    
    if (recommendedCable) {
        const actualResistancePerMeter = rhoTemp / recommendedCable;
        const actualTotalResistance = actualResistancePerMeter * length * (phases === 1 ? 2 : 1);
        
        if (phases === 1) {
            actualVoltageDrop = current * actualTotalResistance;
        } else {
            actualVoltageDrop = current * actualTotalResistance * Math.sqrt(3);
        }
        
        actualVoltageAtLoad = sourceVoltage - actualVoltageDrop;
    }
    
    // Update display
    document.getElementById('maxVoltageDropValue').textContent = `${maxVoltageDrop.toFixed(2)} V`;
    document.getElementById('maxVoltageDropPercent').textContent = `${maxVoltageDropPercent.toFixed(2)}%`;
    document.getElementById('requiredCrossSection').textContent = `${requiredCrossSection.toFixed(2)} mm²`;
    document.getElementById('recommendedCable').textContent = recommendedCable ? `${recommendedCable} mm²` : 'N/A';
    document.getElementById('actualVoltageDrop').textContent = `${actualVoltageDrop.toFixed(2)} V (${((actualVoltageDrop/sourceVoltage)*100).toFixed(1)}%)`;
    
    // Generate cable comparison table
    generateCableTable(sourceVoltage, current, length, cableType, phases, temperature, targetVoltage);
    
    // Show warnings
    const warningDiv = document.getElementById('warning');
    const warningText = document.getElementById('warningText');
    
    if (requiredCrossSection > 500) {
        warningDiv.style.display = 'block';
        warningText.textContent = lang.warningLargeCable;
    } else {
        warningDiv.style.display = 'none';
    }
}

function generateCableTable(sourceVoltage, current, length, cableType, phases, temperature, targetVoltage) {
    const lang = translations[currentLanguage];
    const tbody = document.getElementById('cableTableBody');
    tbody.innerHTML = '';
    
    // Calculate resistance per meter at given temperature
    const rho20 = resistivity[cableType];
    const alpha = tempCoeff[cableType];
    const rhoTemp = rho20 * (1 + alpha * (temperature - 20));
    
    standardCables.forEach(crossSection => {
        const resistancePerMeter = rhoTemp / crossSection;
        const totalResistance = resistancePerMeter * length * (phases === 1 ? 2 : 1);
        
        let voltageDrop;
        if (phases === 1) {
            voltageDrop = current * totalResistance;
        } else {
            voltageDrop = current * totalResistance * Math.sqrt(3);
        }
        
        const voltageAtLoad = sourceVoltage - voltageDrop;
        const voltageDropPercent = (voltageDrop / sourceVoltage) * 100;
        
        // Determine status
        let status, statusClass;
        if (voltageAtLoad >= targetVoltage) {
            if (voltageDropPercent <= 3) {
                status = lang.statusOK;
                statusClass = 'status-ok';
            } else if (voltageDropPercent <= 5) {
                status = lang.statusMarginal;
                statusClass = 'status-marginal';
            } else {
                status = lang.statusOK;
                statusClass = 'status-ok';
            }
        } else {
            status = lang.statusInsufficient;
            statusClass = 'status-insufficient';
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${crossSection} mm²</td>
            <td>${voltageDrop.toFixed(2)} V (${voltageDropPercent.toFixed(1)}%)</td>
            <td>${voltageAtLoad.toFixed(1)} V</td>
            <td class="${statusClass}">${status}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Add Enter key support for calculation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateCableSize();
    }
});

// Initialize on page load
window.addEventListener('load', function() {
    document.getElementById('languageSelect').value = 'en';
    currentLanguage = 'en';
    updateTexts();
    updatePlaceholders();
});