function displayLastNumberMoreThan100() {
    let lastPrmt;
    for (let i = 0; i < 10; i++) {
        lastPrmt = prompt('Введите число больше 100');
        if (isNaN(+lastPrmt) || lastPrmt > 100) {
            break;
        } else {
            continue
        }
    }
    console.log(lastPrmt)
}

displayLastNumberMoreThan100();