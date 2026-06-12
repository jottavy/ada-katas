function calculatePriceTTC(priceHT, rateTVA) {
    const priceTTC = priceHT * (1 + rateTVA / 100);

    return Number(priceTTC.toFixed(2));
}

console.log(calculatePriceTTC(19.99, 0));

// Prix TTC = Prix HT × (1 + TVA / 100)

// Exemple avec TVA 5.5% :
// 19.99 × (1 + 5.5 / 100)
// 19.99 × 1.055
// 21.08945

// toFixed(2) : arrondit le nombre à 2 décimales MAIS retourne une string

// Number(...) : reconvertit cette string en number pour garder un type numérique