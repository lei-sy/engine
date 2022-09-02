// 使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数。
const throttle = (func, wait = 1000) => {
    let last = 0

    return function(...args) {
        const now = Date.now()

        if (now - last > wait) {
            func.apply(this, args)
            last = now
        }
    }
}

// 函数不会立即执行第一次，而是等到等待时间结束才开始第一次执行
const throttle1 = (func, wait = 1000) => {
    let timer;

    return function(...args) {
        // const _this = this
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this,args)
                timer = null
            }, wait)
        }
    }
}