/**
 * 查询 query
 */
function querys_1(get) {
    // 实例化Query
    const query = new AV.Query('Todo');
    query.get('582570f38ac247004f39c24b').then((todo) => {
        // todo 就是 objectId 为 582570f38ac247004f39c24b 的 Todo 实例
        const title = todo.get('title');
        const priority = todo.get('priority');

        // 获取内置属性
        const objectId = todo.id;
        const updatedAt = todo.updatedAt;
        const createdAt = todo.createdAt;

        // 完整获取
        console.log(todo.toJSON());
    });
}

function querys_2(find) {
    switch (0) {
        case 1:
            query.equalTo('lastName', 'Smith');
            break;
        case 2:
            query.notEqualTo('firstName', 'Jack');
            break;
        case 3:
            // 可同时设置
            query.lessThan('age', 18); // 限制 age < 18
            query.lessThanOrEqualTo('age', 18); // 限制 age <= 18
            query.greaterThan('age', 18); // 限制 age > 18
            query.greaterThanOrEqualTo('age', 18); // 限制 age >= 18

            query.exists('images'); // 查找包含 'images' 的对象
            query.doesNotExist('images'); // 查找不包含 'images' 的对象
            break;
        case 3:
            query.limit(10); // 最多获取 10(<=1000) 条结果
        case 4:
            query.ascending('createdAt');// 按 createdAt 升序排列
            query.descending('createdAt');// 按 createdAt 降序排列
        default:
            query.find().then((students) => {
                // students 是包含满足条件的 Student 对象的数组
            });
            query.first().then((todo) => {
                // todo 是第一个满足条件的 Todo 对象
            });
            query.skip(20);

            query.select(['title', 'content']); // 返回指定属性
            query.first().then((todo) => {
                const title = todo.get('title'); // √
                const content = todo.get('content'); // √
                const notes = todo.get('notes'); // undefined
            });
            break;
    }

}


/**
 * 同步 fetch
 */
function fetch_1() {
    const todo = AV.Object.createWithoutData('Todo', '582570f38ac247004f39c24b');

    todo.fetch().then((todo) => {
        // todo 已刷新
    });

    todo.fetch({
        keys: 'priority, location'
    }).then((todo) => {
        // 只有 priority 和 location 会被获取和刷新
    });
}


/**
 * 更新 save
 */
function save_1() {
    const todo = AV.Object.createWithoutData('Todo', '582570f38ac247004f39c24b');
    todo.set('content', '这周周会改到周三下午三点。');
    todo.save();
    // 查看未保存修改
    todo.dirtyKeys();
}

/**
 * 删除 destroy
 */
function destory_1() {
    const todo = AV.Object.createWithoutData('Todo', '582570f38ac247004f39c24b');
    // 删除对象
    todo.destroy();

    // 删除指定属性(unset) priority 属性会被删除
    todo.unset('priority');

    // 保存对象
    todo.save();
}