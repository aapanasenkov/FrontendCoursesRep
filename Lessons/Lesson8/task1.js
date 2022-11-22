
function Human(name, age) {
    this.name = name;
    this.age = age;
    this.displayInfo = function() {
        console.log(`You name ${this.name}. You age ${this.age}`);
    }
}

let userName = prompt('Введите свое имя');
let userAge = prompt('Введите свой возраст');

const user = new Human(userName, userAge);
user.displayInfo();

function Auto(color, size, model) {
    this.color = color;
    this.size = size;
    this.model = model;
    this.putOwner = function(owner) {
        this.owner = owner;
    }
    this.displayInfo = function() {
        console.log(`Auto color - ${this.color}, Auto size - ${this.size}, Auto model - ${this.model}, Auto owner - ${this.owner ? this.owner.name : 'not selected'}`);
    }
}

let autoColor = prompt('Введите цвет машины');
let autoSize = prompt('Введите размер машины');
let autoModel = prompt('Введите модель машины');

const auto = new Auto(autoColor, autoSize, autoModel);
auto.putOwner(user);
auto.displayInfo();
