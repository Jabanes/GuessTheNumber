




randomNUm = Math.floor(Math.random()*100)+1
console.log(randomNUm);

Guesses = 1


function submit(){

    document.getElementById("Guesses").textContent = `Number of Guesses: ${Guesses}`
    Guess = document.getElementById("inputNumber").value;
    Guess = parseInt(Guess)
    document.getElementById("Guess").textContent = `Your Guess is: ${Guess}`
    
    
        if (Guess < randomNUm){
            console.log(`Too low`);
            Guesses += 1
            
        }

        if (Guess > randomNUm){
            console.log(`Too High`);
            Guesses += 1
        
        }
        if (Guess == randomNUm){
            console.log(`Correct!`);
          
        }
        
    }
    



