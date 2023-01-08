// (target)의 css (key)를 (value)로 바꿈
function changeCSS(target, key, value) {
    target.style[key] = value
}

export { changeCSS }