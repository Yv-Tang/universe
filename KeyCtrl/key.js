const { Query, User } = AV;

AV.init({
    appId: "kSDqVFRjBHrwXqvwTXN8WM7b-gzGzoHsz",
    appKey: "mX6hrQ3f4nxt8mSp3B1pp3BO",
    serverURL: "https://ksdqvfrj.lc-cn-n1-shared.com",
});

username = '';
password = '';
salt = 0;

function register() {
    const username = prompt('请输入注册账号:');
    if (!username) {
        alert('账号不能为空');
        return;
    }

    const password = prompt('请输入注册密码:');
    if (!password) {
        alert('密码不能为空');
        return;
    }

    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);

    user.signUp().then(() => {
        alert('注册成功！');
    }).catch(error => {
        console.error('注册失败:', error);
        alert('注册失败，请稍后再试');
    });
}

function login() {
    username = prompt('请输入账号:');
    if (!username) {
        alert('账号不能为空');
        return;
    }

    password = prompt('请输密码:(注:密码不会储存在云端,此处密码仅作为盐辅助加密你想要获取的密码)');
    if (!password) {
        alert('密码不能为空');
        return;
    }

    username = username.trim();
    password = password.trim();

    salt = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i] === 'a' || password[i] === 'b') { // 假设只对'a'和'b'求和
            salt += password.charCodeAt(i);
        }
    }
    //将按钮替换为名称:username,口令:password的span
    document.getElementById('header').innerHTML = `<h1>${username}'s Key,密码:${password},盐值:${salt}</h1>`;
}

function quary(accountName) {
    if (!accountName) {
        alert('请提供账户名称');
        return;
    }

    // 创建一个新的查询实例
    const query = new AV.Query('Keys');
    query.equalTo('account', accountName);

    // 执行查询
    query.find().then(results => {
        if (results.length > 0) {
            // 假设每个account只有一个key，这里取第一个匹配的结果
            const key = results[0].get('key'); // 假设你的类中有一个名为'key'的字段
            alert(`查询到的密钥: ${key}`);
        } else {
            alert('没有找到匹配的账户');
        }
    }).catch(error => {
        console.error('查询失败:', error);
        alert('查询失败，请稍后再试');
    });
}

function addSiteInfo() {
    const currentUser = AV.User.current();
    if (!currentUser) {
        alert('请先登录');
        return;
    }

    const siteType = prompt('请输入账号种类:');
    if (!siteType) {
        alert('账号种类不能为空');
        return;
    }

    const link = prompt('请输入站点链接:');
    if (!link) {
        alert('站点链接不能为空');
        return;
    }

    const account = prompt('请输入用户名:');
    if (!account) {
        alert('用户名不能为空');
        return;
    }

    const password = prompt('请输入密码:');
    if (!password) {
        alert('密码不能为空');
        return;
    }

    const SiteInfo = AV.Object.extend('SiteInfo');
    const siteInfo = new SiteInfo();
    siteInfo.set('siteType', siteType);
    siteInfo.set('link', link);
    siteInfo.set('account', account);
    siteInfo.set('password', password);

    // 设置ACL，仅允许当前用户读写
    const acl = new AV.ACL();
    acl.setWriteAccess(currentUser, true);
    acl.setReadAccess(currentUser, true);
    siteInfo.setACL(acl);

    siteInfo.save().then(() => {
        alert('站点信息添加成功！');
    }).catch(error => {
        console.error('添加失败:', error);
        alert('添加失败，请稍后再试');
    });
}

function updateSiteInfo() {
    const currentUser = AV.User.current();
    if (!currentUser) {
        alert('请先登录');
        return;
    }

    const siteId = prompt('请输入要更新的站点ID:');
    if (!siteId) {
        alert('站点ID不能为空');
        return;
    }

    const siteType = prompt('请输入新的账号种类:');
    const link = prompt('请输入新的站点链接:');
    const account = prompt('请输入新的用户名:');
    const password = prompt('请输入新的密码:');

    const query = new AV.Query('SiteInfo');
    query.get(siteId).then(siteInfo => {
        if (siteType) siteInfo.set('siteType', siteType);
        if (link) siteInfo.set('link', link);
        if (account) siteInfo.set('account', account);
        if (password) siteInfo.set('password', password);
        return siteInfo.save();
    }).then(() => {
        alert('站点信息更新成功！');
    }).catch(error => {
        console.error('更新失败:', error);
        alert('更新失败，请稍后再试');
    });
}

function deleteSiteInfo() {
    const currentUser = AV.User.current();
    if (!currentUser) {
        alert('请先登录');
        return;
    }

    const siteId = prompt('请输入要删除的站点ID:');
    if (!siteId) {
        alert('站点ID不能为空');
        return;
    }

    const query = new AV.Query('SiteInfo');
    query.get(siteId).then(siteInfo => {
        return siteInfo.destroy();
    }).then(() => {
        alert('站点信息删除成功！');
    }).catch(error => {
        console.error('删除失败:', error);
        alert('删除失败，请稍后再试');
    });
}

function queryAllSiteInfo() {
    const currentUser = AV.User.current();
    if (!currentUser) {
        alert('请先登录');
        return;
    }

    const query = new AV.Query('SiteInfo');
    query.find().then(results => {
        const membersDiv = document.querySelector('.members');
        membersDiv.innerHTML = ''; // 清空现有内容

        results.forEach(siteInfo => {
            const container = document.createElement('div');
            container.className = 'container';

            const logoDiv = document.createElement('div');
            logoDiv.id = 'logo';
            const logoImg = document.createElement('img');
            logoImg.src = siteInfo.get('link') + '/favicon.ico'; // 假设站点链接包含favicon路径
            logoImg.alt = siteInfo.get('siteType');
            logoDiv.appendChild(logoImg);

            const dataDiv = document.createElement('div');
            dataDiv.id = 'data';
            const accountSpan = document.createElement('span');
            accountSpan.id = 'account';
            accountSpan.textContent = siteInfo.get('account');
            const keyDiv = document.createElement('div');
            keyDiv.id = 'key';
            const copyButton = document.createElement('button');
            copyButton.textContent = '复制';
            copyButton.onclick = () => {
                navigator.clipboard.writeText(siteInfo.get('password')).then(() => {
                    alert('密码已复制到剪贴板');
                }).catch(() => {
                    alert('复制失败，请手动复制');
                });
            };
            keyDiv.appendChild(copyButton);

            dataDiv.appendChild(accountSpan);
            dataDiv.appendChild(document.createElement('br'));
            dataDiv.appendChild(keyDiv);

            container.appendChild(logoDiv);
            container.appendChild(dataDiv);
            membersDiv.appendChild(container);
        });
    }).catch(error => {
        console.error('查询失败:', error);
        alert('查询失败，请稍后再试');
    });
}