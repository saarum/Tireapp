// Language translations
const translations = {
    en: {
        title: "Used Tire Value Calculator",
        language: "Language:",
        backToHome: "← Back to Home",
        tireType: "Tire Type",
        winterTires: "Winter Tires (8mm new / 3mm min)",
        summerTires: "Summer Tires (7mm new / 1.6mm min)",
        currentTread: "Current Tread Depth (mm)",
        newTread: "Tread Depth When New (mm)",
        minTread: "Minimum Tread Depth (mm)",
        productionYear: "Production Year",
        originalPrice: "Original Price",
        mountingCost: "Mounting Cost",
        expectedLifespan: "Expected Lifespan (years)",
        calculateButton: "Calculate Tire Value",
        treadLifeRemaining: "Tread Life Remaining:",
        ageFactor: "Age Factor:",
        netTireValue: "Net Tire Value (after mounting cost):",
        finalValue: "Final Value:",
        howItWorks: "How it works:",
        howItWorks1: "Tread life remaining is calculated based on current vs. new tread depth",
        howItWorks2: "Age depreciation applies 10% per year after the first year",
        howItWorks3: "Minimum value is set to 10% of original price for safety tires",
        howItWorks4: "Mounting cost is deducted from the tire value to show net worth",
        currentTreadPlaceholder: "e.g., 5.5",
        productionYearPlaceholder: "e.g., 2020",
        originalPricePlaceholder: "e.g., 10000",
        mountingCostPlaceholder: "e.g., 1200",
        expectedLifespanPlaceholder: "e.g., 7",
        alertFillFields: "Please fill in all fields with valid numbers",
        alertBelowMinimum: "Current tread depth is below minimum safe level!",
        alertTreadTooHigh: "Current tread depth cannot be greater than new tread depth",
        excellent: "Excellent",
        good: "Good",
        fair: "Fair",
        poor: "Poor",
        ageWarning: "Consider replacement due to age"
    },
    no: {
        title: "Bruktdekk Verdikalkulator",
        language: "Språk:",
        backToHome: "← Tilbake til hovedsiden",
        tireType: "Dekktype",
        winterTires: "Vinterdekk (8mm ny / 3mm min)",
        summerTires: "Sommerdekk (7mm ny / 1,6mm min)",
        currentTread: "Nåværende mønsterdybde (mm)",
        newTread: "Mønsterdybde som ny (mm)",
        minTread: "Minimum mønsterdybde (mm)",
        productionYear: "Produksjonsår",
        originalPrice: "Nypris (kr)",
        mountingCost: "Monteringskostnad (kr)",
        expectedLifespan: "Forventet levetid (år)",
        calculateButton: "Beregn dekkverdi",
        treadLifeRemaining: "Gjenværende mønster:",
        ageFactor: "Aldersfaktor:",
        netTireValue: "Netto dekkverdi (etter montering):",
        finalValue: "Endelig verdi:",
        howItWorks: "Slik fungerer det:",
        howItWorks1: "Gjenværende mønster beregnes basert på nåværende vs. ny mønsterdybde",
        howItWorks2: "Aldersavskrivning på 10% per år etter første år",
        howItWorks3: "Minimumsverdi settes til 10% av nypris for sikkerhetsdekk",
        howItWorks4: "Monteringskostnad trekkes fra dekkverdien for å vise nettoverdi",
        currentTreadPlaceholder: "f.eks. 5,5",
        productionYearPlaceholder: "f.eks. 2020",
        originalPricePlaceholder: "f.eks. 10000",
        mountingCostPlaceholder: "f.eks. 1200",
        expectedLifespanPlaceholder: "f.eks. 7",
        alertFillFields: "Vennligst fyll ut alle felt med gyldige tall",
        alertBelowMinimum: "Nåværende mønsterdybde er under minimum sikkerhetsnivå!",
        alertTreadTooHigh: "Nåværende mønsterdybde kan ikke være større enn ny mønsterdybde",
        excellent: "Utmerket",
        good: "God",
        fair: "Akseptabel",
        poor: "Dårlig",
        ageWarning: "Vurder utskifting pga. alder"
    },
    de: {
        title: "Gebrauchtreifen Wertrechner",
        language: "Sprache:",
        backToHome: "← Zurück zur Startseite",
        tireType: "Reifentyp",
        winterTires: "Winterreifen (8mm neu / 3mm min)",
        summerTires: "Sommerreifen (7mm neu / 1,6mm min)",
        currentTread: "Aktuelle Profiltiefe (mm)",
        newTread: "Profiltiefe bei Neuzustand (mm)",
        minTread: "Mindestprofiltiefe (mm)",
        productionYear: "Produktionsjahr",
        originalPrice: "Neupreis (€)",
        mountingCost: "Montagekosten (€)",
        expectedLifespan: "Erwartete Lebensdauer (Jahre)",
        calculateButton: "Reifenwert berechnen",
        treadLifeRemaining: "Verbleibendes Profil:",
        ageFactor: "Altersfaktor:",
        netTireValue: "Netto Reifenwert (nach Montage):",
        finalValue: "Endwert:",
        howItWorks: "So funktioniert es:",
        howItWorks1: "Verbleibendes Profil wird basierend auf aktueller vs. neuer Profiltiefe berechnet",
        howItWorks2: "Altersabschreibung von 10% pro Jahr nach dem ersten Jahr",
        howItWorks3: "Mindestwert wird auf 10% des Neupreises für Sicherheitsreifen gesetzt",
        howItWorks4: "Montagekosten werden vom Reifenwert abgezogen um den Nettowert zu zeigen",
        currentTreadPlaceholder: "z.B. 5,5",
        productionYearPlaceholder: "z.B. 2020",
        originalPricePlaceholder: "z.B. 10000",
        mountingCostPlaceholder: "z.B. 1200",
        expectedLifespanPlaceholder: "z.B. 7",
        alertFillFields: "Bitte füllen Sie alle Felder mit gültigen Zahlen aus",
        alertBelowMinimum: "Aktuelle Profiltiefe liegt unter dem Mindestsicherheitsniveau!",
        alertTreadTooHigh: "Aktuelle Profiltiefe kann nicht größer als neue Profiltiefe sein",
        excellent: "Ausgezeichnet",
        good: "Gut",
        fair: "Akzeptabel",
        poor: "Schlecht",
        ageWarning: "Austausch aufgrund des Alters erwägen"
    },
    fr: {
        title: "Calculateur de Valeur de Pneus Usagés",
        language: "Langue:",
        backToHome: "← Retour à l'accueil",
        tireType: "Type de Pneu",
        winterTires: "Pneus Hiver (8mm neuf / 3mm min)",
        summerTires: "Pneus Été (7mm neuf / 1,6mm min)",
        currentTread: "Profondeur Actuelle de Sculpture (mm)",
        newTread: "Profondeur de Sculpture à Neuf (mm)",
        minTread: "Profondeur Minimale de Sculpture (mm)",
        productionYear: "Année de Production",
        originalPrice: "Prix d'Origine (€)",
        mountingCost: "Coût de Montage (€)",
        expectedLifespan: "Durée de Vie Prévue (années)",
        calculateButton: "Calculer la Valeur du Pneu",
        treadLifeRemaining: "Sculpture Restante:",
        ageFactor: "Facteur d'Âge:",
        netTireValue: "Valeur Nette du Pneu (après montage):",
        finalValue: "Valeur Finale:",
        howItWorks: "Comment ça marche:",
        howItWorks1: "La sculpture restante est calculée basée sur actuelle vs. nouvelle profondeur",
        howItWorks2: "Dépréciation d'âge de 10% par an après la première année",
        howItWorks3: "Valeur minimale fixée à 10% du prix d'origine pour les pneus de sécurité",
        howItWorks4: "Le coût de montage est déduit de la valeur du pneu pour montrer la valeur nette",
        currentTreadPlaceholder: "ex. 5,5",
        productionYearPlaceholder: "ex. 2020",
        originalPricePlaceholder: "ex. 10000",
        mountingCostPlaceholder: "ex. 1200",
        expectedLifespanPlaceholder: "ex. 7",
        alertFillFields: "Veuillez remplir tous les champs avec des nombres valides",
        alertBelowMinimum: "La profondeur actuelle de sculpture est en dessous du niveau de sécurité minimum!",
        alertTreadTooHigh: "La profondeur actuelle ne peut pas être supérieure à la profondeur neuve",
        excellent: "Excellent",
        good: "Bon",
        fair: "Acceptable",
        poor: "Mauvais",
        ageWarning: "Considérer le remplacement en raison de l'âge"
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
    const currentTread = parseFloat(document.getElementById('currentTread').value);
    const newTread = parseFloat(document.getElementById('newTread').value);
    const minTread = parseFloat(document.getElementById('minTread').value);
    const productionYear = parseInt(document.getElementById('productionYear').value);
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const mountingCost = parseFloat(document.getElementById('mountingCost').value);
    const expectedLifespan = parseInt(document.getElementById('expectedLifespan').value);
    
    // Validate inputs
    if (isNaN(currentTread) || isNaN(newTread) || isNaN(minTread) || 
        isNaN(productionYear) || isNaN(originalPrice) || isNaN(mountingCost) || 
        isNaN(expectedLifespan)) {
        alert(lang.alertFillFields);
        return;
    }
    
    if (currentTread < minTread) {
        alert(lang.alertBelowMinimum);
        return;
    }
    
    if (currentTread > newTread) {
        alert(lang.alertTreadTooHigh);
        return;
    }
    
    // Calculate tread life remaining (as percentage)
    const usableTread = newTread - minTread;
    const remainingTread = currentTread - minTread;
    const treadLifeRemaining = (remainingTread / usableTread) * 100;
    
    // Calculate age factor
    const currentYear = new Date().getFullYear();
    const tireAge = currentYear - productionYear;
    
    // Age depreciation: 10% per year after first year, minimum 10% value
    let ageFactor = 1.0;
    if (tireAge > 1) {
        ageFactor = Math.max(0.1, 1.0 - ((tireAge - 1) * 0.1));
    }
    
    // Calculate base value based on tread life
    const treadValue = (treadLifeRemaining / 100) * originalPrice;
    
    // Apply age depreciation
    const ageAdjustedValue = treadValue * ageFactor;
    
    // Ensure minimum value (10% of original price for safety)
    const baseCurrentValue = Math.max(ageAdjustedValue, originalPrice * 0.1);
    
    // Deduct mounting cost from current tire value
    const currentValue = Math.max(baseCurrentValue - mountingCost, 0);
    
    // Total value is just the current value (mounting cost already deducted)
    const totalValue = currentValue;
    
    // Update display
    document.getElementById('treadLife').textContent = `${treadLifeRemaining.toFixed(1)}%`;
    document.getElementById('ageFactor').textContent = `${(ageFactor * 100).toFixed(0)}%`;
    document.getElementById('currentValue').textContent = `${currentValue.toFixed(0)} kr`;
    document.getElementById('totalCost').textContent = `${totalValue.toFixed(0)} kr`;
    
    // Add condition assessment
    const lang = translations[currentLanguage];
    let condition = '';
    if (treadLifeRemaining > 70) {
        condition = ` (${lang.excellent})`;
    } else if (treadLifeRemaining > 50) {
        condition = ` (${lang.good})`;
    } else if (treadLifeRemaining > 30) {
        condition = ` (${lang.fair})`;
    } else {
        condition = ` (${lang.poor})`;
    }
    
    document.getElementById('treadLife').textContent += condition;
    
    // Age warning
    if (tireAge > 6) {
        document.getElementById('ageFactor').textContent += ` (${lang.ageWarning})`;
    }
}

// Add Enter key support for calculation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateTireValue();
    }
});

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

// Add Enter key support for calculation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateTireValue();
    }
});

// Auto-fill some default values for demonstration
window.addEventListener('load', function() {
    document.getElementById('expectedLifespan').value = '7';
    // Set default language to English and update interface
    document.getElementById('languageSelect').value = 'en';
    currentLanguage = 'en';
    updateTexts();
    updatePlaceholders();
    // Set default tire type and update tread depths
    document.getElementById('tireType').value = 'winter';
    updateTreadDepths();
});