let undfnd;
console.log(typeof undfnd);

let numb = 1;
console.log(typeof numb);

let inft = 1 / 0;
console.log(typeof inft);

let nanValue = 'Nan' * 2;
console.log(typeof nanValue);

let bgInt = 10n;
console.log(typeof bgInt);

let flag = true;
console.log(typeof flag);

let str = 'String';
console.log(typeof str);

let syb = Symbol('Symbol');
console.log(typeof syb);

let arr = [1,2,3];
console.log(typeof arr);

let obj = {
    'a' : 'a',
    'b' : 'b'
};
console.log(typeof obj);

let nullValue = null;
console.log(typeof nullValue);

let fnc = function fn () {
    alert('Hi');    
};
console.log(typeof fnc);
