let playagain;
do{
const max = Number(prompt("Enter the max number:"));

if(!Number.isInteger(max) || max<=0){
    alert("Enter valid max number!");
    playagain = "yes";
    continue;
}

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number:");

let count = 0;

let won = false;

while(count<5){
    if(guess === null || guess === ""){
        console.log("Invalid input");
        break;
    }
    if(guess.toLowerCase()==="quit"){
        console.log("user quit");
        break;
    }
    if(isNaN(Number(guess))){
        guess = prompt("Enter a valid number:");
        continue;
    }
    guess = Number(guess);
    count++;
    console.log(`Attempt ${count}/5`);
    if(guess === random){
        alert("You are right! congrats!! random number was :" +random);
        console.log("You are right! congrats!! random number was",random);
        won = true;
        break;
    }
    else if(guess<random){
        guess = prompt("hint : your guess was too small. please try again");
    }
    else{
        guess = prompt("hint : your guess was too large. please try again");

    }
}
 console.log("Total attempts:",count);
 if(count === 5 && !won){
    alert("Your all attempts are over! Game Over! Correct number was: "+random);
    console.log("Game Over! Number was:",random);
 }
 playagain = prompt("Do you want to play again? (yes/no)");

}while(playagain && playagain.toLowerCase()==="yes");
alert("Thanks for playing!");