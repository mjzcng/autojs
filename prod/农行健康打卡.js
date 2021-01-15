auto.waitFor();
var Maid = require("Maid.js");
var maid = new Maid("com.tencent.mm");
var Unlock = require("Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);
maid.killall();
maid.sleep(2);
maid.launch();
maid.sleep(6);
maid.clickTextCenter("发现");
maid.sleep(1);
maid.clickCenter(className("android.widget.TextView").text("小程序").depth(20).findOne());
maid.sleep(1);
text("农行返岗健康卡").findOne(2000).parent().parent().parent().parent().click();
maid.sleep(4);
var temperatureEnterList = className("android.widget.EditText").text("请输入").depth(21).find();
temperatureEnterList.forEach(function(te){
    maid.clickCenter(te);
    maid.sleep(1);
    maid.click(918, 1719);
    maid.sleep(0.3);
    maid.click(922, 1888);
    maid.sleep(0.5)
    maid.click(897, 1227);
    maid.sleep(1)
});
// maid.clickSelectorCenter(className("android.widget.EditText").text("请输入").depth(15)); // 上午温度36
// maid.sleep(1);
// maid.click(918, 1719);
// maid.sleep(0.3);
// maid.click(922, 1888);
// maid.sleep(0.5)
// maid.click(897, 1227);
// maid.sleep(0.5)
// maid.clickSelectorCenter(className("android.widget.EditText").text("请输入").depth(21)); // 下午温度36
// maid.sleep(0.3);
// maid.click(918, 1719);
// maid.sleep(0.3);
// maid.click(922, 1888);
// maid.sleep(0.5);
// maid.click(897, 1227);
// maid.sleep(0.5);
/* 选择各选项。由于在页面下方超出屏幕范围，因此不能用clickCenter等方法 */
className("android.widget.RadioButton").text("返岗复工").findOne(2000).click();
maid.sleep(1);
var selectButtonList = text("否").find();
selectButtonList.forEach(function(bttext){
    bttext.parent().click();
    maid.sleep(1);
});
text("提交").findOne(2000).click();
maid.sleep(1);
maid.exit();
maid.after();