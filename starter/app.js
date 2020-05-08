var scores, roundscore, activeplayer, gameplaying;
init();

document.querySelector('.btn-roll').addEventListener('click' , function(){

if(gameplaying){
    //    random number
    var dice  = Math.floor(Math.random() * 6) + 1;
    //    display
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    //    update the round score if the number is not 1
    if (dice !== 1) {
        roundscore += dice;
        document.querySelector('#current-' + activeplayer).textContent = roundscore;
    } else {
    nextPlayer();
    }
        }

});

document.querySelector('.btn-hold').addEventListener('click' , function(){

    if(gameplaying){

    //add current score to 
    scores[activeplayer] += roundscore;

    // update the UI
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer]; 
    
    // winning the game
    if (scores[activeplayer] >= 100) {
    document.querySelector('#name-' + activeplayer).textContent = 'winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
    gameplaying = false;

    } else {    
    // changing the player
    nextPlayer();
    
    }
    }

});

function nextPlayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
scores = [0, 0];
roundscore = 0;
activeplayer = 0;
gameplaying = true;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player1';
document.getElementById('name-1').textContent = 'player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}