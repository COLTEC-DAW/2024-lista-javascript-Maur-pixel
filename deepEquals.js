function deepEquals(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length)
        return false;

    for (let key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
    }

    return true;
}

//objetos para teste

let objA = {
    nome: "Maurinho",
    idade: "52",
    turma: "info",
    nacionalidade: {
        pais: "Brasil",
        estado: "Minas Gerais"
    }
}

let objB = {
    nome: "Maurinho",
    idade: "52",
    turma: "quimica",
    nacionalidade: {
        pais: "Brasil",
        estado: "Tocantins"
    }
}

console.log(deepEquals(objA, objB));