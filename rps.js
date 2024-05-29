//variable initialization
let compGuess = Math.random();
let compMove = 'N/A';
let playerMove = 'N/A';
let result = 'N/A';
const score = 
{
    wins: 0,
    losses: 0,
    ties: 0
};

//playerMove
const r = document.querySelector('.rock');
r.addEventListener('click', () => 
    {
        playerMove = 'Rock';
        document.querySelector('.yourHand').innerHTML =`<img class="handYours" src="imagess/handRock.png"></img>`;
        compMovee();
        compare(playerMove);
        scoreUpdate();
        compGuess = Math.random();
    });

const p = document.querySelector('.paper');
p.addEventListener('click', () => 
    {
        playerMove = 'Paper';
        document.querySelector('.yourHand').innerHTML =`<img class="handYours" src="imagess/handPaper.png"></img>`;
        compMovee();
        compare(playerMove);
        scoreUpdate();
        compGuess = Math.random();
    });

const s = document.querySelector('.scissors');
s.addEventListener('click', () => 
    {
        playerMove = 'Scissors';
        document.querySelector('.yourHand').innerHTML =`<img class="handYours" src="imagess/handScissors.png"></img>`;
        compMovee();
        compare(playerMove);
        scoreUpdate();
        compGuess = Math.random();
    });

//shows your move and computer's move
function display()
{
    document.querySelector('.personMoves').innerHTML = `<strong>Your move:</strong> ${playerMove}`;
    document.querySelector('.computerMoves').innerHTML =`<strong>Computer Move:</strong> ${compMove}`;
}
//compares playerMove and compMove
function compare()
{
    if (playerMove === compMove)
        {
            display();
            result = 'tie';
            document.querySelector('.victory').innerHTML = '<strong>Tie</strong>';
        }
    else if (playerMove === 'Rock')
        {
            if(compMove === 'Paper')
                {
                    display();
                    result = 'lose';
                    document.querySelector('.victory').innerHTML = '<strong>You lose</strong>';
                }
            else if (compMove == 'Scissors')
                {
                    display();
                    result = 'win';
                    document.querySelector('.victory').innerHTML = '<strong>You win</strong>';
                }
        }
    else if (playerMove == 'Paper')
        {
            if(compMove === 'Rock')
                {
                    display();
                    result = 'win';
                    document.querySelector('.victory').innerHTML = '<strong>You win</strong>';
                }
            else if (compMove == 'Scissors')
                {
                    display();
                    result = 'lose';
                    document.querySelector('.victory').innerHTML = '<strong>You lose</strong>';
                }
        }
    else
    {
        if(compMove === 'Rock')
            {
                display();
                result = 'lose';
                document.querySelector('.victory').innerHTML = '<strong>You lose</strong>';
            }
        else if (compMove == 'Paper')
            {
                display();
                result = 'win';
                document.querySelector('.victory').innerHTML = '<strong>You win</strong>';
            }
    }
}
//updates score
function scoreUpdate()
{
    if(result === 'win')
        {
            score.wins++;
        }
    else if (result === 'lose')
        {
            score.losses++;
        }
    else{score.ties++;}
    document.querySelector('.score').innerHTML = `<strong>Wins:</strong> ${score.wins} <strong>Losses:</strong> ${score.losses} <strong>Ties:</strong> ${score.ties}`;
}
//decides computerMove
function compMovee()
{
    if (0 < compGuess && compGuess <= (1/3))
        {
            compMove = 'Rock';
            document.querySelector('.oppHand').innerHTML =`<img class="handOpp" src="imagess/handRock.png"></img>`;
        }
    else if (0.3 < compGuess && compGuess <= (2/3))
        {
            compMove= 'Paper';
            document.querySelector('.oppHand').innerHTML =`<img class="handOpp" src="imagess/handPaper.png"></img>`;
        }
    else 
    {
        compMove = 'Scissors'
        document.querySelector('.oppHand').innerHTML =`<img class="handOpp" src="imagess/handScissors.png"></img>`;
    }
}