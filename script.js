let btnnumber= document.querySelectorAll("#btnnumber");
let screen = document.querySelector("#screen");
let btnopt = document.querySelectorAll("#btnopt");
let optState=false;
let opt="";
let final=0;



btnnumber.forEach(Number => {
    Number.addEventListener("click",showNumber);

    function showNumber(){
       
        if (screen.textContent=="0" || optState) {
            screen.textContent="";  
        }
        screen.textContent += this.textContent;
        optState=false;
    }
});






btnopt.forEach(operator => 
    
    {
 operator.addEventListener("click",calculator);

 function calculator() {
    optState=true;
    let newopt=this.textContent;

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
    case "=":
    final= Number(screen.textContent);
    break;


   }
   final = Number(screen.textContent);
   opt = newopt;



 }
 

    }
    
    )