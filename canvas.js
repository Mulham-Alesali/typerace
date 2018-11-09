// JavaScript source code

               window.onload = function () {
				  console.log(":: hier hat alles angefangen");
                  var c = document.getElementById("canvas");
                  var ctx = c.getContext("2d");

                  var c2 = document.getElementById("resultCanvas");
                  var ctx2 = c2.getContext("2d");

                  img = document.getElementById("speedClockImage");
					console.log("2");
                  ctx.drawImage(img, 0, -7, c.width, c.height + 30);
console.log("3");
                   radius = canvas.height / 2;
				   console.log("2");
                   ctx.translate(radius, radius);
				   console.log("2");
                   ctx2.translate(radius, radius);
				   console.log("2");
                   radius = radius * 0.90
console.log("4");
                   draw(c,ctx,0);
				   console.log("5");
               }


function draw(c,ctx,cSpeed) {
    
    //ctx.clearRect(-100, -100, canvas.width, canvas.height);
    ctx.translate(-100, -100);
    
    ctx.drawImage(img, 0, -7, c.width, c.height + 30);

    radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90

    if (!(cSpeed < 80)) cSpeed = 80;
    drawClock(ctx,cSpeed);
    drawSpeedNumber(ctx,cSpeed);


}


function drawClock(ctx,cSpeed) {
    
    drawTime(ctx, radius, cSpeed);

}

function drawTime(ctx, radius, cSpeed) {

    
    cSpeed = cSpeed * (45 / 80);
    cSpeed -= 22;

    cSpeed = (cSpeed * Math.PI / 30);
    drawHand(ctx, cSpeed, radius * 0.9, radius * 0.03);
}

function drawHand(ctx, pos, length, width) {
    
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);

    ctx.beginPath();


    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    
}

function drawSpeedNumber(ctx,num) {

    ctx.font = radius * 0.18 + "px arial";

    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "red";
    ctx.translate(0, 0);
    ctx.fillText(num.toString() + " wpm", 0, 60);

}
