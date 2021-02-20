function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function calculate() {
    let fn = document.getElementById("firstNumber").value;
    let sn = document.getElementById("secondNumber").value;
    let ml = new MathLib(fn, sn);
    let op = document.getElementById("operator").value;
    let answer = ml.execute(op);
    document.getElementById("answer").innerHTML = answer;
    return answer;
}

function generate() {
    document.getElementById("firstNumber").value=getRandomNumber(100);
    document.getElementById("secondNumber").value=getRandomNumber(100);
}

function checkAnswer() {
    let yourAnswer = parseInt(document.getElementById("yourAnswer").value);
    let actualAnswer = calculate();
    if(yourAnswer ==  actualAnswer) {
        document.getElementById("answer").innerHTML = "<font color='green'>Bingo!! You Rock Dude!! </font>";
    } else {
        document.getElementById("answer").innerHTML = "<font color='red'>Sorry! Try again?</font>";
    }
    
    
}