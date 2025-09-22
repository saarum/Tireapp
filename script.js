function calculateTireValue() {
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
        alert('Vennligst fyll ut alle felt med gyldige tall');
        return;
    }
    
    if (currentTread < minTread) {
        alert('Nåværende mønsterdybde er under minimum sikkerhetsnivå!');
        return;
    }
    
    if (currentTread > newTread) {
        alert('Nåværende mønsterdybde kan ikke være større enn ny mønsterdybde');
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
    let condition = '';
    if (treadLifeRemaining > 70) {
        condition = ' (Utmerket)';
    } else if (treadLifeRemaining > 50) {
        condition = ' (God)';
    } else if (treadLifeRemaining > 30) {
        condition = ' (Akseptabel)';
    } else {
        condition = ' (Dårlig)';
    }
    
    document.getElementById('treadLife').textContent += condition;
    
    // Age warning
    if (tireAge > 6) {
        document.getElementById('ageFactor').textContent += ' (Vurder utskifting pga. alder)';
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
        newTreadInput.placeholder = '8,0';
        minTreadInput.placeholder = '3,0';
    } else if (tireType === 'summer') {
        newTreadInput.value = '7.0';
        minTreadInput.value = '1.6';
        newTreadInput.placeholder = '7,0';
        minTreadInput.placeholder = '1,6';
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
    // Set default tire type and update tread depths
    document.getElementById('tireType').value = 'winter';
    updateTreadDepths();
});