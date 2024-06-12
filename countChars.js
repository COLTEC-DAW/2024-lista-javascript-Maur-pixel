function countChars(frase, c) {
    let counter = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == c)
            counter++;
    }
    console.log("A letra "+c+" aparece "+counter+" vezes em "+frase);
}

countChars("ouviram do ipiranga as margens placidas", "a");