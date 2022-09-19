let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (let prop in menu) {
    if (typeof menu[prop] === 'number') {
        menu[prop] *= 2;
    }
}

console.log(menu);

delete menu.width;
delete menu.height;

console.log(menu);

menu.title = 'Clear';

console.log(menu);