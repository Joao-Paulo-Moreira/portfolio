function insert(num)
{
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean()
{
   document.getElementById('resultado').innerHTML = "";
}

function back()
{
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
   var resultado = document.getElementById('resultado').innerHTML;
   if(resultado)
   {
      document.getElementById('resultado').innerHTML = eval(resultado);
   }
   else
   {
      document.getElementById('resultado').innerHTML = "ERROR"
   }
}

function activeFirstTheme () {
   document.getElementById("headerOne").style.color = "black"
   document.getElementById("newParagraph").style.color = "black"
   document.getElementById("backGround").style.backgroundColor = "#e6e6e6"
   document.getElementById("resultado").style.backgroundColor = "hsl(0, 0%, 93%)"
   document.getElementById("baseCalc").style.backgroundColor = "hsl(0, 5%, 81%)"
   document.getElementById("buttonDel").style.backgroundColor = "hsl(185, 42%, 37%)"
   document.getElementById("buttonReset").style.backgroundColor = "hsl(185, 42%, 37%)"
   document.getElementById("buttonCalc").style.backgroundColor = "hsl(25, 98%, 40%)"
}

function activeSecondTheme () {
   document.getElementById("headerOne").style.color = "white"
   document.getElementById("newParagraph").style.color = "white"
   document.getElementById("backGround").style.backgroundColor = "hsl(268, 75%, 9%)"
   document.getElementById("resultado").style.backgroundColor = " hsl(268, 71%, 12%)"
   document.getElementById("baseCalc").style.backgroundColor = " hsl(268, 71%, 12%)"
   document.getElementById("buttonDel").style.backgroundColor = "hsl(285, 91%, 52%)"
   document.getElementById("buttonReset").style.backgroundColor = "hsl(285, 91%, 52%)"
   document.getElementById("buttonCalc").style.backgroundColor = "hsl(177, 92%, 70%)"
}
