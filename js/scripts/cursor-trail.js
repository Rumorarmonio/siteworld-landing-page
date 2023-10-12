const canvas = document.getElementById('drawing-board');


const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.style.filter = "blur(30px)";
const particlesArray = [];
let hue = 200;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x: undefined,
    y: undefined,
}

// canvas.addEventListener('click', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     for (let i = 0; i < 9; i++) {
//         particlesArray.push(new Particle());
//     }
// });

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // for (let i = 0; i < 9; i++) {
        particlesArray.push(new Particle());
    // }
})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = 50;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 50%, 50%)';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > .8) {
            this.size -= .7;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);   // start at center point (0,0) of 100px 100px, start at 0 (far right), end at a full circle
        // ctx.filter = 'blur(5px)';
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    //ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = '#001036';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    if (hue > 190) {
        hue += 1;
    } else {
        hue -= 1;
    }
    requestAnimationFrame(animate);
}

animate();
