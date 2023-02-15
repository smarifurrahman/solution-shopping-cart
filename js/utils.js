function updateInputFiledValueById(inputFieldId, updateType) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseInt(inputField.value);
    let newInputFieldValue = inputFieldValue;
    switch (updateType) {
        case 'plus':
            newInputFieldValue = inputFieldValue + 1;
            break;
        case 'minus':
            if(inputFieldValue <= 0) {
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

    const taxAmount = subTotal * 0.1;
    const taxAmountToFixed = parseFloat(taxAmount.toFixed(2));
    setTextElementValueById('tax-amount', taxAmountToFixed);

    const finalTotal = subTotal + taxAmountToFixed;
    setTextElementValueById('final-total', finalTotal);
}