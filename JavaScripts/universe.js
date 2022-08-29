window.onload = function () {

    var text = document.getElementById("text");

    var contentArr = "Wait for you.".split("");

    var content = "";

    var index = 0;

    var ID = setInterval(typing(), 100);

    function typing() {
        return function () {

            content += contentArr[index];

            text.innerHTML = content + "_";

            index++;

            if (contentArr[index] == " ") {
            }

            if (index === contentArr.length) {

                text.innerHTML = content;

                clearInterval(ID);

                console.log("结束了");

            }
            // console.log(content, index);
        }
    };

}

function ToUrl(url) {
    switch (url) {
        case 'universe':
            window.open("universe.html","_self");
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