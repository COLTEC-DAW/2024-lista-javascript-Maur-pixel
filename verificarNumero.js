function verificaNumero(funcao) {
    return funcao;
}

function verificaImpar(numero) {
    if (numero%2 == 0)
        return false;
    else if (numero%2 == 1)
        return true;
    else
        return undefined;
}

function verificaPrimo(numero) {
    if (numero < 2)
        return false;

    if (numero === 2 || numero === 3)
        return true;

    if (numero%2 === 0 || numero%3 === 0)
        return false;

    for (let i = 5; i * i <= numero; i+=6) {
        if (numero%i === 0 || numero%(i + 2) === 0) {
            return false;
        }
    }
    return true;
}

//Testando...

let numero = 29;
let ehImpar = verificaImpar(numero);
let ehPrimo = verificaPrimo(numero);

console.log(verificaNumero(ehPrimo));
console.log(verificaNumero(ehImpar));