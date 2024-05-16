// Calcular Média
function calc(){
    let valor1 = Number(document.querySelector("#valor1").value); // Declaração de variável pro respectivo input
    let valor2 = Number(document.querySelector("#valor2").value);
    let calc = (valor1 * valor2); // Cálculo da média
    let chuva = document.querySelector("span"); // Declaração do resultado pra tag <span>
    chuva.innerHTML = calc.toFixed(2); // Inserir média / Método toFixed para 2 casas
}

// Limpar inputs
function clear_inputs() {
    document.querySelector("#valor1").value = ""; // Limpar inputs
    document.querySelector("#valor2").value = "";
    document.querySelector("span").innerHTML = ""; // Limpar <span>
}
