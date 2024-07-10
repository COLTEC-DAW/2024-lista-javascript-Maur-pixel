function criarMatriz(linhas, colunas, funcaoMatricial) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(funcaoMatricial(i, j));
        }
        matriz.push(linha);
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    matriz.forEach(linha => {
        console.log(linha.join(' '));
    });
}

// Funções matriciais
const somaIndices = (i, j) => i + j;
const produtoIndices = (i, j) => i * j;
const identidade = (i, j) => i === j ? 1 : 0;
const divisaoIndices = (i, j) => i * i / (j + 1);
const comparacaoIndices = (i, j) => i > j ? 1 : (i < j ? 5 : 0);

//Testando...

const linhas = 5;
const colunas = 5;

console.log("Matriz com m[i,j] = i + j:");
imprimirMatriz(criarMatriz(linhas, colunas, somaIndices));

console.log("\nMatriz com m[i,j] = i * j:");
imprimirMatriz(criarMatriz(linhas, colunas, produtoIndices));

console.log("\nMatriz com m[i,j] = i == j ? 1 : 0:");
imprimirMatriz(criarMatriz(linhas, colunas, identidade));

console.log("\nMatriz com m[i,j] = i^2 / (j + 1):");
imprimirMatriz(criarMatriz(linhas, colunas, divisaoIndices));

console.log("\nMatriz com m[i,j] = i > j ? 1 : (i < j ? 5 : 0):");
imprimirMatriz(criarMatriz(linhas, colunas, comparacaoIndices));
