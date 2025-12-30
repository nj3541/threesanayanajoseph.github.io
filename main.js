/* SCROLL REVEAL */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

/* TURTLE STYLE CANVAS */
const canvas = document.getElementById("turtleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 400;

let x = canvas.width / 2;
let y = canvas.height / 2;
let angle = 0;

ctx.strokeStyle = "#00f0ff";
ctx.lineWidth = 2;
ctx.shadowBlur = 10;
ctx.shadowColor = "#00f0ff";

function turtleDraw() {
    ctx.beginPath();
    ctx.moveTo(x, y);

    x += Math.cos(angle) * 2;
    y += Math.sin(angle) * 2;
    angle += 0.02;

    ctx.lineTo(x, y);
    ctx.stroke();

    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
        x = canvas.width / 2;
        y = canvas.height / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    requestAnimationFrame(turtleDraw);
}

turtleDraw();
