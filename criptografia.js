function criptografar(texto, funcaoCriptografia) {
    return texto.split('').map(funcaoCriptografia).join('');
}

function cifraDeCesar(frase, deslocamento) {
    if (frase.match(/[a-z]/i)) {
        const asciiOffset = frase === frase.toUpperCase() ? 65 : 97;
        return String.fromCharCode((frase.charCodeAt(0) - asciiOffset + deslocamento) % 26 + asciiOffset);
    } else {
        return frase;
    }
}

// Teste
let textoOriginal = "Bom dia!";
let textoCriptografado = criptografar(textoOriginal, frase => cifraDeCesar(frase, 3));
console.log("Texto original:", textoOriginal);
console.log("Texto criptografado:", textoCriptografado);
