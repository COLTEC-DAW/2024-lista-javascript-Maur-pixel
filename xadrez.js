let tamanho = prompt("Digite o tamanho: ");
let valor = "# # # #";

for (let i = 0; i < tamanho; i++) {
    if (i%2 == 0) {
        console.log(valor);
    }
    else {
        console.log(" "+valor);
    } 
}