(function(doc, win) {
  "use strict";
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

  var $tela = doc.querySelector("[data-js='tela']");
  var $btnsNumber = doc.querySelectorAll("[data-js='btnN']");
  var $btnCE = doc.querySelector("[data-js='btnCE']");
  var $btnResult = doc.querySelector("[data-js='btnResult']");
  var $btnsO = doc.querySelectorAll("[data-js='btnO']");

  $btnsO.forEach(function(item) {
    item.addEventListener(
      "click",
      function() {
        $tela.value = removerUltimoItemSeForOperador($tela.value);
        $tela.value = $tela.value + item.value;
      },
      false
    );
  });

  $btnsNumber.forEach(function(item) {
    item.addEventListener(
      "click",
      function() {
        $tela.value = $tela.value + item.value;
      },
      false
    );
  });

  $btnCE.addEventListener(
    "click",
    function() {
      $tela.value = "";
    },
    false
  );

  $btnResult.addEventListener(
    "click",
    function() {
      $tela.value = removerUltimoItemSeForOperador($tela.value);
      var allValues = $tela.value.match(/\d+[+-x÷/]?/g);
      $tela.value = allValues.reduce(function(acumulado, atual) {
        var firstValue = acumulado.slice(0, -1);
        var operator = acumulado.split("").pop();
        var lastValue = removerUltimoItemSeForOperador(atual);
        var lastOperator = ultimoItemOperador(atual) ? atual.split("").pop() : false;
        switch (operator) {
          case "+":
            return Number(firstValue) + Number(lastValue) + lastOperator;
          case "-":
            return Number(firstValue) - Number(lastValue) + lastOperator;
          case "÷":
            return Number(firstValue) / Number(lastValue) + lastOperator;
          case "x":
            return Number(firstValue) * Number(lastValue) + lastOperator;
        }
      });
    },
    false
  );

  function ultimoItemOperador(number) {
    var operadores = ["+", "-", "*", "/"];
    var lastItem = number.split("").pop();
    return operadores.some(function(operador) {
      return operador === lastItem;
    });
  }

  function removerUltimoItemSeForOperador(number) {
    if (ultimoItemOperador(number)) {
      return number.slice(0, -1);
    }
    return number;
  }
})(document, window);
