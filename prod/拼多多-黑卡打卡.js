auto.waitFor();
var Maid = require("Maid.js");
var maid = new Maid("com.xunmeng.pinduoduo");
var Unlock = require("Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);
maid.killall();
maid.sleep(2);
maid.launch();
maid.sleep(6);
back();
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
maid.sleep(5);
maid.click(204, 500);
maid.sleep(5);
maid.click(554, 457);
maid.sleep(5);
maid.click(886, 465);
maid.sleep(3);
maid.exit();
maid.after();