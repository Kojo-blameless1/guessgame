'use strict';
/*
console.log(document.querySelector(".message").textContent);
 

document.querySelector(".message").textContent = "Correct Number!";
sss
console.log(document.querySelector(".message").textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value = 23);
console.log(document.querySelector('.guess').value );
*/

let secretNumber = Math.trunc(Math.random() * 20  ) + 1;



let score = 20;
let highScore = 0;
function displayMessage(message){
    document.querySelector('.message').textContent = message;
} 

document.querySelector('.check').addEventListener('click' ,function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess);
    
    //When No Guess
    if(!guess){
        
        displayMessage('No Number');
    }
    //When Player Wins
    else if(guess === secretNumber){
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        document.querySelector('.number').textContent = secretNumber;
        displayMessage("Correct Number!😅😅👏");
        document.querySelector('.score').textContent = score;

        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('number').style.width = '30rem';
       
        
    }

    else if(guess !== secretNumber){
        displayMessage(guess > secretNumber ?"Too High😞" :"Too Low😞")
        if(score >1){
            score --;
            document.querySelector('.score').textContent = score;


        }else{
            displayMessage('YOU LOST😰😰👹👹');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
    // //Wheb Guess too High
    // else if(guess >secretNumber){
    //     if(score > 1){

    //         document.querySelector(".message").textContent = "Too High😞";
    //         score -=1
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector(".message").textContent = "YOU LOST😰😰👹👹";
    //         document.querySelector('.score').textContent = 0
    //         document.querySelector('body').style.backgroundColor = 'red';
    //     }

    // }
    // //When Guess too Low
    // else if(guess < secretNumber){
    //     if(score > 1){

    //         document.querySelector(".message").textContent = "Too Low😞";
    //         score -=1
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector(".message").textContent = "YOU LOST";
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //     }
    // }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  



