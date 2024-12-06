
randomNUm = Math.floor(Math.random() * 100) + 1
console.log(randomNUm);7

Guesses = 1


function submit() {

    document.getElementById("Guesses").textContent = `Number of Guesses: ${Guesses}`
    Guess = document.getElementById("inputNumber").value;
    Guess = parseInt(Guess)
    document.getElementById("Guess").textContent = `Your Guess is: ${Guess}`

    if (isNaN(Guess)) {
        document.getElementById("Guess").textContent = `Please type in a valid number!`
        document.getElementById("Guesses").textContent = ``

    }
    else{

        if (Guess < randomNUm) {
            document.getElementById("Guess").textContent = `${Guess} is Too Low!`
            Guesses += 1
    
        }
    
        if (Guess > randomNUm) {
            document.getElementById("Guess").textContent = `${Guess} is Too High!`
            Guesses += 1
    
        }
        if (Guess == randomNUm) {
            document.getElementById("Guess").textContent = `CORRECT! the number was: ${randomNUm}`
            document.getElementById("Guesses").textContent = `It took you ${Guesses} Guesses`
        }
    
    }

    
}




