auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.lenovo.club.app");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


// maid.kill();
// maid.sleep(2);
maid.launch();
maid.sleep(3);
maid.clickTextCenter("允许");
maid.sleep(6);
back();
// if (className("android.widget.ImageView").depth(6).exists()) {
//     maid.click(545, 1695); // 关闭瓜分京东弹窗
//     maid.sleep(2);
// }
maid.sleep(1);
maid.clickTextCenter("我的");
maid.sleep(2);
maid.clickTextCenter("签到");
maid.sleep(2);
// maid.kill();
maid.exit();
maid.after();ep(2);
// maid.kill();
maid.exit();
maid.after();