var G0 = ["邹世豪", "刘海军", "罗佳鑫", "杨文宇", "陈怡", "康美琪", "郑智", "欧琳", "唐玉君"
    , "李佳惠", "周延庆", "梁力丹", "唐嫚", "陈曦", "蒋运洋", "李祥", "廖添", "徐芸浩"
    , '王睿', '吴宇航', '吴李', '唐熙来', '胡可', '谢春燕', '张兰丹', '欧阳唐蕾', '曾竞'
    , '荣光宇', '喻稚棚', '伍凤', '邓宏飞', '陈思吉', '谢荣帆', '唐誉源', '陈慧敏', '胡浩'
    , '谭越东', '赖泰富', '陈宇航', '尹时周', '刘鑫', '伍雯', '黄松', '张舒然', '廖燚'
    , '杨小雨', '陈诗涵', '罗安', '杨芥', '曾佳琳', '唐仕锟', '冷佳玲', '郑景文', '补位'
    , '郭鑫美', '李俊洁', '张圣城', '彭浩然', '王易寒', '肖沁怡', '周琴', '熊宇珂', '蒋蟠']

var G1 = ["邹世豪", "刘海军", "罗佳鑫", "杨文宇", "陈怡", "康美琪", "郑智", "欧琳", "唐玉君"]

var G2 = ["李佳惠", "周延庆", "梁力丹", "唐嫚", "陈曦", "蒋运洋", "李祥", "廖添", "徐芸浩"]

var G3 = ['王睿', '吴宇航', '吴李', '唐熙来', '胡可', '谢春燕', '张兰丹', '欧阳唐蕾', '曾竞']

var G4 = ['荣光宇', '喻稚棚', '伍凤', '邓宏飞', '陈思吉', '谢荣帆', '唐誉源', '陈慧敏', '胡浩']

var G5 = ['谭越东', '赖泰富', '陈宇航', '尹时周', '刘鑫', '伍雯', '黄松', '张舒然', '廖燚']

var G6 = ['杨小雨', '陈诗涵', '罗安', '杨芥', '曾佳琳', '唐仕锟', '冷佳玲', '郑景文', '补位']

var G7 = ['郭鑫美', '李俊洁', '张圣城', '彭浩然', '王易寒', '肖沁怡', '周琴', '熊宇珂', '蒋蟠']

var GID = G0;

var PID = 0;

var searcher;

var working = false;

function Reset() {
    document.getElementById("showname").innerText = "-名字-";
    GID = G0;
    PID = 0;
    console.log("重置");
    clearInterval(searcher);
}
function Start() {
    if (!working) {
        PID = 0;
        searcher = setInterval(search, 80)
        document.getElementById("S").innerText = "停止";
        working = true;
    }
    else {
        PID = 0;
        clearInterval(searcher);
        document.getElementById("S").innerText = "开始";
        working = false;
    }
}
function search() {
    console.log(PID);
    document.getElementById("showname").innerText = GID[PID];
    if (PID == GID.length) {
        PID = 0;
    }
    else {
        PID = PID + 1;
    }
}

function Change(G) {
    var aim = document.getElementById("D");
    var aim2 = document.getElementById("showname");
    switch (G) {
        case 0:
            GID = G0;
            aim.innerText = '全员';
            aim2.innerText = '全员';
            break;
        case 1:
            GID = G1;
            aim.innerText = '一组';
            aim2.innerText = '一组';
            break;
        case 2:
            GID = G2;
            aim.innerText = '二组';
            aim2.innerText = '二组';
            break;
        case 3:
            GID = G3;
            aim.innerText = '三组';
            aim2.innerText = '三组';
            break;
        case 4:
            GID = G4;
            aim.innerText = '四组';
            aim2.innerText = '四组';
            break;
        case 5:
            GID = G5;
            aim.innerText = '五组';
            aim2.innerText = '五组';
            break;
        case 6:
            GID = G6;
            aim.innerText = '六组';
            aim2.innerText = '六组';
            break;
        case 7:
            GID = G7;
            aim.innerText = '七组';
            aim2.innerText = '七组';
            break;
    }
    document.getElementById('Group').style.display = 'none'
}