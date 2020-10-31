class Strike extends Extra {
    constructor(x,y){
      super(x,y,50,50);
    
      this.trajectory=[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
      if (this.body.velocity.x > 10 && this.body.position.x > 200){
        var pos = [this.body.position.x, this.body.position.y];
        this.trajectory.push(pos);
      }
      
  
      for (var i=0;i < this.trajectory.length; i=i+1){
        image (this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);
      }
      }
  }
  