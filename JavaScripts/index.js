function Tab(TabName) {
    var elements = { "Log": "none", "Diary": "none", "Support": "none", "Issue": "none" };
    switch (TabName) {
        case "Log":
            elements.Log = "block";
            break;
        case "Diary":
            alert("你没有权限");
            break;
        case "Support":
            elements.Support = "block";
            break;
        case "Issue":
            elements.Issue = "block";
            break;
    }
    for (var key in elements) {
        if (elements.hasOwnProperty(key)) {
            document.getElementById(key).style.display = elements[key];
        }
    }
}

function dia() {
    var elements = document.querySelectorAll("#Log, #Diary, #Support, #Issue");
    elements.forEach(function (element) {
        element.style.display = "none";
    });
    document.getElementById("Diary").style.display = "block";
}

var debugging = true;
function Click() {
    if (!debugging) {
        alert('此界面禁止调试');

        window.event.returnValue = false;

    }

}

document.oncontextmenu = Click;

var element = new Image();
Object.defineProperty(element, 'id', { get: function () { window.location.href = "https://www.baidu.com" } });
console.log(element);