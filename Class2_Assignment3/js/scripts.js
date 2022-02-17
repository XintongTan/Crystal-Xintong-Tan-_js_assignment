let shape;

const makeTriangle = function (number, shape, callback) {
    for (var i = 0; i < 5; i++) {
        let n;
        n = number(9);
        let offset = 5 - i;
        callback('-'.repeat(offset) + shape.repeat(n));
        n++;
    }
}

const displayConsole = function (value) {
    console.log(value);
}

const displayAlert = function (value) {
    alert(value);
}



const createNumber = function (value) {
    value = Math.floor(value * Math.random());
    return value;
}



makeTriangle(createNumber, '*', displayConsole);
makeTriangle(createNumber, 'C', displayConsole);
makeTriangle(createNumber, '#', displayConsole);
makeTriangle(createNumber, '&', displayConsole);