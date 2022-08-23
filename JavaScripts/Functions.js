//所有函数

function login() {
    var name = document.getElementById("username").value;
    var key = document.getElementById("password").value;

    if(name == "admin" && key == "admin1116"
        ||name == "小可爱协会会长" && key == "1116") {
        alert("登录成功");
        window.open("universe.html")
    }
    else {
        alert("真是个小笨蛋,账号密码都不知道,还是让你看看吧")
        window.open("universe.html")
    }

    //console.log("执行一次login()");
}