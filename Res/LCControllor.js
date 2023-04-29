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
        //元素
        for (var key in res) {
            var portrait = "//q.qlogo.cn/g?b=qq&nk=" + res[key].name + "&s=100"
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