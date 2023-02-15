const perPhonePrice = 1219;
const perCasePrice = 59;
setTextElementValueById('phone-total-price', perPhonePrice);
setTextElementValueById('case-total-price', perCasePrice);

document.getElementById('phone-quantity-field').addEventListener('input', function (event) {
    let newPhoneQuantity = event.target.value;

    if(newPhoneQuantity < 0) {
        event.target.value = 0;
        newPhoneQuantity = 0;
    }

    const perPhonePrice = 1219;
    setItemTotalPrice('phone-total-price', newPhoneQuantity, perPhonePrice);
    calculateTotal();
});

document.getElementById('case-quantity-field').addEventListener('input', function (event) {
    const newCaseQuantity = event.target.value;

    if(newCaseQuantity < 0) {
        event.target.value = 0;
        newCaseQuantity = 0;
    }

    const perCasePrice = 59;
    setItemTotalPrice('case-total-price', newCaseQuantity, perCasePrice);
    calculateTotal();
});

calculateTotal();