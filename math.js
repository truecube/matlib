class MathLib {
    constructor(fn, sn) {
        this.firstNumber = parseInt(fn);
        this.secondNumber = parseInt(sn);
    }

    add = function() {
        let a = this.firstNumber + this.secondNumber;
        return a;
    }

    subtract = function() {
        return this.firstNumber - this.secondNumber;
    }

    multiply = function() {
        return this.firstNumber * this.secondNumber;
    }

    divide = function() {
        return this.firstNumber / this.secondNumber;
    }

    execute = function(op) {
        if(op == "+") {
            return this.add();
        } else if(op == "-") {
            return this.subtract();
        } else if(op == "*" || op == "X" || op == "x"){
            return this.multiply();
        } else if(op == "/") {
            return this.divide();
        }
    }
}