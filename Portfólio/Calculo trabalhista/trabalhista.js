        var calcularINSS = 0;
        var calcularIRPF = 0;
        var salario = 0;
        var qtdeHora = 0;
        var outrasDeducoes=0 ;
        var descontoINSS = 0;
        var descontoIRPF = 0;
        var descontoVT = 0;
        var salarioLiquido = 0;
        var respostaVT;
        var descontoVT = 0;

        function calcular(){
            var h = document.getElementById("h3id");
            var vh = parseFloat(document.getElementById("vhid").value);
            var qtdeHora = parseFloat(document.getElementById("qhtid").value);
            var respostaVT =  document.getElementById("valetid").value;
            var outrasDeducoes =  parseFloat(document.getElementById("outrasid").value);
            
            salario = vh * qtdeHora;
         
            if(vh == 0){
                h.innerHTML = "Cálculo inválido.";
                return;
            }
            // Cálculo do INSS
            if (salario <= 1320) {
                calcularINSS = salario * 0.075;
            }
            else if (salario <= 2571.29) {
                calcularINSS = (salario - 1320) * 0.09 + 99;
            }
            else if (salario <= 3856.94) {
                calcularINSS = (salario - 2571.29) * 0.12 + 225.11;
            }
            else {
                calcularINSS = (salario - 3856.94) * 0.14 + 387.63;
            }

             // Cálculo do IRPF
        if (salario <= 2112) {
            calcularIRPF = 0;
        }
        else if (salario <= 2826.65) {
            calcularIRPF = 0.075 * (salario - 2112);
        }
        else if (salario <= 3751.05) {
            calcularIRPF = 0.15 * (salario - 2826.65) + 53.75;
        }
        else if (salario <= 4664.68) {
            calcularIRPF = 0.225 * (salario - 3751.06) + 158.95;
        }
        else {
            calcularIRPF = 0.275 * (salario - 4664.68) + 345.98;
        }

        descontoINSS = calcularINSS;
        descontoIRPF = calcularIRPF;

        if (respostaVT == "S") 
            {
                descontoVT = salario * 0.06;
            }
            salarioLiquido = (salario - descontoINSS - descontoIRPF - descontoVT - outrasDeducoes);
            h.innerHTML = (`Salário Bruto: R$${salario} | Desconto INSS: -R$${descontoINSS} | Desconto IRPF: -R$${descontoIRPF} | Desconto Vale Transporte: -R$${descontoVT} | Outras Deduções: -R$${outrasDeducoes} | Salário Líquido: R$${salarioLiquido}`);
        
        }