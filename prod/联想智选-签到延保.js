auto.waitFor();
var Maid = require("Maid.js");
var maid = new Maid("com.lenovo.club.app");
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
maid.clickTextCenter("我的");
maid.sleep(2);
maid.clickTextCenter("签到");
maid.sleep(2);
maid.exit();
maid.after();