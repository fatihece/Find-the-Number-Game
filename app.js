let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
function guessNumber() {
    let result = document.querySelector("result");
    yourNumber = document.querySelector("#userInput").value;
    // console.log(yourNumber);
    if (randomNumber == yourNumber) {
        document.querySelector(".result").innerHTML = "🎉Correct Number! You win"
        document.querySelector("body").style.backgroundColor = "#60b347";
      
    } else if (randomNumber > yourNumber) {
        document.querySelector(".result").innerHTML = "📉 Too low! UP"
    } else if (randomNumber < yourNumber) {
        document.querySelector(".result").innerHTML = "📈 Too high! DOWN"
    } else {
        document.querySelector(".result").innerHTML = "⛔️ No number!"
    }
}