function range(min, max, i) {
    let array = [];

    for (let count = 0; count < i; count++) {
        if (min == max)
            break;
        else {
            array.push(min);
            min++;
        }   
    }
    return array;
}
//teste
console.log(range(1, 10, 2));