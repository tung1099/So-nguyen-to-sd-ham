function checkPrime(number){
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number%i===0){
            return false
        }
    } return true
}

for (let i = 2; i < 10000; i++) {
    if (checkPrime(i)===true){
        document.write(i+"<br>")
    }
}