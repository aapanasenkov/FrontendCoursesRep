function getAverageNumb(arr) {
    return arr.reduce((sum, item) => sum + item, 0) / arr.length;
}

let arr = [2, 3, 4, 5, 6, 7];
console.log(getAverageNumb(arr));