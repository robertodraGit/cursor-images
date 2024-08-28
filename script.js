var images = [];
for (var index = 0; index < 16; index++) {
    images.push("assets/".concat(index, ".png"));
}
var currentImageIndex = 0;
var lastX = 0;
var lastY = 0;
document.addEventListener('mousemove', function (event) {
    var x = event.clientX, y = event.clientY;
    if (Math.abs(x - lastX) > 50 || Math.abs(y - lastY) > 50) {
        lastX = x;
        lastY = y;
        var cursorImage_1 = document.createElement('img');
        cursorImage_1.src = images[currentImageIndex];
        cursorImage_1.classList.add('cursor-image');
        cursorImage_1.style.left = "".concat(x, "px");
        cursorImage_1.style.top = "".concat(y, "px");
        document.body.appendChild(cursorImage_1);
        setTimeout(function () {
            cursorImage_1.classList.add('fade-out');
            setTimeout(function () {
                cursorImage_1.remove();
            }, 500);
        }, 1000);
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
});
