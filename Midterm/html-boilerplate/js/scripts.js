


const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

const canvas2bg = document.getElementById("canvas2bg");
const ctx2bg = canvas2bg.getContext('2d');
canvas2bg.width = window.innerWidth;
canvas2bg.height = window.innerHeight;



let Bubbles = [];
let bgBubbles = [];

function addBubble() {
    Bubbles.push(new Bubble('rgb(11, 127, 171'));
}
function addbgBubble() {
    bgBubbles.push(new Bubble('rgb(255,255,255', 2.5));
}

class Bubble {
    constructor(color, ySpeed) {
        /*this.a = 0;
        this.phase = 0;*/
        this.radius = /*ySpeed/*/(Math.random() * 150) + 200;
        this.life = true;
        this.x = (Math.random() * window.innerWidth); ;
        this.y = (Math.random() * 20) + window.innerHeight ;
        this.ySpeed = 6;
        this.vy = ((Math.random() * 0.001) + 0) + ySpeed^2;
        this.vr = 0;
        this.vx = (Math.random() * 4) - 2;
        this.color = color;
        
    }

    update() {
        this.vy += 0.00001;
        this.vr += 0.05;
        this.y -= this.vy;
        this.x += this.vx;
         if (this.radius > 1) {
            this.radius -= this.vr;
        }
        if (this.radius <= 1) {
            this.life = false;
        }
    }

    draw(currentCanvas2) {
        
     
            currentCanvas2.beginPath();
            currentCanvas2.arc(this.x/*window.innerWidth / 2*/, this.y/*window.innerHeight / 2*/, this.radius, 0, 2 * Math.PI);
            currentCanvas2.fillStyle = this.color;
            currentCanvas2.fill();
            /*console.log(this.a);*/
        }
        
}


/*let drawB = new Bubble('rgb(255,255,255', 68*2);
ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
drawB.draw(ctx2);*/
function handleBubbles() {
    for (let i = Bubbles.length - 1; i >= 0; i--) {
        Bubbles[i].update();
        if (!Bubbles[i].life) {
            Bubbles.splice(i, 1);
        }
    }
    for (let i = bgBubbles.length - 1; i >= 0; i--) {
        bgBubbles[i].update();
        if (!bgBubbles[i].life) {
            bgBubbles.splice(i, 1);
        }
    }
    if (Bubbles.length < (window.innerWidth / 4)) {
        addBubble();
    }
    if (bgBubbles.length < (window.innerWidth / 12)) {
        addbgBubble();
    }
}

function animateB() {
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx2bg.clearRect(0, 0, canvas.width, canvas.height);

    handleBubbles();

    for (let i = bgBubbles.length - 1; i >= 0; i--) {
        bgBubbles[i].draw(ctx2bg);
    }
    for (let i = Bubbles.length - 1; i >= 0; i--) {
        Bubbles[i].draw(ctx2);

    }

    requestAnimationFrame(animateB);
}

window.addEventListener('load', animateB);

window.addEventListener('resize', function () {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    canvas2bg.width = window.innerWidth;
    canvas2bg.height = window.innerHeight;
    
});

/*setInterval(function () {
    console.log(Bubbles.length)
},1000);*/




const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 20;
let adjustY = 0;
const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    /*mouse.radius = 150;*/
    /*console.log(mouse.x, mouse.y);*/
});




ctx.fillStyle = 'rgba(11, 127, 171)';
ctx.font = '10px Verdana';
ctx.fillText('TIDE', 0, 30);

const textCoordinates = ctx.getImageData(0, 0, 100, 100);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 50;
    }

    draw() {
        ctx.fillStyle = 'rgba(11, 127, 171)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 10;
            }
        }
    }
}


function init() {
    particleArray = [];
    for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
            if (textCoordinates.data[(y*4*textCoordinates.width)+(x * 4) + 3] > 128) {
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                particleArray.push(new Particle(positionX*10, positionY*10));
            }
        }
    }

    /*for (let i = 0; i < 500; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particleArray.push(new Particle(x, y));
    }*/

    /*particleArray.push(new Particle(50, 50));*/
    
}

init();
console.log(particleArray);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
    }
    connect();
    requestAnimationFrame(animate);
}

animate();

function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
            let dx = particleArray[a].x - particleArray[b].x;
            let dy = particleArray[a].y - particleArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 30) {
                opacityValue = 1 - (distance / 30);
                ctx.strokeStyle = 'rgba(11, 127, 171,' + opacityValue + ')';
                /*ctx.strokeStyle = 'blue';*/
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
            }
        }
    }
}