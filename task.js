function parseCount(number) {

    let a = 0;
    a = Number.parseInt(number);
    if (a !== a) {
        throw new Error('Невалидное значение');
    }
    else {
        return a;
    };
};

function validateCount(number) {
    let a = 0;
    try {
        a = parseCount(number);
    }
    catch (e) {
        return e;

    }
    return a;
}


// задача 2 треугольник

class Triangle {
    constructor(a, b, c) {
        if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        else {
            this.a = a;
            this.b = b;
            this.c = c;
        };
    };

    getPerimeter() {
        return (this.a + this.b + this.c);
    };

    getArea() {

        let p = this.getPerimeter() * 0.5;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    };
};


function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    }
    catch (e) {
        const res = Object();
        res.getArea = function () {
            return 'Ошибка! Треугольник не существует';
        };
        res.getPerimeter = function () {
            return 'Ошибка! Треугольник не существует';
        };
        return res;
    };
}