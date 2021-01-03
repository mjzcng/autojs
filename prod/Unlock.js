//解锁
function Unlock(){
    this.unlock = function () {
        if (device.isScreenOn()) {
            return
        }

        //点亮屏幕
        device.wakeUpIfNeeded()
        sleep(1000);
        //滑动屏幕到输入密码界面
        swipe(636, 2339, 636, 1077, 500);
        sleep(1000);
        gesture(2000, [243, 1099], [600, 1084], [252, 1300], [251, 1664], [542, 1300], [535, 1677], [843, 1370]);
    };
}

module.exports = Unlock;