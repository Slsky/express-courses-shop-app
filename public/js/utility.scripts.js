// Utility
function debounce(func, timer) {
    let timerId;
    return (args) => {
        timerid && clearTimeout(timerId)
        timerId = setTimeout(() => func(...args), timer)
    }
}




// ToDo: Make script file withe settings
Vue.options.delimiters = ["{%", "%}"]