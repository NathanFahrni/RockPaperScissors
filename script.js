var choices = ["paper", "rock", "scissors"];
var random = Math.floor(Math.random() * 3);
var aiCoice = choices[i];
var UserPoints = 0;
var aiPoints = 0;
function score(){
	var score_container = document.getElementById("score").innerHTML = UserPoints + " - " + aiPoints;
}
setInterval(score, 50);
function convert(choice){ //this function shows the hand of you and the AI
	if(choice === "paper") return '<i class="far fa-hand-paper sizing"></i>';
	if(choice === "rock") return '<i class="far fa-hand-rock sizing"></i>';
	return '<i class="far fa-hand-scissors sizing"></i>'
}

// this function makes the AI choice, checks who won and it calles one of the three endscreens: draw, win and lose
function game(UserChoice){ 
	var box = document.getElementById("game-container");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("YourChoice");
	userDiv.innerHTML = convert(UserChoice);
	var aiDiv = document.getElementById("AiChoice");
	aioDiv.innerHTML = convert(aiChoice);
	if(UserChoice === "paper" && aiChoice === "rock" || UserChoice === "rock" && aiChoice === "scissors" || UserChoice === "scissors" && aiChoice === "paper"){
		win(UserChoice);
	}
	else if(UserChoice === aiChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}
	function continuGame(){
		random = Math.floor(Math.random() * 3);
		aiChoice = choices[random];
		box.style.display = "none";
	}
	setTimeout(continuGame, 3500);
}

//this function is the win function it displays a diffrent sentence and it gives you one point
function win(btn){
	UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var btn = document.getElementById(btn);
    btn.classList.remove("btn-choice");
    btn.classList.add("green");
    setTimeout(() => {
    	btn.classList.add("btn-choice");
        btn.classList.remove("green");
    }, 3500);// the timeout can be set diffrently for diffrent speeds !!YOU JUST NEED TO CHANGE THE TIMEOUT AT EVERY GAMEEND FUNCTION!!
}

//this function is the draw function it displays a diffrent sentence and it gives no points
function draw(btn){
	document.getElementById("who").innerHTML = "It's a Draw.";
	var btn = document.getElementById(btn);
    btn.classList.remove("btn-choice");
    btn.classList.add("gray");
    setTimeout(() => {
    	btn.classList.add("btn-choice");
        btn.classList.remove("gray");
    }, 3500);// the timeout can be set diffrently for diffrent speeds !!YOU JUST NEED TO CHANGE THE TIMEOUT AT EVERY GAMEEND FUNCTION!!
}

//this function is the lose function itdisplays a diffrent sentence and it gives the AI one point
function lose(btn){
	ComPoints++;
	document.getElementById("who").innerHTML = "You lose!";
	var btn = document.getElementById(btn);
    btn.classList.remove("btn-choice");
    btn.classList.add("red");
    setTimeout(() => {
    	btn.classList.add("btn-choice");
        btn.classList.remove("red");
    }, 3500); // the timeout can be set diffrently for diffrent speeds !!YOU JUST NEED TO CHANGE THE TIMEOUT AT EVERY GAMEEND FUNCTION!!
}