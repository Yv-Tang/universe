var clickCount = 0;
var message = document.getElementById('message');

document.getElementById('noButton').addEventListener('click', function () {
    clickCount++;
    var yesButton = document.getElementById('yesButton');
    var currentWidth = parseFloat(window.getComputedStyle(yesButton).width) || 100;
    var currentHeight = parseFloat(window.getComputedStyle(yesButton).height) || 40;
    var currentBorderRadius = parseFloat(window.getComputedStyle(yesButton).borderRadius) || 4;

    yesButton.style.width = (currentWidth * 1.2) + 'px';
    yesButton.style.height = (currentHeight * 1.2) + 'px';
    yesButton.style.borderRadius = (currentBorderRadius * 1.2) + 'px'; // 修正了这里的逻辑错误

    if (clickCount == 3) {
        message.textContent = '真的不给吗';
        document.getElementById('logo').src = 'res/2.jpg';
    }

    if (clickCount == 5) {
        message.textContent = '好吧，那就这样吧。';
        document.getElementById('logo').src = 'res/3.jpg';
    }

    if (clickCount == 7) {
        message.textContent = '不给就不给';
        document.getElementById('logo').src = 'res/4.gif';
    }

    if (clickCount == 12) {
        message.textContent = '你会改主意的对吧';
        document.getElementById('logo').src = 'res/5.gif';
    }

    if (clickCount == 15) {
        message.textContent = '你别无选择';
        document.getElementById('logo').src = 'res/6.jpg';
        // 销毁No元素
        document.getElementById('noButton').remove();
        yesButton.style.width = '100px';
        yesButton.style.height = '40px';
        yesButton.style.borderRadius = '4px';
    }
});

document.getElementById('yesButton').addEventListener('click', function () {
    var random = Math.random();
    if (clickCount < 15) {
        document.getElementById('logo').src =
            random < 0.33 ? 'res/好结局1.webp' :
                random < 0.66 ? 'res/好结局2.webp' : 'res/好结局3.jpg';
        document.getElementById('yesButton').remove();
        document.getElementById('noButton').remove();
        document.getElementById('message').remove();
    }
    if (clickCount >= 15) {
        document.getElementById('logo').src =
            random < 0.5 ?
                random < 0.25 ? 'res/坏结局1.jpg' : 'res/坏结局3.jpg' :
                random < 0.75 ? 'res/坏结局4.jpg' : 'res/火车结局.webp';
        document.getElementById('yesButton').remove();
        document.getElementById('noButton').remove();
        document.getElementById('message').remove();
    }
});