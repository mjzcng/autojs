auto.waitFor();
var Maid = require("Maid.js");
var maid = new Maid("com.taobao.trip");
var Unlock = require("Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);
maid.killall();
maid.sleep(2);
maid.launch();
maid.sleep(6);
if (id("Dolphin_Regular_Layer_Close").exists()) { // 关闭弹窗
    maid.clickIdCenter("Dolphin_Regular_Layer_Close");
    maid.sleep(2);
}
maid.sleep(3);
maid.clickTextCenter("里程"); //进入签到页按钮
maid.sleep(4);
maid.clickTextCenter("立即签到");
maid.sleep(1);
var setplusmiles = textMatches("\\+\\d+里程").find();
setplusmiles.forEach(function(pm){
    maid.sleep(1);
    maid.clickCenter(pm.parent());
    maid.sleep(5);
    // 想做个检测等待10秒的判断，不好使
    if (textMatches("倒计时\\d+秒").exists()) {
        maid.sleep(11);
    }
    maid.clickTextCenter("立即领奖");
    maid.sleep(1);
    back();
    maid.sleep(1);
});
maid.sleep(2);
maid.exit();
maid.after();