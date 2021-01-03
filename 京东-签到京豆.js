auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.jingdong.app.mall");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


// maid.kill();
// maid.sleep(2);
maid.launch();
maid.sleep(1);
maid.click(300, 1831);
maid.sleep(5);
back();
// if (className("android.widget.ImageView").depth(6).exists()) {
//     maid.click(545, 1695); // 关闭瓜分京东弹窗
//     maid.sleep(2);
// }
maid.sleep(1);
maid.clickTextCenter("领京豆");
maid.sleep(2);
maid.clickTextCenter("签到领京豆");
maid.sleep(2);
// maid.kill();
maid.exit();
maid.after();