function numberInRange500() {
    let numb = +prompt('Введите число');
    Number.isNaN(numb) ? console.log('Вы ввели не число') : (numb >= 0 && numb <= 500) ? console.log('Число входит в диапазон от 0 до 500') : console.log('Число не входит в диапазон от 0 до 500');
}

numberInRange500();