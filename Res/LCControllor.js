// 初始化实例对象comment
const comment = new AV.Object('Comment');
// 初始化实例query
const query = new AV.Query('Comment');

/**
 * 发布内容
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
 * @param {number} todays - 查询时间
 */
function getComments(todays) {
    var days = todays;
    query.descending('createdAt'); // 较晚发布的在上
    query.find().then((res) => {
        console.log(res[0].toJSON());
        $(1).innerText = res[0].get('content');
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