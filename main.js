function preload(){

}

function setup(){
    Canvas =createCanvas(500, 600);
  Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tintcolor = "";
}

function draw(){
  background("#CBC3E3");
    image(video, 50, 60, 300, 400);
    
    

    fill("red");
    stroke("white");
    rect(300, 400, 90, 100);


    noFill();
  stroke("white");
  circle(mouseX, mouseY, 150);

fill("pink");
stroke("Black");
  ellipse(40,40, 100, 55);
  
}


function take_snapshot(){
save("mypicture.png");
}