function calculateTotal(itemName, price, quantity, hasDiscount) {
    const total = price * quantity;

    // Si la remise est activée (true), applique 20 % de réduction.
    if (hasDiscount) {
        return total * 0.8;
    }

    return total;
}

console.log(calculateTotal("T-shirt", 3, 4, true));