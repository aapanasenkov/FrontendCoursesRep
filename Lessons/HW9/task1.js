let textNode = document.querySelectorAll('.lorem-text')[0];    
let btnNode = document.getElementById('btn');    
const defaulTextColor = textNode.style.color;

btnNode.addEventListener('click', function() {
    textNode.style.color == defaulTextColor ? textNode.style.color = 'red' : textNode.style.color = defaulTextColor
})
