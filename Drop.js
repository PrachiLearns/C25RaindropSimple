class Drop{

  
  constructor(){
  this.x=Math.round(random(0,width));
  this.y=Math.round(random(-10,-500));
  
  }

display(){
stroke("purple");
strokeWeight("4");
line(this.x,this.y,this.x,this.y+10);

}

  fall(){
  this.y=this.y+5;
    if(this.y>400){
    this.y=Math.round(random(-10,-500));
    }
  }


}





