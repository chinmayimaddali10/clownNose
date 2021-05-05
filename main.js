 noseY = 0
 noseX = 0

 function preload() {
     clownNose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
 }

 function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();
     posenet = ml5.poseNet(video, modeloaded)
     posenet.on('pose', gotPoses)

 }

 function gotPoses(results) {
     if (results.length > 0) {
         console.log(results)
         noseX = results[0].pose.nose.x - 10;
         noseY = results[0].pose.nose.y - 10;
         console.log("noseX=" + noseX);
         console.log("noseY=" + noseY);
     }

 }

 function modeloaded() {
     console.log("posenet worked");
 }

 function draw() {
     image(video, 0, 0, 300, 300);
     fill(255, 0, 0);
     stroke(0, 255, 0);
     //circle(noseX, noseY, 20);
     image(clownNose, noseX, noseY, 30, 30);
 }

 function takeSnap() {
     save("face.png");
 }