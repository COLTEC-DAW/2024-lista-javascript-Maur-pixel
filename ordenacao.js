function bubbleSort(array, comparar) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (comparar(array[j], array[j + 1])) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Troca de elementos
            }
        }
    }
}

function crescente(a, b) {
    return a > b;
}

function decrescente(a, b) {
    return a < b;
}

function crescenteImpares(a, b) {
    if (a % 2 !== 0 && b % 2 !== 0) {
        return a > b;
    } else if (a % 2 !== 0) {
        return false;
    } else if (b % 2 !== 0) {
        return true;
    } else {
        return a > b;
    }
}

function decrescentePares(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a < b;
    } else if (a % 2 === 0) {
        return false;
    } else if (b % 2 === 0) {
        return true;
    } else {
        return a < b;
    }
}


