auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.tencent.mm");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
//maid.before();
unlock.unlock();
//maid.sleep(2);

// maid.kill();
// maid.sleep(2);
maid.launch();
maid.sleep(1);
maid.click(312, 1784);
maid.sleep(2);
maid.clickTextCenter("发现");
maid.sleep(0.5);
maid.clickCenter(className("android.widget.TextView").text("小程序").depth(20).findOne());
maid.sleep(0.5);
maid.clickTextCenter("农行返岗健康卡");
maid.sleep(4);
//var temp = className("android.widget.EditText").text("35").depth(15).findOne(2000);
var temp = className("android.widget.EditText").text("请输入").findOne(2000);
log(temp);
maid.clickCenter(temp);
//maid.clickCenter(id("12833").findOne(2000));
//maid.clickCenter(className("android.widget.EditText").text("35").depth(15).findOne(2000));
maid.sleep(1);
maid.click(918, 1719);
maid.sleep(0.3);
maid.click(922, 1888);
maid.sleep(0.5)
maid.click(897, 1227);
maid.sleep(0.5)
maid.clickCenter(className("android.widget.EditText").text("请输入").depth(21).findOne(2000));
maid.sleep(0.3);
maid.click(918, 1719);
maid.sleep(0.3);
maid.click(922, 1888);
maid.sleep(0.5);
maid.click(897, 1227);
maid.sleep(0.5);
className("android.widget.RadioButton").text("返岗复工").findOne(2000).click();
maid.sleep(1);
var temp2 = text("否").find();
temp2.forEach(function(ee){
    ee.parent().click();
    maid.sleep(1);
});
text("提交").findOne(2000).click();
maid.sleep(1);
maid.exit();
maid.after();