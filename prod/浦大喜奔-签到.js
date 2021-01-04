auto.waitFor();
var Maid = require("Maid.js");
var maid = new Maid("com.spdbccc.app");
var Unlock = require("Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);
maid.killall();
maid.sleep(2);
maid.launch();
maid.sleep(6);
maid.clickTextCenter("我的");
maid.sleep(2);
maid.clickTextCenter("注册 / 登录");
maid.sleep(1);
gesture(2000, [271, 889], [536, 889], [271, 1145], [271, 1405], [536, 1145], [536, 1405], [785, 1145]);
maid.sleep(5);
if (id("iv_kfc_image_close").exists()) {
    maid.clickIdCenter("iv_kfc_image_close");
}
maid.sleep(1);
maid.clickIdCenter("iv_user_leader_title_3");
maid.sleep(3);
maid.clickTextCenter("立即签到");
maid.sleep(1);
maid.after();
