const icons = document.querySelectorAll(".orbit-icon");

const radius = 200;

const speed = 0.01;

let angle = 0;

function animateOrbit() {

    angle += speed;

    icons.forEach((icon, index) => {

        const currentAngle = angle + index * ((Math.PI * 2) / icons.length);

        const x = Math.cos(currentAngle) * radius;

        const y = Math.sin(currentAngle) * radius;

        icon.style.left = `calc(50% + ${x}px - 30px)`;
        icon.style.top = `calc(50% + ${y}px - 30px)`;

    });

    requestAnimationFrame(animateOrbit);

}

animateOrbit();