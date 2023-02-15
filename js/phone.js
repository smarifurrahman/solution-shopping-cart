document.getElementById('btn-phone-plus').addEventListener('click', function() {
    const newPhoneQuantity = updateInputFiledValueById('phone-quantity-field', 'plus');

    const perPhonePrice = 1219;
    setItemTotalPrice('phone-total-price', newPhoneQuantity, perPhonePrice);
});

document.getElementById('btn-phone-minus').addEventListener('click', function() {
    const newPhoneQuantity = updateInputFiledValueById('phone-quantity-field', 'minus');

    const perPhonePrice = 1219;
    setItemTotalPrice('phone-total-price', newPhoneQuantity, perPhonePrice);
});