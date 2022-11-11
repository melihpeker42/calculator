let btnnumber = document.querySelectorAll("#btnnumber");
let screen = document.querySelector("#screen");
let btnopt = document.querySelectorAll("#btnopt");
let optState = false;
let opt = "";
let final = 0;
let Comma = true;
let optscreen=true;




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
                screen.textContent = Number(screen.textContent) / 100;
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
        if (isNaN(final))
            document.getElementById("screen").innerText = "Division by zero is undefined";


        if (final == "Infinity")
            document.getElementById("screen").innerText = "Division by zero is undefined";

        screen.textContent+=this.textContent;
    }
})




let arr = []

function equal() {

    arr.push(screen.textContent);
    localStorage.setItem("pastTransaction", arr);
    document.getElementById("screen").innerHTML;

    
    let str=(document.getElementById("screen").innerText);
    let array=str.split("/");
    console.log(array);
    
}

function timeout() {
    setTimeout(
        equal,
        200
    )
}

function Clear() {
    screen.textContent = "";


}

function past() {
    let b = localStorage.getItem("pastTransaction");
    document.getElementById("screen").innerText = arr[arr.length - 2];

}

function btnc() {
    let screen = (document.getElementById("screen").innerText);
    let newscreen = screen.slice(0, -1)
    document.getElementById("screen").innerText = newscreen;

    if (document.getElementById("screen").innerText.includes(".")) {
        Comma = false;
    } else {
        Comma = true;
    }
}

function optComma() {

    if (Comma) {
        let screen = (document.getElementById("screen").innerText);

        document.getElementById("screen").innerText = screen + ".";
        Comma = false;
    }

}

function root() {
    let a = document.getElementById("screen").innerText;
    document.getElementById("screen").innerText = Math.sqrt(a);
}































