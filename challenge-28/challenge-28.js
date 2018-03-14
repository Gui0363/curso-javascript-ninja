(function(win, doc) {
  "use strict";
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  var ajax = new XMLHttpRequest();

  var $input = doc.querySelector('[data-js="cepVai"]');
  var $botao = doc.querySelector('[data-js="submit"]');
  var $jsonCep = [];

  var $cep = doc.querySelector('[data-js="cep"]');
  var $logradouro = doc.querySelector('[data-js="logradouro"]');
  var $complemento = doc.querySelector('[data-js="complemento"]');
  var $bairro = doc.querySelector('[data-js="bairro"]');
  var $cidade = doc.querySelector('[data-js="cidade"]');
  var $uf = doc.querySelector('[data-js="uf"]');
  var $unidade = doc.querySelector('[data-js="unidade"]');
  var $ibge = doc.querySelector('[data-js="ibge"]');
  var $gia = doc.querySelector('[data-js="gia"]');

  $botao.addEventListener(
    "click",
    function(event) {
      event.preventDefault();
      var $result = [];

      try {
        ajax.open("GET", "https://viacep.com.br/ws/" + $input.value + "/json/");
        ajax.send();
      } catch (error) {
        console.log(error);
      }

      ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          $cep.textContent = JSON.parse(this.responseText).cep;
          $logradouro.textContent = JSON.parse(this.responseText).logradouro;
          $complemento.textContent = JSON.parse(this.responseText).complemento;
          $bairro.textContent = JSON.parse(this.responseText).bairro;
          $cidade.textContent = JSON.parse(this.responseText).cidade;
          $uf.textContent = JSON.parse(this.responseText).uf;
          $unidade.textContent = JSON.parse(this.responseText).unidade;
          $ibge.textContent = JSON.parse(this.responseText).ibge;
          $gia.textContent = JSON.parse(this.responseText).gia;
        }
      };
    },
    false
  );
})(window, document);
