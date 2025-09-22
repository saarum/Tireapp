// Language translations
const translations = {
    en: {
        title: "Tire Value Calculator",
        language: "Language:",
        backToHome: "← Back to Home",
        tireType: "Tire Type",
        winterTires: "Winter Tires (8mm new / 3mm scrap)",
        summerTires: "Summer Tires (7mm new / 1.6mm scrap)",
        currentTread: "Current Tread Depth (mm)",
        newTread: "New Depth (mm)",
        minTread: "Scrap Depth (mm)",
        originalPrice: "Original Price",
        remountingCost: "Remounting Cost",
        ageYears: "Age (years)",
        calculateButton: "Calculate Tire Value",
        remainingTread: "Remaining Tread:",
        ageDepreciation: "Age Depreciation:",
        calculatedValue: "Calculated Value:",
        finalValue: "Value After Remounting:",
        howItWorks: "How it works:",
        howItWorks1: "Remaining tread calculated from current vs. scrap depth",
        howItWorks2: "Linear depreciation over 7 years (approx. 14% per year)",
        howItWorks3: "Winter tires: 8mm new, 3mm scrap",
        howItWorks4: "Summer tires: 7mm new, 1.6mm scrap",
        howItWorks5: "Remounting cost deducted from calculated value",
        warning: "⚠️ Warning",
        currentTreadPlaceholder: "e.g., 5.5",
        originalPricePlaceholder: "e.g., 2500",
        remountingCostPlaceholder: "e.g., 300",
        ageYearsPlaceholder: "e.g., 3",
        alertFillFields: "Please fill in all fields with valid numbers",
        alertBelowScrap: "Current tread depth is below scrap depth!",
        alertTreadTooHigh: "Current tread depth cannot be greater than new depth",
        excellent: "Excellent",
        good: "Good",
        acceptable: "Acceptable",
        poor: "Poor",
        warningOldTire: "Tire is older than recommended lifespan (7 years). Consider replacement for safety.",
        warningLowTread: "Low tread remaining. Tire should be replaced soon for optimal safety.",
        warningNegativeValue: "Tire value is negative after remounting cost. Not economical to buy.",
        warningNotSafe: "Tire is no longer road safe and should be scrapped immediately."
    },
    no: {
        title: "Dekkverdikalkulator",
        language: "Språk:",
        backToHome: "← Tilbake til hovedsiden",
        tireType: "Dekktype",
        winterTires: "Vinterdekk (8mm ny / 3mm kassasjon)",
        summerTires: "Sommerdekk (7mm ny / 1,6mm kassasjon)",
        currentTread: "Aktuell mønsterdybde (mm)",
        newTread: "Nydybde (mm)",
        minTread: "Kassasjonsdybde (mm)",
        originalPrice: "Nypris (kr)",
        remountingCost: "Omleggingskost (kr)",
        ageYears: "Alder (år)",
        calculateButton: "Beregn dekkverdi",
        remainingTread: "Gjenværende mønster:",
        ageDepreciation: "Aldersavskrivning:",
        calculatedValue: "Beregnet verdi:",
        finalValue: "Verdi etter omlegging:",
        howItWorks: "Slik fungerer det:",
        howItWorks1: "Gjenværende mønster beregnes fra aktuell vs. kassasjonsdybde",
        howItWorks2: "Lineær avskrivning over 7 år (ca. 14% per år)",
        howItWorks3: "Vinterdekk: 8mm ny, 3mm kassasjon",
        howItWorks4: "Sommerdekk: 7mm ny, 1,6mm kassasjon",
        howItWorks5: "Omleggingskost trekkes fra beregnet verdi",
        warning: "⚠️ Advarsel",
        currentTreadPlaceholder: "f.eks. 5,5",
        originalPricePlaceholder: "f.eks. 2500",
        remountingCostPlaceholder: "f.eks. 300",
        ageYearsPlaceholder: "f.eks. 3",
        alertFillFields: "Vennligst fyll ut alle felt med gyldige tall",
        alertBelowScrap: "Aktuell mønsterdybde er under kassasjonsdybde!",
        alertTreadTooHigh: "Aktuell mønsterdybde kan ikke være større enn nydybde",
        excellent: "Utmerket",
        good: "God",
        acceptable: "Akseptabel",
        poor: "Dårlig",
        warningOldTire: "Dekket er eldre enn anbefalt levetid (7 år). Vurder utskifting av sikkerhetshensyn.",
        warningLowTread: "Lavt mønster igjen. Dekket bør skiftes snart for optimal sikkerhet.",
        warningNegativeValue: "Dekkverdien er negativ etter omleggingskost. Ikke økonomisk å kjøpe.",
        warningNotSafe: "Dekket er ikke lenger trafikksikkert og bør kasseres umiddelbart."
    },
    de: {
        title: "Reifenwert Rechner",
        language: "Sprache:",
        backToHome: "← Zurück zur Startseite",
        tireType: "Reifentyp",
        winterTires: "Winterreifen (8mm neu / 3mm Verschrottung)",
        summerTires: "Sommerreifen (7mm neu / 1,6mm Verschrottung)",
        currentTread: "Aktuelle Profiltiefe (mm)",
        newTread: "Neue Tiefe (mm)",
        minTread: "Verschrottungstiefe (mm)",
        originalPrice: "Neupreis (€)",
        remountingCost: "Ummontagekosten (€)",
        ageYears: "Alter (Jahre)",
        calculateButton: "Reifenwert berechnen",
        remainingTread: "Verbleibendes Profil:",
        ageDepreciation: "Altersabschreibung:",
        calculatedValue: "Berechneter Wert:",
        finalValue: "Wert nach Ummontage:",
        howItWorks: "So funktioniert es:",
        howItWorks1: "Verbleibendes Profil berechnet aus aktueller vs. Verschrottungstiefe",
        howItWorks2: "Lineare Abschreibung über 7 Jahre (ca. 14% pro Jahr)",
        howItWorks3: "Winterreifen: 8mm neu, 3mm Verschrottung",
        howItWorks4: "Sommerreifen: 7mm neu, 1,6mm Verschrottung",
        howItWorks5: "Ummontagekosten werden vom berechneten Wert abgezogen",
        warning: "⚠️ Warnung",
        currentTreadPlaceholder: "z.B. 5,5",
        originalPricePlaceholder: "z.B. 2500",
        remountingCostPlaceholder: "z.B. 300",
        ageYearsPlaceholder: "z.B. 3",
        alertFillFields: "Bitte füllen Sie alle Felder mit gültigen Zahlen aus",
        alertBelowScrap: "Aktuelle Profiltiefe liegt unter Verschrottungstiefe!",
        alertTreadTooHigh: "Aktuelle Profiltiefe kann nicht größer als neue Tiefe sein",
        excellent: "Ausgezeichnet",
        good: "Gut",
        acceptable: "Akzeptabel",
        poor: "Schlecht",
        warningOldTire: "Reifen ist älter als empfohlene Lebensdauer (7 Jahre). Austausch aus Sicherheitsgründen erwägen.",
        warningLowTread: "Wenig Profil übrig. Reifen sollte bald für optimale Sicherheit ersetzt werden.",
        warningNegativeValue: "Reifenwert ist nach Ummontagekosten negativ. Nicht wirtschaftlich zu kaufen.",
        warningNotSafe: "Reifen ist nicht mehr verkehrssicher und sollte sofort verschrottet werden."
    },
    fr: {
        title: "Calculateur de Valeur de Pneu",
        language: "Langue:",
        backToHome: "← Retour à l'accueil",
        tireType: "Type de Pneu",
        winterTires: "Pneus Hiver (8mm neuf / 3mm mise au rebut)",
        summerTires: "Pneus Été (7mm neuf / 1,6mm mise au rebut)",
        currentTread: "Profondeur Actuelle de Sculpture (mm)",
        newTread: "Profondeur Neuve (mm)",
        minTread: "Profondeur de Mise au Rebut (mm)",
        originalPrice: "Prix d'Origine (€)",
        remountingCost: "Coût de Remontage (€)",
        ageYears: "Âge (années)",
        calculateButton: "Calculer la Valeur du Pneu",
        remainingTread: "Sculpture Restante:",
        ageDepreciation: "Dépréciation d'Âge:",
        calculatedValue: "Valeur Calculée:",
        finalValue: "Valeur Après Remontage:",
        howItWorks: "Comment ça marche:",
        howItWorks1: "Sculpture restante calculée à partir de actuelle vs. profondeur de mise au rebut",
        howItWorks2: "Dépréciation linéaire sur 7 ans (environ 14% par an)",
        howItWorks3: "Pneus hiver: 8mm neuf, 3mm mise au rebut",
        howItWorks4: "Pneus été: 7mm neuf, 1,6mm mise au rebut",
        howItWorks5: "Coût de remontage déduit de la valeur calculée",
        warning: "⚠️ Avertissement",
        currentTreadPlaceholder: "ex. 5,5",
        originalPricePlaceholder: "ex. 2500",
        remountingCostPlaceholder: "ex. 300",
        ageYearsPlaceholder: "ex. 3",
        alertFillFields: "Veuillez remplir tous les champs avec des nombres valides",
        alertBelowScrap: "La profondeur actuelle de sculpture est en dessous de la profondeur de mise au rebut!",
        alertTreadTooHigh: "La profondeur actuelle ne peut pas être supérieure à la profondeur neuve",
        excellent: "Excellent",
        good: "Bon",
        acceptable: "Acceptable",
        poor: "Mauvais",
        warningOldTire: "Le pneu est plus vieux que la durée de vie recommandée (7 ans). Considérer le remplacement pour la sécurité.",
        warningLowTread: "Peu de sculpture restante. Le pneu devrait être remplacé bientôt pour une sécurité optimale.",
        warningNegativeValue: "La valeur du pneu est négative après le coût de remontage. Pas économique à acheter.",
        warningNotSafe: "Le pneu n'est plus sûr pour la route et devrait être mis au rebut immédiatement."
    }
};

let currentLanguage = 'en';

function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    updateTexts();
    updatePlaceholders();
    updateTreadDepths();
}

function updateTexts() {
    const lang = translations[currentLanguage];

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            if (element.tagName === 'TITLE') {
                element.textContent = lang[key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = lang[key];
            } else {
                element.textContent = lang[key];
            }
        }
    });

    // Update HTML lang attribute
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

function calculateTireValue() {
    const lang = translations[currentLanguage];

    // Get input values
    const tireType = document.getElementById('tireType').value;
    const currentTread = parseFloat(document.getElementById('currentTread').value);
    const newTread = parseFloat(document.getElementById('newTread').value);
    const minTread = parseFloat(document.getElementById('minTread').value);
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const remountingCost = parseFloat(document.getElementById('remountingCost').value);
    const ageYears = parseFloat(document.getElementById('ageYears').value);

    // Validate inputs
    if (isNaN(currentTread) || isNaN(originalPrice) || isNaN(remountingCost) || isNaN(ageYears)) {
        alert(lang.alertFillFields);
        return;
    }

    if (currentTread < minTread) {
        alert(lang.alertBelowScrap);
        showWarning(lang.warningNotSafe);
        return;
    }

    if (currentTread > newTread) {
        alert(lang.alertTreadTooHigh);
        return;
    }

    // Calculate remaining tread life (as percentage)
    const usableTread = newTread - minTread;
    const remainingTread = currentTread - minTread;
    const treadLifeRemaining = (remainingTread / usableTread) * 100;

    // Calculate age depreciation (linear over 7 years = ~14.3% per year)
    const depreciationRate = 1 / 7; // 7 years total depreciation
    const ageDepreciationFactor = Math.max(0, 1 - (ageYears * depreciationRate));

    // Calculate tread-based value
    const treadBasedValue = (treadLifeRemaining / 100) * originalPrice;

    // Apply age depreciation
    const depreciatedValue = treadBasedValue * ageDepreciationFactor;

    // Calculate final value after remounting cost
    const finalValue = Math.max(0, depreciatedValue - remountingCost);

    // Update display
    document.getElementById('treadLife').textContent = `${treadLifeRemaining.toFixed(1)}%`;
    document.getElementById('ageDepreciation').textContent = `${((1 - ageDepreciationFactor) * 100).toFixed(1)}%`;
    document.getElementById('calculatedValue').textContent = `${depreciatedValue.toFixed(0)} kr`;
    document.getElementById('finalValue').textContent = `${finalValue.toFixed(0)} kr`;

    // Add condition assessment
    const lang = translations[currentLanguage];
    let condition = '';
    let conditionClass = '';
    if (treadLifeRemaining > 70) {
        condition = ` (${lang.excellent})`;
        conditionClass = 'good';
    } else if (treadLifeRemaining > 50) {
        condition = ` (${lang.good})`;
        conditionClass = 'good';
    } else if (treadLifeRemaining > 30) {
        condition = ` (${lang.acceptable})`;
        conditionClass = 'warning-color';
    } else {
        condition = ` (${lang.poor})`;
        conditionClass = 'danger';
    }

    const treadLifeElement = document.getElementById('treadLife');
    treadLifeElement.textContent = `${treadLifeRemaining.toFixed(1)}%${condition}`;
    treadLifeElement.className = `value ${conditionClass}`;

    // Show warnings
    hideWarning();

    if (ageYears > 7) {
        showWarning(lang.warningOldTire);
    } else if (treadLifeRemaining < 30) {
        showWarning(lang.warningLowTread);
    } else if (finalValue <= 0) {
        showWarning(lang.warningNegativeValue);
    }
}

function updateTreadDepths() {
    const tireType = document.getElementById('tireType').value;
    const newTreadInput = document.getElementById('newTread');
    const minTreadInput = document.getElementById('minTread');

    if (tireType === 'winter') {
        newTreadInput.value = '8.0';
        minTreadInput.value = '3.0';
        newTreadInput.placeholder = currentLanguage === 'no' || currentLanguage === 'de' || currentLanguage === 'fr' ? '8,0' : '8.0';
        minTreadInput.placeholder = currentLanguage === 'no' || currentLanguage === 'de' || currentLanguage === 'fr' ? '3,0' : '3.0';
    } else if (tireType === 'summer') {
        newTreadInput.value = '7.0';
        minTreadInput.value = '1.6';
        newTreadInput.placeholder = currentLanguage === 'no' || currentLanguage === 'de' || currentLanguage === 'fr' ? '7,0' : '7.0';
        minTreadInput.placeholder = currentLanguage === 'no' || currentLanguage === 'de' || currentLanguage === 'fr' ? '1,6' : '1.6';
    }
}

function showWarning(message) {
    const warningDiv = document.getElementById('warning');
    const warningText = document.getElementById('warningText');
    warningText.textContent = message;
    warningDiv.style.display = 'block';
}

function hideWarning() {
    const warningDiv = document.getElementById('warning');
    warningDiv.style.display = 'none';
}

// Add Enter key support for calculation
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculateTireValue();
    }
});

// Auto-fill some default values for demonstration
window.addEventListener('load', function () {
    // Set default language to English and update interface
    document.getElementById('languageSelect').value = 'en';
    currentLanguage = 'en';
    updateTexts();
    updatePlaceholders();
    // Set default tire type and update tread depths
    document.getElementById('tireType').value = 'winter';
    updateTreadDepths();
});