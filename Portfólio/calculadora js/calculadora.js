const pOperacoesText= document.querySelector("#p-operacoes");
const cOperacoesText = document.querySelector("#c-operacoes");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(pOperacoesText, cOperacoesText) {
    this.pOperacoesText = pOperacoesText;
    this.cOperacoesText = cOperacoesText;
    this.currentOperacoes= "";
  }

  // add digito
  addDigit(digit) {
    console.log(digit);
    
    if (digit === "." && this.cOperacoesText.innerText.includes(".")) {
      return;
    }

    this.currentOperacoes = digit;
    this.updateScreen();
  }

  
  processOperation(operacao) {
    
    if (this.cOperacoesText.innerText === "" && operacao !== "C") {
      
      if (this.pOperacoesText.innerText !== "") {
        this.changeOperation(operacao);
      }
      return;
    }

    
    let operacoesValue;
    let previous = +this.pOperacoesText.innerText.split(" ")[0];
    let current = +this.cOperacoesText.innerText;

    switch (operacao) {
      case "+":
        operacoesValue = previous + current;
        this.updateScreen(operacoesValue, operacao, current, previous);
        break;
      case "-":
        operacoesValue = previous - current;
        this.updateScreen(operacoesValue, operacao, current, previous);
        break;
      case "*":
        operacoesValue = previous * current;
        this.updateScreen(operacoesValue, operacao, current, previous);
        break;
      case "/":
        operacoesValue = previous / current;
        this.updateScreen(operacoesValue, operacao, current, previous);
        break;
      case "AC":
        this.processACOperator();
        break;
      case "CE":
        this.processClearCurrentOperator();
        break;
      case "C":
        this.processClearOperator();
        break;
      case "=":
        this.processEqualOperator();
        break;
      default:
        return;
    }
  }

  
  updateScreen(
    operacoesValue = null,
    operacao = null,
    current = null,
    previous = null
  ) {
    if (operacoesValue === null) {
      
      this.cOperacoesText.innerText += this.currentOperacoes;
    } else {
      
      if (previous === 0) {
        operacoesValue = current;
      }
      
      this.pOperacoesText.innerText = `${operacoesValue} ${operacao}`;
      this.cOperacoesText.innerText = "";
    }
  }

  
  changeOperation(operacao) {
    const mathOperations = ["*", "-", "+", "/"];

    if (!mathOperations.includes(operacao)) {
      return;
    }

    this.pOperacoesText.innerText =
      this.pOperacoesText.innerText.slice(0, -1) + operacao;
  }

  
  processACOperator() {
    this.cOperacoesText.innerText =
      this.cOperacoesText.innerText.slice(0, -1);
  }

  
  processClearCurrentOperator() {
    this.cOperacoesText.innerText = "";
  }

  
  processClearOperator() {
    this.cOperacoesText.innerText = "";
    this.pOperacoesText.innerText = "";
  }

  
  processEqualOperator() {
    let operacao = this.pOperacoesText.innerText.split(" ")[1];

    this.processOperation(operacao);
  }
}

const calc = new Calculator(pOperacoesText, cOperacoesText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      console.log(value);
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});