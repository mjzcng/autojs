auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.eg.android.AlipayGphone");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


// maid.kill();
// maid.sleep(2);
maid.launch();
maid.sleep(5);
if (id("update_cancel_tv").exists()) { // 关闭更新弹窗
    maid.clickIdCenter("update_cancel_tv");
    maid.sleep(2);
}
maid.clickTextCenter("我的");
maid.sleep(4);
maid.clickSelectorCenter(className("android.view.ViewGroup").depth(14).clickable(true));
maid.sleep(4);
if (desc("弹屏").exists()) {
    maid.clickDescCenter("关闭"); // 支付宝会员日弹窗
    maid.sleep(1);
}
maid.clickTextCenter("每日赚积分");
maid.sleep(4);
while (desc("点击领取").exists()) {
    maid.clickDescCenter("点击领取");
    maid.sleep(6);
}

maid.exit();
// maid.kill();
maid.after();