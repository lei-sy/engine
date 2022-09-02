// 将多次函数执行合并成一次，
// 开启一个定时器规定它在wait后执行函数，如果在等待时间内再次执行就会清空当前定时器再开一盒
const debounce = (func, wait = 1000) => {
    let timer;

    return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}


debounce()