function mod2(number) {
    if (number%2 == 0)
        return true;
    else
        return false;
}

function mod(num, mod) {
    if (num%mod == 0) 
        return true;
    else    
        return false;
}

//teste
console.log(mod2(15));
console.log(mod(2, mod));