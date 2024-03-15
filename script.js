let userScore= 0;
let compScore= 0;


let rock = document.querySelector('#rock');
let scissor = document.querySelector('#scissor');
let paper = document.querySelector('#paper');

const choices = document.querySelector('#choices');


const userScoreDiv = document.querySelector("#score-user");
const compScoreDiv = document.querySelector('#score-comp');

const userChoice = document.querySelector(".choice");

//  to generate computer's choice ------>
const genCompChoice = () => {
    const options = ["rock", "scissor","paper"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame = (userChoice, compChoice) => {
    if(userChoice === 'rock'){
      window.location.href = "tie-rock.html";
    } else if(userChoice === 'paper'){
      window.location.href = "tie-paper.html";
    } else {
      window.location.href = "tie-scissor.html";
    }
    
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
      userScore++;  
      userScoreDiv.innerText = userScore;
      localStorage.setItem('userScore', userScore.toString());
    } else{
      compScore++;
      compScoreDiv.innerText= compScore;
      localStorage.setItem('compScore', compScore.toString());
     }
  }

  // Function to update user score on UI
const updateUserScoreUI = (score) => {
  userScoreDiv.innerText = score;
};

// Function to update computer score on UI
const updateCompScoreUI = (score) => {
  compScoreDiv.innerText = score;
};

// Function to update scores from local storage
const updateScoresFromLocalStorage = () => {
  const storedUserScore = localStorage.getItem('userScore');
  if (storedUserScore !== null) {
      // Parse the stored value as an integer
      const parsedUserScore = parseInt(storedUserScore);
      // Update user score on UI
      updateUserScoreUI(parsedUserScore);
      // Update userScore variable
      userScore = parsedUserScore;
  }

  const storedCompScore = localStorage.getItem('compScore');
  if (storedCompScore !== null) {
      // Parse the stored value as an integer
      const parsedCompScore = parseInt(storedCompScore);
      // Update computer score on UI
      updateCompScoreUI(parsedCompScore);
      // Update compScore variable
      compScore = parsedCompScore;
  }
};

// Call the function to update scores from local storage when the page loads
window.onload = () => {
  updateScoresFromLocalStorage();
};

//  On click of buttons - rock, paper, scissor ---->

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame(userChoice, compChoice);
    } else{
        let userWin = true;
        if(userChoice === "rock") {
           userWin = compChoice === "paper" ? false : true;
           if(userWin){
               window.location.href = "win-rock.html";
           } else{
            window.location.href = "lose-rock.html";
           }
        }
        else if(userChoice === "paper"){
          userWin = compChoice === "scissor" ? false : true;
          if(userWin){
             window.location.href = "win-paper.html";
         } else{
             window.location.href = "lose-paper.html";
           }
        }
        else{
           userWin = compChoice === "rock" ? false : true;
           if(userWin){
             window.location.href = "win-scissor.html";
         } else{
          window.location.href = "lose-scissor.html";
         }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const rulesCard = document.querySelector('.game-rules');

const rulesClick = () => {
  rulesCard.classList.add('active');
}

const rulesClose = () => {
  rulesCard.classList.remove('active');
}

// play again button click ----->
const playAgain = () => {
  window.location.href = "index.html";
}

const nextButton = document.querySelector('#next-btn');

const nextButtonClick = () => {
  window.location.href = "hurray.html";
}
