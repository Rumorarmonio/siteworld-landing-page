const canvas = document.querySelector('.intro-animation');

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.filter = "blur(70px)";

const particles = [];
const iterations = 1;
const initialParticleSize = 100;

let currentHue = 150;
const minHue = 150;
const maxHue = 310;
let hueIncrement = true

let scroll = 0;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

window.addEventListener('scroll', () => {
    scroll = document.documentElement.scrollTop;
})

const mouse = {
    x: undefined,
    y: undefined,
}

// if call addEventListener on a canvas element,
// it will not detect mouse movement on top of other elements
const container = document.querySelector('.page__container_upper');
container.addEventListener('mousemove', event => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < iterations; i++) {
        particles.push(new Particle());
    }
})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y + scroll;

        // uncomment to generate particles randomly everywhere
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;

        this.size = initialParticleSize;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${currentHue}, 50%, 50%)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > .1) {
            this.size -= 1;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // start at center point (0, 0) of 100px 100px, start at 0 (far right), end at a full circle
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= .3) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#001036';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // check if hue value is in range between min and max values
    if (hueIncrement) {
        currentHue += 1;

        if (currentHue === maxHue) {
            hueIncrement = false;
        }
    } else {
        currentHue -= 1;

        if (currentHue === minHue) {
            hueIncrement = true;
        }
    }

    // uncomment to let particles take all RGB colors
    // currentHue += 1;

    handleParticles();

    requestAnimationFrame(animate);

    // uncomment to lower fps
    // setTimeout(() => {
    //     requestAnimationFrame(animate);
    // }, 1000 / 30);
}

animate();

// setTimeout(animate, 3000)
