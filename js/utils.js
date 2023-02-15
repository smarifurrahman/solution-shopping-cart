function updateInputFiledValueById(inputFieldId, updateType) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseInt(inputField.value);
    let newInputFieldValue = inputFieldValue;
    switch (updateType) {
        case 'plus':
            newInputFieldValue = inputFieldValue + 1;
            break;
        case 'minus':
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













// function increaseInputFiledValue(inputFieldId) {
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldValue = parseInt(inputField.value);
//     const newInputFieldValue = inputFieldValue + 1;
//     inputField.value = newInputFieldValue;
// }

/* function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValue = parseInt(inputField.value);
    return inputValue;
}

function setInputFieldValueById(inputFieldId, inputFieldValue) {
    const inputField = document.getElementById(inputFieldId);
    inputField.value = inputFieldValue;
} */