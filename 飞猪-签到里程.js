auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.taobao.trip");
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
// maid.waitForActivity("com.taobao.trip.home.HomeActivity");
if (id("Dolphin_Regular_Layer_Close").exists()) { // 关闭弹窗
    maid.clickIdCenter("Dolphin_Regular_Layer_Close");
    maid.sleep(2);
}
// maid.clickSelectorCenter(className("android.widget.FrameLayout").depth(5).drawingOrder(1).clickable(true));
// maid.sleep(2);
// maid.clickRegTextCenter("\\+\\d+里程"); //进入签到页按钮
maid.sleep(3);
maid.clickTextCenter("里程"); //进入签到页按钮
maid.sleep(4);
maid.clickTextCenter("立即签到");
maid.sleep(1);
var setplusmiles = textMatches("\\+\\d+里程").find();
log(setplusmiles);
setplusmiles.forEach(function(pm){
    maid.sleep(1);
    // log(pm);
    maid.clickCenter(pm.parent());
    // log(pm.text());
    maid.sleep(1);
    maid.clickTextCenter("立即领奖");
    maid.sleep(1);
    back();
    maid.sleep(1);
});
// for (var i in setplusmiles) {
//     maid.sleep(1);
//     // i.click();
//     log(i.text());
//     maid.sleep(1);
//     maid.clickTextCenter("立即领奖");
//     maid.sleep(1);
//     back();
//     maid.sleep(1);
//     back();
//     maid.sleep(1);
// }
maid.sleep(2);
maid.exit();
// maid.kill();
maid.after();