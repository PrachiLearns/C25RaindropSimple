var drop=[];
function setup() {
  frameRate(15);
  createCanvas(400, 400);
  
  for(var i=0;i<200;i++){
   drop.push(new Drop());}
}

function draw() {
  background("#87CEEB");
  for(var i=0;i<200;i++){
  drop[i].display();
  drop[i].fall();}
}