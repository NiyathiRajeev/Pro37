class Contestant{
  constructor(){
      this.name = null;
      this.index = null;
      this.score = 0;
  }

  getCount(){
      var countRef = database.ref("contCount");
      countRef.on("value",function(data){
          contCount = data.val();
      })
  }

  updateCount(count){
      var countRef = database.ref("/")
      countRef.update({
          contCount : count
      })

  }

  update(){
      var contRef = database.ref("cont/cont"+this.index);
      contRef.update({
          name : this.name,
          score : this.score
      })
  }

  updateScore(){
      var contRef = database.ref("cont/cont"+this.index);
      contRef.update({
          score : 100
      })
  }

  static getAllContDetails(){
      var contRef = database.ref("cont");
      contRef.on("value",function(data){
          allContestants = data.val();
      })
  }
}