document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseQuantity = updateInputFiledValueById('case-quantity-field', 'plus');
    
    const perCasePrice = 59;
    setItemTotalPrice('case-total-price', newCaseQuantity, perCasePrice);

    calculateTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseQuantity = updateInputFiledValueById('case-quantity-field', 'minus');

    const perCasePrice = 59;
    setItemTotalPrice('case-total-price', newCaseQuantity, perCasePrice);

    calculateTotal();
});

document.getElementById('remove-case').addEventListener('click', function () {
    removeItemById('item-case-container', 'case-total-price');
});