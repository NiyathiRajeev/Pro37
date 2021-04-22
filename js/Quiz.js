class Quiz{
  constructor(){

  }

  getState(){
      var quizStateRef = database.ref("gameState");
      quizStateRef.on("value", function(data){
          quizState = data.val();
      })
  }

  updateState(state){
      var quizStateRef = database.ref("/");
      quizStateRef.update({
          quizState : state
      })
  }

  start(){
      if(quizState === 0){
          contestant = new Contestant();
          contestant.getCount();
          question = new Question();
          question.displayQuestion();
      }
      
  }

  displayResult(){
      result = new Result();
      result.display();
  }

}