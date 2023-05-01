// 初始化实例对象comment
const comment = new AV.Object('Comment');
// 初始化实例query
const query = new AV.Query('Comment');





/**
 * 发布issue
 */
function issue() {
    // 绑定变量
    var uName = $('name').value;//暂定
    var uContent = $('content').value;

    // 为comment对象属性进行赋值
    comment.set('name', uName);
    comment.set('content', uContent);

    // 将对象保存到云端
    comment.save().then((Comment) => {
        // 成功保存之后，执行其他逻辑
        console.log(`objectId:${Comment.id}\n保存成功`);
    }, (error) => {
        // 异常处理
        console.error('objectId:${Comment.id}\n异常')
    });
}


/**
 * @param {number} todays - 截止时间
 */
function getComments(todays) {
    var days = todays;
    query.descending('createdAt'); // 较晚发布的在上
    query.find().then((res) => {
        //元素操作
        for (var key in res) {
            // 数据储存
            var portrait = `//q.qlogo.cn/g?b=qq&nk=${res[key].get('name')}&s=100`;
            var Qname;
            qNameGeter(res[key].get('name'));
            var time = `${res[key].getcreatedAt}`;
            var content = `${res[key].get('content')}`
            // 操作
            var divElement = document.createElement('div');
            divElement.innerHTML = `
            <div id=${key}>
                <div class="head-box">
                    <img id="_portrait" src=${portrait}>
                    <span id="_name">${Qname}<br></span>
                    <span id="_time">${time}</span>
                </div>
                <div class="body-box">
                    <div id="_content">${content}</div>
                </div>
            </div>
            `;
            $('-1').appendChild(divElement);
        }

        //调试
        console.warn('***********************\n res内容')
        console.table(res.map(item => item.toJSON()));

    });
};





//===========================================================================

/**
 * 元素选择器
 * @param {string} Nid - ID名
*/
function $(Nid) {
    return document.getElementById(Nid);
}

/**
 * 获取QQ昵称
 * @param {any} Qnumber - QQ账号
 */
function qNameGeter(Qnumber) {
    // 动态创建 script 标签并指定 URL 和回调函数名称
    var QnameGeter = document.createElement('script');
    QnameGeter.src = `https://r.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?uins=${Qnumber}`;
    // 将 script 标签添加到页面中以触发请求
    document.body.appendChild(QnameGeter);
    return portraitCallBack();
}
// 定义回调函数
function portraitCallBack(data,Qnumber) {
    console.log('Data:');
    console.table(data);
    Qname = data[6];
    console.log('Name');
    console.log(Qname);
    return data;
}


// // 使用字符串模板语法创建一个包含变量的字符串
// const name = 'Alice';
// const message = `Hello, ${name}!`;
// console.log(message); // 输出 "Hello, Alice!"

// // 使用ES6模板字面量创建一个包含变量的HTML元素
// const age = 25;
// const divElement = document.createElement('div');
// divElement.innerHTML = `
//   <p>Name: ${name}</p>
//   <p>Age: ${age}</p>
// `;
// document.body.appendChild(divElement);
