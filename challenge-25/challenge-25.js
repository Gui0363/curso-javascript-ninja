(function(win, doc) {
  "use strict";

  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  var $btn1 = document.querySelector('[data-js="btn1"]');
  var $h11 = document.querySelector('[data-js="h11"]');

  $btn1.addEventListener(
    "mouseenter",
    function(event) {
      event.preventDefault();
      console.log("aqui ta quente");
    },
    false
  );

  $btn1.addEventListener(
    "mouseout",
    function(event) {
      event.preventDefault();
      console.log("aqui ta frio");
    },
    false
  );

  $h11.addEventListener(
    "mouseenter",
    function(event) {
      event.preventDefault();
      console.log("muito quente");
    },
    false
  );

  $h11.addEventListener(
    "mouseout",
    function(event) {
      event.preventDefault();
      console.log("muito frio");
    },
    false
  );

})(Window, Document);
