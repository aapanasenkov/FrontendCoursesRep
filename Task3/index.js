
function removeExtraSymbols(str, arrayOfSymbols) {
    let rge = new RegExp('[' + arrayOfSymbols + ']', 'g');
    return str.replace(rge, '')
}

console.log(removeExtraSymbols('hello world', ['l', 'd']));