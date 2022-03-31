
/*const data = null;*/

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let particleArray = [];
let adjustX = 5;
let adjustY = 0;
const mouse = {
    x: null,
    y: null,
    radius: 80
}

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
let Sea = [];

let seaData = 0;

let buttonList = ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016','2017','2018','2019']
for (let i = 0; i < buttonList.length; i++){
    var button = document.getElementById(buttonList[i]);
    button.addEventListener('click', function () {
        const addyear = new getData(buttonList[i]);
        addyear.get();
        

    })
}






class getData {
        constructor(year) {
            this.year = year;
            
        }

        get() {
            let url = 'https://climate-change75.p.rapidapi.com/seaLevel?startyear=' + this.year + '&endyear=' + this.year + '&select=seaLevelFromSatellitesInches';
            let xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            let year = this.year;
            xhr.onload = function () {
                if (xhr.status === 200) {
                    /*console.log(xhr.status);*/
                    var data = JSON.parse(xhr.responseText);
                    seaData = data[0].seaLevelFromSatellitesInches;
                    /*console.log(seaData);*/

                    /*const seas = new Seawater('rgb(11, 127, 171', seaData);*/


                    document.getElementById("Sealevel").innerHTML += `<br>Sealevel Worldwide in ${year} is ${seaData} inches.`;


                    

                    /*let drawS = new Seawater('rgb(11, '+ (255-seaData*20) + ', 171', seaData*seaData*2);
                    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
                    drawS.draw(ctx2);

                    console.log(drawS);*/
                    

                }else {
                    document.getElementById("Output").innerHTML = "There was an error";
                }
            }
            xhr.open("GET", url, true);
            xhr.setRequestHeader("X-RapidAPI-Host", "climate-change75.p.rapidapi.com");
            xhr.setRequestHeader("X-RapidAPI-Key", "crystalkey");
            xhr.send();
            

        }

        


}



function addSeawater() {
    
    Sea.push(new Seawater('rgb(11, ' + (160 - (seaData * 10)) + ', 171', ((seaData*seaData)/20)));

    console.log(seaData);
}


class Seawater {
    constructor(color, radius0) {
        this.radius = (Math.random() * 150) + 200;
        this.life = true;
        this.x = (Math.random() * window.innerWidth);
        this.y = (Math.random() * 20) + window.innerHeight;
        this.vy = ((Math.random() * 0.001) + 0) + radius0^2;
        this.vr = 0;
        this.vx = (Math.random() * 4) - 2;
        this.color = color;
        /*console.log(ySpeed);*/
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
        currentCanvas2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        currentCanvas2.fillStyle = this.color;
        currentCanvas2.fill();
       /* console.log(seaData);*/
    }

   
}


function handle(){
    for (let i = Sea.length - 1; i >= 0; i--) {
        Sea[i].update();
        if (!Sea[i].life) {
            Sea.splice(i, 1);
        }
    }

    if (Sea.length < (window.innerWidth / 4)) {
        addSeawater();
    }

    console.log();

}

function animateB() {
    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    handle();

    for (let i = Sea.length - 1; i >= 0; i--) {
        Sea[i].draw(ctx2);

    }

    requestAnimationFrame(animateB);
}


window.addEventListener('load', animateB());

window.addEventListener('resize', function () {
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
});



//Title Effect 

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

ctx.fillStyle = 'rgba(11, 127, 171)';
ctx.font = '16px Verdana';
ctx.fillText('ENGULFING', 0, 20);

const textCoordinates = ctx.getImageData(0, 0, 200, 200);

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
            if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                particleArray.push(new Particle(positionX * 10, positionY * 10));
            }
        }
    }


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
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
            }
        }
    }
}


