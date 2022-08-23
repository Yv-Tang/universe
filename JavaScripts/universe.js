function Tab(TabName) {
    //获取对象
    var Log = document.getElementById("Log");
    var Diary = document.getElementById("Diary");
    var Support = document.getElementById("Support");

    //定义值
    var _log = "none";
    var _diary = "none";
    var _support = "none";
        //console.log("var",_log,_diary,_support)

    //传参
    switch (TabName) {
        case "Log": _log = "block";
        //console.log("way1",_log,_diary,_support);
            break;
        case "Diary": _diary = "block";
        //console.log("way2",_log,_diary,_support);
            break;
        case "Support": _support = "block";
        //console.log("way3",_log,_diary,_support);
            break;
    }

    //实现
    Log.style.display = _log;
    Diary.style.display = _diary;
    Support.style.display = _support;
        //console.log("swich",_log,_diary,_support)
}