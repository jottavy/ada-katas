// 1.

const tab = [12, 7, 18, 3, 15, 9];
let somme = 0;
let nb = 0;
let moyenne = 0;

for (i = 0; i <= 5; i++) {
    if (tab [i] >= 10) {
       somme = somme + tab[i]
       nb = nb + 1
    }   
}

if (nb >0) {
    moyenne = somme / nb
    console.log("Moyenne des valeurs >= 10 :", moyenne)
} else {
    console.log("Aucune valeur >= 10")
}

// 2. Cet algo calcule la moyenne des notes au-dessus au-dessus de 10 du tableau "tab".

// 3. La valeur est 15.