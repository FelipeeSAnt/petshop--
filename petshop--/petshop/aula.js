let valor1_txt = document.getElementById('valor1');
let valor2_txt = document.getElementById('valor2');
let total = document.getElementById("valortotal");
let valor1 = 60.00;
let valor2 = 150.00;

valor1_txt.innerHTML = valor1;
valor2_txt.innerHTML = valor2;
let valortotal = valor1 + valor2;
alert(valortotal);
total.innerHTML = valortotal;

