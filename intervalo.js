function range(min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}
//teste
console.log(range(1, 10));