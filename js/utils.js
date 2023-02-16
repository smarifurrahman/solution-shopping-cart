function updateInputFiledValueById(inputFieldId, updateType) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseInt(inputField.value);
    let newInputFieldValue = inputFieldValue;
    switch (updateType) {
        case 'plus':
            newInputFieldValue = inputFieldValue + 1;
            break;
        case 'minus':
            if (inputFieldValue <= 0) {
                break;
            }
            newInputFieldValue = inputFieldValue - 1;
            break;
    }
    inputField.value = newInputFieldValue;

    return newInputFieldValue;
}

function setItemTotalPrice(elementId, itemQuantity, perItemPrice) {
    const element = document.getElementById(elementId);
    const totalPrice = itemQuantity * perItemPrice;
    element.innerText = totalPrice;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    return parseFloat(element.innerText);
}

function setTextElementValueById(elementId, elementValue) {
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}


function calculateTotal() {
    const caseTotalPrice = getTextElementValueById('case-total-price');
    const phoneTotalPrice = getTextElementValueById('phone-total-price');
    const subTotal = caseTotalPrice + phoneTotalPrice;
    setTextElementValueById('sub-total', subTotal);

    const taxAmount =  calculateTax(subTotal);

    calculateFinalTotal(subTotal, taxAmount);
}

function calculateTax(subTotal) {
    const taxAmount = subTotal * 0.1;
    const taxAmountToFixed = parseFloat(taxAmount.toFixed(2));
    setTextElementValueById('tax-amount', taxAmountToFixed);
    return taxAmountToFixed;
}

function calculateFinalTotal(subTotal, taxAmount) {
    const finalTotal = subTotal + taxAmount;
    setTextElementValueById('final-total', finalTotal);
}

function removeItemById(itemId, elementTotalPriceId) {
    const removeItem = document.getElementById(itemId);
    const elementTotalPrice = getTextElementValueById(elementTotalPriceId);

    const subTotal = getTextElementValueById('sub-total');
    const newSubTotal = subTotal - elementTotalPrice;
    setTextElementValueById('sub-total', newSubTotal);

    const newTaxAmount =  calculateTax(newSubTotal);

    calculateFinalTotal(newSubTotal, newTaxAmount);

    removeItem.remove();
}