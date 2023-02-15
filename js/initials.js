const perPhonePrice = 1219;
const perCasePrice = 59;
setTextElementValueById('phone-total-price', perPhonePrice);
setTextElementValueById('case-total-price', perCasePrice);

document.getElementById('phone-quantity-field').addEventListener('input', function (event) {
    const newPhoneQuantity = event.target.value;
    const perPhonePrice = 1219;
    setItemTotalPrice('phone-total-price', newPhoneQuantity, perPhonePrice);
    calculateTotal();
});

document.getElementById('case-quantity-field').addEventListener('input', function (event) {
    const newCaseQuantity = event.target.value;
    const perCasePrice = 59;
    setItemTotalPrice('case-total-price', newCaseQuantity, perCasePrice);
    calculateTotal();
});

calculateTotal();