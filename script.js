let outputScreen = document.getElementById("output-screen");
let displayscreen = document.getElementById("display-screen");

function display(num){
    outputScreen.value += num;
}

function Calculate(){
    try{
        displayscreen.value = outputScreen.value;
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}

function Clear(){
    outputScreen.value = " ";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}