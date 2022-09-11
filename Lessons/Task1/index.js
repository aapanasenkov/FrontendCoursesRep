
function checkAllNumbersAreSame() {
    let prmptStr = prompt('Введите 3х значное число');
    if (prmptStr.length > 3 || prmptStr.length < 3) {
        console.log('Вы ввели не верное количество символов');
       return;
    } else if (Number.isNaN(Number(prmptStr))) {
        console.log('Вы ввели не число');
        return;
    }  
    
    if (prmptStr[0] == prmptStr[1] && prmptStr[1] == prmptStr[2]) {
        console.log('Все числа одинаковые!');
    } else if (prmptStr[0] == prmptStr[1] || prmptStr[1] == prmptStr[2] || prmptStr[0] == prmptStr[2]) {
        console.log('Есть одинаковые числа');
    } else {
        console.log('Числа разные!');
    }
}

checkAllNumbersAreSame();
