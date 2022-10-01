window.onload = function () {

    var text = document.getElementById("text");

    var aim = "Wait for you.";

    var contentArr = aim.split(""); // 目标语句形成的数组[13]

    var contentWord = aim.split(" ");

    var content = ""; // 展示

    var IsTyping = true;

    setInterval(typing(), 150);

    function typing() {
        return function () {
            if (content.length < contentArr.length) { //输入

                content += contentArr[content.length];

                text.innerHTML = content + "_";
                //直到输入完成 content == "aim"
            }
            else if (content.length === contentArr.length) {

                text.innerHTML = content;

                clearInterval();

            }
            // console.log(content, content.length, "("+contentArr[content.length]+")", IsTyping);
        }
    };

}

function ToUrl(url) {
    switch (url) {
        case 'universe':
            window.open("universe.html", "_self");
            break;
        case 'Github':
            window.open('https://github.com/Ronguniverse/universe');
            break;
        case 'index':
            window.open('https://ronguniverse.github.io/universe/');
            break;
        case 'comment':
            document.getElementById("Cover").style.display = "none";
            break;
    }
}