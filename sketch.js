var gameState = 0;
var contCount=0, database ;
var quiz,result,contestant,allContestants,question;




 


function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contCount === 3){
    quiz.updateState(1);

  }
  if(gameState === 1){
    quiz.displayResult();

  }
  
drawSprites();
}
