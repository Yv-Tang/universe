// 声明 class Comment
const Comment = AV.Object.extend('Comment');
// 构建对象 comment
const comment = new Comment();

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
    var todays = 7;
    //起始时间
    const startDateQuery = new AV.Query('comment');
    startDateQuery.greaterThanOrEqualTo('createdAt', new Date());
    //结束时间
    const endDateQuery = new AV.Query('comment');
    endDateQuery.lessThan('createdAt', new Date - todays * 24 * 60 * 60 * 1000)
    //获取之间的内容
    const query = AV.Query.and(startDateQuery, endDateQuery);
    console.log(query[1]);
};

/**
 * 元素选择器
 * @param {string} Nid - ID名
 */
function $(Nid) {
    return document.getElementById(Nid);
}