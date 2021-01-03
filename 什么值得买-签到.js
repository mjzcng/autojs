auto.waitFor();
log("到这里了 11111111111");
var Maid = require("./common/Maid.js");
var maid = new Maid("com.smzdm.client.android");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);

// maid.kill();
// maid.sleep(2);
maid.launch();
maid.sleep(1);
if (id("iv_content_cancel").exists()) {
    maid.clickIdCenter("iv_content_cancel"); //app更新弹出框
    maid.sleep(1);
}
maid.clickIdCenter("tab_usercenter"); 
maid.sleep(5);
maid.clickIdCenter("tv_login_sign");
maid.sleep(3);
maid.exit()
maid.after()