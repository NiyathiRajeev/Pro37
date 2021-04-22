class Result{
    constructor(){

    }
    display(){
        question.hide();

        textSize(35);
        text("RESULT!!! ", 180,50);

        Contestant.getAllContDetails();

        if(allContestants!== undefined){
            var yPos = 25;

            for(var cont in allContestants){
               
                    if(allContestants[cont].score ===100){
                        fill("green");
                    }
                    else{
                        fill("red");
                    }
                textSize(20);
                yPos += 100;
                text(allContestants[cont].name +" : "+ allContestants[cont].score,100,yPos);
            }
        }

        
    }
}