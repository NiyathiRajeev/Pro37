class Question{
  constructor(){
      this.title = createElement("h1");
      this.input = createInput("Name");
      this.greeting = createElement("h3");

     this.question = createElement("h3");
     this.option1 = createElement("h4");
     this.option2 = createElement("h4");
     this.option3 = createElement("h4");
     this.option4 = createElement("h4");

     this.answer = createInput("Enter a/b/c/d");
     this.button =createButton("SUBMIT");
  }

  hide(){
      this.input.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.answer.hide();
      this.button.hide();
      this.greeting.hide();
  }

  displayQuestion(){

      this.title.html("MY QUIZ");
      this.title.position(550,25);
      
      this.input.position(420,150);
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
      this.question.html("Which country has the most population in the world?");
      this.option1.html("a) India");
      this.option2.html("b) Russia");
      this.option3.html("c) USA");
      this.option4.html("d) China");

      this.question.position(420,170);
      this.option1.position(425,200);
      this.option2.position(425,230);
      this.option3.position(425,260);
      this.option4.position(425,290);
 
      this.answer.position(425,350);
      this.button.position(600,350);


      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

          this.question.hide();
          this.option1.hide();
          this.option2.hide();
          this.option3.hide();
          this.option4.hide();

          this.answer.hide();
          this.button.hide();


          contestant.name =  this.input.value();
          contCount ++;
          contestant.index = contCount;
          contestant.update();
          contestant.updateCount(contCount);
          if(this.answer.value() === 'd'){
              contestant.updateScore();
          }

          this.greeting.html("Hello "+ contestant.name + "\nResults are being generated!!!");
          this.greeting.position(420,150);
 
      })

  }
}