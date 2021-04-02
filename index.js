let speed = 0;
let rpm = 0;
let gear = 0;
let fuel = 0;
let drawFuel = false;
let heightVector = 1;
let widthVector = 1.05;
const steps = 100;
const speedoColor = "white";
const lineColors = /*"rgba(0, 0, 0, 0)";*/ "black";

let inter = setInterval(update, 10);

function update() {
    const canvas = document.getElementById('speedometer');
    const ctx = canvas.getContext('2d');
    const width = widthVector*canvas.width;
    const height = heightVector*canvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, widthVector*canvas.width, heightVector*canvas.height);
    //rpm
    ctx.beginPath();
    ctx.lineWidth = 10;
    var grd = ctx.createLinearGradient(widthVector*canvas.width/8, heightVector*canvas.height/2, 9.03*widthVector*canvas.width/10, heightVector*canvas.height/6);
    for(var i = 0; i<=steps; i++) {
        if(i < rpm*steps) {
            if(i < steps*0.8) {
                grd.addColorStop(i/steps, "rgba(0, 255, 0, 1)");
            } else {
                grd.addColorStop(i/steps, "rgba(255, 0, 0, 1)");
            }
        } else {
            grd.addColorStop(i/steps, "rgba(0, 0, 0, 0)");
        }
    }
    ctx.strokeStyle = lineColors;
    ctx.moveTo(widthVector*canvas.width/8, heightVector*canvas.height/2);
    ctx.bezierCurveTo(widthVector*canvas.width/4, heightVector*canvas.height/6, widthVector*canvas.width/4, heightVector*canvas.height/6, 9*widthVector*canvas.width/10, heightVector*canvas.height/6);
    ctx.lineTo(9*widthVector*canvas.width/10, 1.8*heightVector*canvas.height/6);
    ctx.bezierCurveTo(1.1*widthVector*canvas.width/4, 1.8*heightVector*canvas.height/6, 1.1*widthVector*canvas.width/4, 1.8*heightVector*canvas.height/6, 1.45*widthVector*canvas.width/8, 1.15*heightVector*canvas.height/2);
    ctx.lineTo(widthVector*canvas.width/8, heightVector*canvas.height/2);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.textAlign = "left";
    ctx.strokeStyle = "black";
    ctx.strokeText("0", 2.55*widthVector*canvas.width/16, 1.05*heightVector*canvas.height/2);
    ctx.strokeText("1", 3.1*widthVector*canvas.width/16, 0.87*heightVector*canvas.height/2);
    ctx.strokeText("2", 3.9*widthVector*canvas.width/16, 0.71*heightVector*canvas.height/2);
    ctx.strokeText("3", 5.2*widthVector*canvas.width/16, 0.6*heightVector*canvas.height/2);
    ctx.strokeText("4", 6.4*widthVector*canvas.width/16, 0.56*heightVector*canvas.height/2);
    ctx.strokeText("5", 7.7*widthVector*canvas.width/16, 0.55*heightVector*canvas.height/2);
    ctx.strokeText("6", 9*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.strokeText("7", 10.3*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.strokeText("8", 11.5*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.strokeText("9", 12.7*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.strokeText("10", 13.5*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.font = "100px Arial";
    ctx.fillStyle = speedoColor;
    ctx.fillText("0", 2.55*widthVector*canvas.width/16, 1.05*heightVector*canvas.height/2);
    ctx.fillText("1", 3.1*widthVector*canvas.width/16, 0.87*heightVector*canvas.height/2);
    ctx.fillText("2", 3.9*widthVector*canvas.width/16, 0.71*heightVector*canvas.height/2);
    ctx.fillText("3", 5.2*widthVector*canvas.width/16, 0.6*heightVector*canvas.height/2);
    ctx.fillText("4", 6.4*widthVector*canvas.width/16, 0.56*heightVector*canvas.height/2);
    ctx.fillText("5", 7.7*widthVector*canvas.width/16, 0.55*heightVector*canvas.height/2);
    ctx.fillText("6", 9*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.fillText("7", 10.3*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.fillText("8", 11.5*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.fillText("9", 12.7*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    ctx.fillText("10", 13.5*widthVector*canvas.width/16, 0.54*heightVector*canvas.height/2);
    //speed
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.font = "250px Arial";
    ctx.textAlign = "right";
    ctx.strokeText(speed, 6*widthVector*canvas.width/8, heightVector*canvas.height/2);
    ctx.font = "100px Arial";
    ctx.strokeText("km/h", 7*widthVector*canvas.width/8, heightVector*canvas.height/2);
    ctx.fillStyle = speedoColor;
    ctx.font = "250px Arial";
    ctx.textAlign = "right";
    ctx.fillText(speed, 6*widthVector*canvas.width/8, heightVector*canvas.height/2);
    ctx.font = "100px Arial";
    ctx.fillText("km/h", 7*widthVector*canvas.width/8, heightVector*canvas.height/2);
    //fuel
    if(drawFuel) {
        var grdFuel = ctx.createLinearGradient(0.25*widthVector*canvas.width/8, 0.75*heightVector*canvas.height/2, 3.03*widthVector*canvas.width/10, 0.1*heightVector*canvas.height/6);
        for(var i = 0; i<=steps; i++) {
            if(i < fuel*steps) {
                if(fuel <= 0.2) {
                    grdFuel.addColorStop(i/steps, "rgba(255, 0, 0, 1)");
                } else {
                    grdFuel.addColorStop(i/steps, "rgba(255, 255, 255, 1)");
                }
            } else {
                grdFuel.addColorStop(i/steps, "rgba(0, 0, 0, 0)");
            }
        }
        ctx.beginPath();
        ctx.strokeStyle = lineColors;
        ctx.moveTo(0.25*widthVector*canvas.width/8, 0.75*heightVector*canvas.height/2);
        ctx.bezierCurveTo(0.7*widthVector*canvas.width/4, 0.5*heightVector*canvas.height/6, 0.7*widthVector*canvas.width/4, 0.5*heightVector*canvas.height/6, 3*widthVector*canvas.width/10, 0.1*heightVector*canvas.height/6);
        ctx.lineTo(3.2*widthVector*canvas.width/10, 0.8*heightVector*canvas.height/6);
        ctx.bezierCurveTo(0.8*widthVector*canvas.width/4, 1.2*heightVector*canvas.height/6, 0.8*widthVector*canvas.width/4, 1.2*heightVector*canvas.height/6, 0.7*widthVector*canvas.width/8, 0.9*heightVector*canvas.height/2);
        ctx.lineTo(0.25*widthVector*canvas.width/8, 0.75*heightVector*canvas.height/2);
        ctx.stroke();
        ctx.fillStyle = grdFuel;
        ctx.fill();
        ctx.font = "100px Arial";
        ctx.strokeStyle = "black";
        ctx.strokeText("E", 0.5*widthVector*canvas.width/8, 1*heightVector*canvas.height/2);
        ctx.strokeText("F", 2.9*widthVector*canvas.width/8, 0.2*heightVector*canvas.height/2);
        ctx.strokeText(Math.floor(fuel*100) + "%", 1*widthVector*canvas.width/8, 1.3*heightVector*canvas.height/2);
        ctx.fillStyle = speedoColor;
        ctx.fillText("E", 0.5*widthVector*canvas.width/8, 1*heightVector*canvas.height/2);
        ctx.fillText("F", 2.9*widthVector*canvas.width/8, 0.2*heightVector*canvas.height/2);
        ctx.fillText(Math.floor(fuel*100) + "%", 1*widthVector*canvas.width/8, 1.3*heightVector*canvas.height/2);
    }
    //icons
}

function setVars(s, r, g){
    speed = s;
    rpm = r;
    gear = g;
}

function showPetrol(){
    drawFuel = true;
}

function setPetrolLevel(val){
    fuel = val;
}

function setPetrolLevelHard(val){
    fuel = val;
}

function showHUD(){
    $('.controlsBlock').css("display", "block");
}

function setSeatBelt(val){
    let col = $(".beltCol");
    if(val){
        col.css("background-image", "url(img/seatbeltOn.png)");
    }
    else{
        col.css("background-image", "url(img/seatbeltOff.png)");
    }
}

function setParkingBrake(val){
    let col = $(".parkingCol");
    if(val){
        col.css("background-image", "url(img/parkingOn.png)");
    }
    else{
        col.css("background-image", "url(img/parkingOff.png)");
    }
}

function setLocked(val){
    let col = $(".lockCol");
    if(val){
        col.css("background-image", "url(img/lockOn.png)");
    }
    else{
        col.css("background-image", "url(img/lockOff.png)");
    }
}