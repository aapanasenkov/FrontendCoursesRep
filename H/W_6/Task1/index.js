function displayLastNumberMoreThan100() {
    let lastPrmt;
    for (let i = 0; i < 10; i++) {
        lastPrmt = prompt('Введите число больше 100');
        if (lastPrmt < 100) {
            continue;
        } else {
            console.log(lastPrmt);
            return;
        }
    }
}

displayLastNumberMoreThan100();