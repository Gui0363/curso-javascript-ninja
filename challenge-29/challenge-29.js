(function (win, doc) {
  "use strict";

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  var $imagem = doc.querySelector("[data-js='imagemNC']");
  var $marcaModelo = doc.querySelector("[data-js='marcaModeloNC']");
  var $ano = doc.querySelector("[data-js='anoNC']");
  var $placa = doc.querySelector("[data-js='placaNC']");
  var $cor = doc.querySelector("[data-js='corNC']");
  var $btnCadastrar = doc.querySelector("[data-js='btnCadastrar']");

  var $tabelaListagemCarros = doc.querySelector("[data-js='listagemCarro']");

  $btnCadastrar.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      var linha = doc.createElement("TR");
      var imagem1 = doc.createElement("IMG");
      var marcaModelo1 = doc.createElement("TH");
      var ano1 = doc.createElement("TH");
      var placa1 = doc.createElement("TH");
      var cor1 = doc.createElement("TH");

      var imagemInfo = doc.createTextNode($imagem.value);
      var imageInfoTxt = imagemInfo.nodeValue;
      var marcaModeloInfo = doc.createTextNode($marcaModelo.value);
      var anoInfo = doc.createTextNode($ano.value);
      var placaInfo = doc.createTextNode($placa.value);
      var corInfo = doc.createTextNode($cor.value);

      imagem1.setAttribute("src", imageInfoTxt);
      marcaModelo1.appendChild(marcaModeloInfo);
      ano1.appendChild(anoInfo);
      placa1.appendChild(placaInfo);
      cor1.appendChild(corInfo);

      linha.appendChild(imagem1);
      linha.appendChild(marcaModelo1);
      linha.appendChild(ano1);
      linha.appendChild(placa1);
      linha.appendChild(cor1);

      $tabelaListagemCarros.appendChild(linha);
    },
    false
  );
})(window, document);
