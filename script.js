const display = document.getElementById("result");
const btn = document.querySelector('button', '.btn');


let screen = 0;

//Capturar o valor
function captureNumbers(number) {
    screen = display.innerHTML += number
    filterData()
};

//tratar dados
function filterData(){
    if (screen.includes("++")) {
        screen = screen.replace("++", "+");
    } else if (screen.includes("--")) {
        screen = screen.replace("--", "-")
    }
     
}

//Remover um
function remove() {
    screen = display.innerHTML = screen.substring(0, screen.length -1);
}

// Soma
function sum() {
    
   screen ? screen = display.innerHTML = eval(screen) : alert("Invalido");
    
}

// Apaga
function clean() {
   display.innerHTML = "";
   screen = 0;
};














