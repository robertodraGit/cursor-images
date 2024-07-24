const images: string[] = [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png',
    'assets/5.png',
    'assets/6.png',
];

let currentImageIndex = 0;
let lastX = 0;
let lastY = 0;

document.addEventListener('mousemove', (event) => {
    const { clientX: x, clientY: y } = event;

    if (Math.abs(x - lastX) > 50 || Math.abs(y - lastY) > 50) {
        lastX = x;
        lastY = y;

        const cursorImage = document.createElement('img');
        cursorImage.src = images[currentImageIndex];
        cursorImage.classList.add('cursor-image');
        cursorImage.style.left = `${x}px`;
        cursorImage.style.top = `${y}px`;
        document.body.appendChild(cursorImage);

        setTimeout(() => {
            cursorImage.classList.add('fade-out');
            setTimeout(() => {
                cursorImage.remove();
            }, 500); 
        }, 1000); 

        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
});