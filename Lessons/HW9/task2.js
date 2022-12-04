let tableNode = document.createElement('table');

let htmlInnerText = '';
let counter = 1;

for (let i = 0; i < 10; i++) {
    htmlInnerText += '<tr>';
    for (let j = 0; j < 10; j++) {
        htmlInnerText += `<td> ${counter} </td>`
        counter++;
    }
    htmlInnerText += '</tr>';
}

tableNode.innerHTML = htmlInnerText;
document.body.insertBefore(tableNode, document.querySelectorAll('.container')[0])
