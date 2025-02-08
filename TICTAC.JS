let xTurn = true;
function changeMark(buttonId){
let currentMark = document.getElementById(buttonId).innerHTML;
if (xTurn) {
    document.getElementById(buttonId).innerHTML = "X";
    document.getElementById(buttonId).className = "xes";
}
else {
    document.getElementById(buttonId).innerText = "O";
    document.getElementById(buttonId).className = "oes";
}
    xTurn = !xTurn;
    checkWin();
}
function xWins(){
    document.getElementById("result").innerText = "Result:X Wins!!";
}
function oWins(){
    document.getElementById("result").innerText = "Result:O Wins!!";
}
function resetgame(){
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = ""; 
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("result").innerText = "Result:";
}
function checkWin() {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;
    if (a1 == b1 && b1 == c1 && a1 == "X") {
    xWins();
    }
    if (a2 == b2 && b2 == c2 && a2 == "X") {
    xWins();
    }
    if (a3 == b3 && b3 == c3 && a3 == "X") {
    xWins();
    }
    if (a1 == b1 && b1 == c1 && a1 == "O") {
    oWins();
    }
    if (a2 == b2 && b2 == c2 && a2 == "O") {
    oWins();
    }
    if (a3 == b3 && b3 == c3 && a3 == "O") {
    oWins();
    }
    if (a3 == b2 && b2 == c1 && a3 == "X") {
    xWins();
    }
    if (a3 == b2 && b2 == c1 && a3 == "O") {
    oWins();
    }
    if (a1 == b2 && b2 == c3 && a1 == "X") {
    xWins();
    }
    if (a1 == b2 && b2 == c3 && a1 == "O") {
    oWins();
    }
}