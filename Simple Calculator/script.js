let currentInput = "";

function selectNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
  }

function selectOperator(opr){
    currentInput += opr;
    document.getElementById('display').value = currentInput;
    
}  

function selectDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        document.getElementById('display').value = currentInput;
    }
}

function calculateResult(){
    try {
        let result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();  
    } catch (error) {
        document.getElementById('display').value = "Error";
        currentInput = "";
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

