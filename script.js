let btnnumber = document.querySelectorAll("#btnnumber");
let screen = document.querySelector("#screen");
let btnopt = document.querySelectorAll("#btnopt");
let optState = false;
let opt = "";
let final = 0;



btnnumber.forEach(Number => {
    Number.addEventListener("click", showNumber);

    function showNumber() {

        if (screen.textContent == "0" || optState) {
            screen.textContent = "";
        }
       screen.textContent += this.textContent;
        
        optState = false;
    }
});

btnopt.forEach(operator => {
    operator.addEventListener("click", calculator);

    function calculator() {
        optState = true;
        let newopt = this.textContent;

        switch (opt) {
            case "/":
                screen.textContent = final / Number(screen.textContent);
                break;

            case "*":
                screen.textContent = final * Number(screen.textContent);
                break;
            case "+":
                screen.textContent = final + Number(screen.textContent);
                break;
            case "-":
                screen.textContent = final - Number(screen.textContent);
                break;
            case "%":
                screen.textContent = final * Number(screen.textContent) / 100;
                break;
            case "x²":
                screen.textContent = final ** Number(screen.textContent);
                break;


            case "=":
                final = Number(screen.textContent);
                break;
        }
        final = Number(screen.textContent);
        opt = newopt;

    }
})







function equal() {

    localStorage.setItem("pastTransaction", document.getElementById("screen").innerText);





}







function timeout() {
    setTimeout(
        equal,
        300
    )
}

function Clear() {
    screen.textContent = "";
}

function past() {
    let b = localStorage.getItem("pastTransaction");

    document.getElementById("screen").innerText = b;

}

function btnc() {
    let screen = (document.getElementById("screen").innerText);
    let newscreen = screen.slice(0, -1)
    document.getElementById("screen").innerText = newscreen;
}

function optComma() {
    let screen = (document.getElementById("screen").innerText);
    document.getElementById("screen").innerText = screen + ".";
}





function root() {
    let a = document.getElementById("screen").innerText;
    document.getElementById("screen").innerText = Math.sqrt(a);
}































