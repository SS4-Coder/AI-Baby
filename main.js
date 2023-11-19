img="";
status ="";
objects=[];
function preload(){
alarm=loadSound("random_alarm.mp3");
}
function setup()
{
canvas = createCanvas(380,380);
canvas.center();

video=createCapture(VIDEO);
video.size(380,380);
video.hide();
}
function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
console.log("Model Loaded!")
status = true;
}
function draw(){
image(video,0,0,380,380);
    for(i=0;i<objects.length;i++)
    if(result == i){
document.getElementById("status").innerHTML="Baby Detected";
   alarm.stop();
}
document.getElementById("baby not detected").innerHTML="Baby Detected";
alarm.play();
}
