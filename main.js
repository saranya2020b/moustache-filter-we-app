noseX=0;
noseY=0;

function preload(){
    moustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
       noseX=results[0].pose.nose.x-25;
        noseY=results[0].pose.nose.y+10;
       // console.log("left eye x= "+results[0].pose.leftEye.x);
       // console.log("right eye y= "+results[0].pose.rightEye.y);


    } 

}

function draw(){
    image(video,0,0,300,300);

//fill(255,0,0);
//stroke(0,0,255);
//circle(noseX,noseY,20);
image(moustache,noseX,noseY,60,40);
}

function take_snapshot(){
    save("myImage.png");
}