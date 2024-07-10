function transformarString(texto, funcao) {
    return texto.split('').map(funcao).join('');
}

function caixaAltaVogais(char) {
    const vogais = 'aeiou';

    if (vogais.includes(char.toLowerCase())) {
        return char.toUpperCase();
    } else {
        return char;
    }
}

function caixaAltaConsoantes(char) {
    const consoantes = 'bcdfghjklmnpqrstvwxyz';
    if (consoantes.includes(char.toLowerCase())) {
        return char.toUpperCase();
    } else {
        return char;
    }
}

function caixaBaixaVogais(char) {
    const vogais = 'aeiou';
    if (vogais.includes(char.toLowerCase())) {
        return char.toLowerCase();
    } else {
        return char;
    }
}

function caixaBaixaConsoantes(char) {
    const consoantes = 'bcdfghjklmnpqrstvwxyz';
    if (consoantes.includes(char.toLowerCase())) {
        return char.toLowerCase();
    } else {
        return char;
    }
}
let frase = "JavaScript no auge!";
let fraseTransformada = transformarString(frase, caixaAltaVogais);

console.log(fraseTransformada);