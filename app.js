let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let attempt = 20;
function guessNumber() {
    let result = document.querySelector("result");
    let yourNumber = document.querySelector("#userInput").value;
    
    if (randomNumber == yourNumber) {
        document.querySelector(".result").innerHTML= "ð Correct Number! You win"
        document.querySelector("body").style.backgroundColor = "#60b347";
      
    } else if (randomNumber > yourNumber) {
        if (attempt > 1) {
            document.querySelector(".result").innerHTML = "ð Too low! UP"
            attempt--
            document.querySelector(".attempt").innerHTML = attempt
        } else {
            document.querySelector(".result").innerHTML = "You lost the gameð¥ Try again!!!"
            document.querySelector("body").style.backgroundColor= "red"
            document.querySelector(".attempt").innerHTML = 0;
        }

    } else if (randomNumber < yourNumber) {
        if (attempt > 1) {
            document.querySelector(".result").innerHTML = "ð Too high! DOWN"
            attempt--
            document.querySelector(".attempt").innerHTML = attempt
        } else {
            document.querySelector(".result").innerHTML = "You lost the gameð¥ Try again!!!"
            document.querySelector("body").style.backgroundColor= "red"
            document.querySelector(".attempt").innerHTML = 0;

        }
    } else {
        document.querySelector(".result").innerHTML = "âï¸ No number!"
    }
}


