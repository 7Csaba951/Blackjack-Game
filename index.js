let sumOfCards = 0;
let numOfClicks = 0;
let buttonClicked = false;
let result = "";
let hand = 0;

const Colors = [
  "Clubs",
  "Diamonds",
  "Hearts",
  "Spades"
];

const Numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

// This restarts the game, whether if the number is too high or to low, OR if the user wants to restart
function resetCode(isFromRestartButton)
{
  document.getElementById("card").style.display = "none";
  sumOfCards = 0;
  numOfClicks = 0;
  hand = 0;
  buttonClicked = false;
  result = "";
  document.querySelectorAll("span").forEach(span =>
  {
    span.innerHTML = "";
  });
  if(isFromRestartButton)
  {
    result = document.getElementById("result").innerHTML = "You just restarted the game!";
  }
  else
  {
    result = document.getElementById("result").innerHTML = "Too high! You lost";
  }
}

// This creates a random number, outputs your hand value, your number of clicks and whether you won, or lost.
function generateNum()
{
  document.getElementById("card").style.display = "block";
  const card = Math.floor(Math.random() * 13);
  document.getElementById("draw").innerHTML = card;

  numOfClicks++;
  document.getElementById("draws").innerHTML = "You clicked the button " + numOfClicks + " times!";

  const choose_Category = Math.floor(Math.random() * 4);
  const choose_Card_From_Category = Math.floor(Math.random() * 13);
  let imgSrc = Colors[choose_Category] + "/" + Numbers[choose_Card_From_Category] + ".png";
  document.getElementById("card").setAttribute("src", imgSrc);
  console.log(imgSrc);

  if (!buttonClicked)
  {
    sumOfCards += card;
    hand = document.getElementById("sumOfCards").innerHTML = sumOfCards;
    result = document.getElementById("result").innerHTML = "Too low! Draw another card!";
    buttonClicked = true;
  }
  else
  {
    while (sumOfCards <= 21)
    {

      sumOfCards += card;
      hand = document.getElementById("sumOfCards").innerHTML = sumOfCards;
      if (sumOfCards > 21)
      {
        result = document.getElementById("result").innerHTML = "Too high! Draw another card!";
        if (window.confirm("Your number is too high! Would you like to play again?"))
        {
          console.log("The user choose to play again.");
          resetCode(false);
        }
        else
        {
          console.log("The user choose not to play again.");
        }
      }
      else if (sumOfCards == 21)
      {
        result = document.getElementById("result").innerHTML = "You won!";
        if (window.confirm("You won! Would you like to play again?"))
        {
          console.log("The user choose to play again.");
          resetCode(false);
        }
        else
        {
          console.log("The user choose not to play again.");
        }
      }
      break;
    }
  }
  // This is for overwatch purposes
  console.log("Card is: " + card);
  console.log("Your hand is: " + sumOfCards);
  console.log("numOfClicks: " + numOfClicks + "\n-------");
}