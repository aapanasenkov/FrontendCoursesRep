function whatIsNumber() {
    let num = +prompt('Введите число');
    switch(num) {
        case 0:
            console.log('Вы ввели число 0');
            break;
        case 1:
            console.log('Вы ввели число 1');
            break;
        case 2:
        case 3:
            console.log('Вы ввели число 2 или 3');
            break;  
        default:
            console.log('default res');
    }
}

whatIsNumber();