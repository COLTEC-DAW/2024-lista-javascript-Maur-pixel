let palavra = prompt("Digite a palavra: ");
let condicao = true;

for (let i = 0; i < palavra.length; i++) {
    for (let j = palavra.length-1; j >= 0; j--) {
        if (palavra[i] == palavra[j])
            condicao = true;
        else
            condicao = false;
    }
}
if (condicao == true)
    console.log("A palavra é um palíndromo");
else
    console.log("A palavra não é um palíndromo");