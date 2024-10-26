const { Query, User } = AV;

AV.init({
    appId: "kSDqVFRjBHrwXqvwTXN8WM7b-gzGzoHsz",
    appKey: "mX6hrQ3f4nxt8mSp3B1pp3BO",
    serverURL: "https://ksdqvfrj.lc-cn-n1-shared.com",
});

/**
 * @param {String} eleName 
 * 返回一个指定的HTML元素
*/
function $(eleName) {
    var element = document.querySelector(eleName);
    if (!element) {
        console.error(`Element with selector ${eleName} not found`);
    }
    return element;
}

var score = 0; // 匹配度

function calculateMatch() {
    console.log("calculateMatch()开始");

    var name1 = $("#name1").value;
    var name2 = $("#name2").value;

    if (name1 == "" || name2 == "") {
        alert("请输入姓名！");
        score = 0;
    }
    else if (name1 == name2) {
        alert("不能与自己匹配！");
        score = 0; // 完全匹配
    }
    else {
        GetScore(name1, name2); // 调用GetScore()函数计算匹配度
    }
    // score = Math.floor(Math.random() * 101); // 随机生成0-100的数
    document.getElementById('score').innerText = score + "%"; // 显示匹配度
}

function GetScore(NameA, NameB) {
    const query = new AV.Query("FriendScore");
    query.equalTo("name1", NameA);
    query.equalTo("name2", NameB);
    query.first().then((object) => {
        if (object) {
            // 云端已存在数据，获取 score
            score = object.get("score"); // 假设您在对象中存储了 score
            console.log(`找到了已有数据,score: ${object}`);
            console.log(`取回成功object: ${object.toJSON()}`);
            $('#score').innerText = score + "%(某人已计算)"; // 显示匹配度

        } else {
            // 云端不存在数据，计算 score
            const newPair = new AV.Object("FriendScore");
            score = Math.floor(Math.random() * 101); // 随机生成0-100的数
            newPair.set("name1", NameA);
            newPair.set("name2", NameB);
            newPair.set("score", score);
            newPair.save().then((object) => {
                $('#score').innerText = score + "%"; // 显示匹配度
                console.log(`保存成功object: ${object.toJSON()}`);
            },
                (error) => { console.error(`保存失败error: ${error.message}`); }
            );
        }

        console.log(`calculateMatch()结果:${score}`);

        score = 0; // 匹配度清零
    },
        (error) => { console.error(`取回失败error: ${error.message}`); }
    );
}