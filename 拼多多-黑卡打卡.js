auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.xunmeng.pinduoduo");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


// maid.kill();
// maid.sleep(2);
maid.launch();
maid.sleep(6);
back();
// if (className("android.widget.ImageView").depth(6).exists()) {
//     maid.click(545, 1695); // 关闭瓜分京东弹窗
//     maid.sleep(2);
// }
maid.sleep(1);
maid.clickCenter(className("android.widget.LinearLayout").depth(9).findOne(2000));
maid.sleep(1);
maid.clickTextCenter("黑卡");
maid.sleep(2);
maid.click(648, 334);
maid.sleep(2);
var tanchuang = className("android.widget.Image").text("70").clickable(true);
if (tanchuang.exists())
    maid.clickSelectorCenter(className("android.widget.Image").text("70").clickable(false));
    maid.sleep(1);
if (text("去打卡").exists())
    maid.clickTextCenter("去打卡");
else
    maid.clickSelectorCenter(className("android.widget.Image").text("webp").depth(14));
maid.sleep(2);
maid.click(204, 500);
maid.sleep(3);
// maid.kill();
maid.exit();
maid.after();ep(2);
// maid.kill();
maid.exit();
maid.after();
after();