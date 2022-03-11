let computerGuesss;
let userguess =[];
let userGuessNumber = document.getElementById("textOutput");
let userNumerUpdate = document.getElementById("inputBox");
let audio =new Audio("./song/song2.wav")



const init = () => {
  computerGuesss = parseInt(Math.random() * 100);
  // console.log(computerGuesss);

  document.getElementById("newGameButon").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const stratgame = () => {
  document.getElementById("welcomesreecn").style.display = "none";

  document.getElementById("gameArea").style.display = "block";
};

const easyMode = () => {
    audio.play();
  maxgesss = 10;
  stratgame();
};
const hardMode = () => {
    audio.play();
  maxgesss = 5;
  stratgame();
};

// reload the page 

const newGameBegin=()=>{
    
    audio.play();
  window.location.reload();
}

//strat new game button
const stratNewgame=()=>{
    document.getElementById("newGameButon").style.display = "inline";
    userNumerUpdate.setAttribute("disabled",true)
}



// main lolic of our app
const compareGess = () => {
  const userNumber =document.getElementById("inputBox").value;
  audio.play();

  userguess = [...userguess, userNumber];
  document.getElementById("guess").innerHTML = userguess;
  // check the number low or high

  if(userguess.length<maxgesss){
    if (userNumber > computerGuesss) {
        userGuessNumber.innerText = "Your Guess is very High 😲";
        userNumerUpdate.value = "";
      }
       else if (userNumber < computerGuesss) {
        userGuessNumber.innerText = "Your Guess is very low 😌 ";
        userNumerUpdate.value = "";
      }
       else {
        userGuessNumber.innerText = "It's correct 😃 ";
        userNumerUpdate.value = "";
        }

    }

else{
    if (userNumber > computerGuesss) {
        userGuessNumber.innerText = `You Loose !! Courect Answer Was ${computerGuesss}`;
        userNumerUpdate.value = "";
        stratNewgame();
      }
       else if (userNumber < computerGuesss) {
        userGuessNumber.innerText = `You Loose !! Courect Answer Was ${computerGuesss}`;
        userNumerUpdate.value = "";
        stratNewgame();
      }
       else {
        userGuessNumber.innerText = "It's correct 😃 ";
        userNumerUpdate.value = "";
        stratNewgame();
        }
}


document.getElementById('attempts').innerText = userguess.length;
    

   
  
}
