var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let isdrawn = false, isdrawing = false;

var solutionPath = [
    { x: 234, y: 2 }, { x: 234, y: 10 }, { x: 170, y: 10 }, { x: 170, y: 42 },
    { x: 186, y: 42 }, { x: 186, y: 106 }, { x: 154, y: 106 }, { x: 154, y: 74 },
    { x: 138, y: 74 }, { x: 138, y: 106 }, { x: 106, y: 106 }, { x: 106, y: 122 },
    { x: 138, y: 122 }, { x: 138, y: 154 }, { x: 106, y: 154 }, { x: 106, y: 170 },
    { x: 122, y: 170 }, { x: 122, y: 186 }, { x: 154, y: 186 }, { x: 154, y: 154 },
    { x: 170, y: 154 }, { x: 170, y: 122 }, { x: 202, y: 122 }, { x: 202, y: 154 },
    { x: 218, y: 154 }, { x: 218, y: 170 }, { x: 202, y: 170 }, { x: 202, y: 186 },
    { x: 234, y: 186 }, { x: 234, y: 202 }, { x: 202, y: 202 }, { x: 202, y: 234 },
    { x: 186, y: 234 }, { x: 186, y: 250 }, { x: 170, y: 250 }, { x: 170, y: 234 },
    { x: 122, y: 234 }, { x: 122, y: 218 }, { x: 74, y: 218 }, { x: 74, y: 234 },
    { x: 90, y: 234 }, { x: 90, y: 250 }, { x: 58, y: 250 }, { x: 58, y: 266 },
    { x: 74, y: 266 }, { x: 74, y: 282 }, { x: 106, y: 282 }, { x: 106, y: 298 },
    { x: 122, y: 298 }, { x: 122, y: 314 }, { x: 138, y: 314 }, { x: 138, y: 298 },
    { x: 154, y: 298 }, { x: 154, y: 314 }, { x: 186, y: 314 }, { x: 186, y: 298 },
    { x: 202, y: 298 }, { x: 202, y: 314 }, { x: 218, y: 314 }, { x: 218, y: 330 },
    { x: 186, y: 330 }, { x: 186, y: 346 }, { x: 154, y: 346 }, { x: 154, y: 362 },
    { x: 138, y: 362 }, { x: 138, y: 346 }, { x: 122, y: 346 }, { x: 122, y: 410 },
    { x: 138, y: 410 }, { x: 138, y: 426 }, { x: 122, y: 426 }, { x: 122, y: 442 },
    { x: 106, y: 442 }, { x: 106, y: 458 }, { x: 122, y: 458 }, { x: 122, y: 474 },
    { x: 138, y: 474 }, { x: 138, y: 442 }, { x: 154, y: 442 }, { x: 154, y: 426 },
    { x: 186, y: 426 }, { x: 186, y: 378 }, { x: 202, y: 378 }, { x: 202, y: 346 },
    { x: 218, y: 346 }, { x: 218, y: 362 }, { x: 234, y: 362 }, { x: 234, y: 378 },
    { x: 218, y: 378 }, { x: 218, y: 394 }, { x: 234, y: 394 }, { x: 234, y: 410 },
    { x: 218, y: 410 }, { x: 218, y: 426 }, { x: 250, y: 426 }, { x: 250, y: 410 },
    { x: 298, y: 410 }, { x: 298, y: 426 }, { x: 266, y: 426 }, { x: 266, y: 442 },
    { x: 282, y: 442 }, { x: 282, y: 458 }, { x: 298, y: 458 }, { x: 298, y: 442 },
    { x: 314, y: 442 }, { x: 314, y: 410 }, { x: 346, y: 410 }, { x: 346, y: 426 },
    { x: 330, y: 426 }, { x: 330, y: 458 }, { x: 314, y: 458 }, { x: 314, y: 474 },
    { x: 266, y: 474 }, { x: 266, y: 458 }, { x: 250, y: 458 }, { x: 250, y: 482 },
];

var currentStep = 0; //na katerem delu poti je kvadratek.
var progress = 0; //koliko je napredoval od enega do drugega koraka
var speed = 0.1; // Povečana hitrost za bolj gladko animacijo
var rectSize = 6; // velikost kvadratka

var offset = -3; //popravek koordinat, da se poravna na sredino poti.

var solutionPath = solutionPath.map(point => ({  //se premakne bolj natacno po sredini
    x: point.x + offset,
    y: point.y + offset
}));

function animateSolution() {
    if (currentStep < solutionPath.length - 1) {
        let start = solutionPath[currentStep];
        let end = solutionPath[currentStep + 1];
        let x = start.x + (end.x - start.x) * progress;
        let y = start.y + (end.y - start.y) * progress;

        ctx.fillStyle = "#ff0000";
        ctx.strokeStyle = "#ff0000";
        ctx.lineWidth = 2;

        ctx.fillRect(x, y, rectSize, rectSize);
        ctx.strokeRect(x, y, rectSize, rectSize);

        progress += speed;

        if (progress >= 1) {
            progress = 0;
            currentStep++;
        }

        requestAnimationFrame(animateSolution);
    }
    else {
        ctx.closePath();
        isdrawn = true;
        isdrawing = false;
        currentStep=0;
        progress=0;
    }
}

function draw() {   //ce ni narisano - začne, če je narisano - začne brisat                        
    console.log(isdrawn + " isdrawing:" + isdrawing);

    if (!isdrawn && !isdrawing) {
        isdrawing = true;
        ctx.beginPath();
        animateSolution();
    }
    else if (isdrawn && !isdrawing) {
        console.log(currentStep);
        isdrawing = true;
        ctx.beginPath();
        deleteSolution();
    }
}

function deleteSolution() {
    if (currentStep < solutionPath.length - 1) {
        let start = solutionPath[currentStep];
        let end = solutionPath[currentStep + 1];
        let x = start.x + (end.x - start.x) * progress;
        let y = start.y + (end.y - start.y) * progress;

        ctx.fillStyle = "#aaaaaa";
        ctx.strokeStyle = "#aaaaaa";
        ctx.lineWidth = 2;

        ctx.clearRect(x - 1, y - 1, rectSize + 2, rectSize + 2); 

        progress += speed;

        if (progress >= 1) {
            progress = 0;
            currentStep++;
        }

        requestAnimationFrame(deleteSolution);
    }
    else {
        ctx.closePath();
        isdrawn = false;
        isdrawing = false;
        currentStep=0;
        progress=0;
    }
}

