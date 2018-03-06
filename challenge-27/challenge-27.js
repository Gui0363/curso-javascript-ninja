(function(win, doc) {
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  function DOM(elements) {
    this.classe = document.querySelectorAll(elements);
    this.array = Array.from(this.classe);

    this.on = function(acao, funcao) {
      Array.prototype.forEach.call(this.classe, function(classe) {
        classe.addEventListener(acao, funcao, false);
      });
    };

    this.off = function(acao, funcao) {
      Array.prototype.forEach.call(this.classe, function(classe) {
        classe.removeEventListener(acao, funcao, false);
      });
    };

    this.get = function() {
      return this.classe;
    };

    this.forEach = function forEach() {
      return Array.prototype.forEach.apply(this.classe, arguments);
    };

    this.map = function map() {
      return Array.prototype.map.apply(this.classe, arguments);
    };

    this.filter = function filter() {
      return Array.prototype.filter.apply(this.classe, arguments);
    };

    this.reduce = function reduce() {
      return Array.prototype.reduce.apply(this.classe, arguments);
    };

    this.reduceRight = function reduceRight() {
      return Array.prototype.reduceRight.apply(this.classe, arguments);
    };

    this.every = function every() {
      return Array.prototype.every.apply(this.classe, arguments);
    };

    this.some = function some() {
      return Array.prototype.some.apply(this.classe, arguments);
    };

    DOM.isArray = function(obj) {
      return console.log(
        Object.prototype.toString.call(obj) === "[object Array]"
      );
    };

    DOM.isObject = function(obj) {
      return console.log(
        Object.prototype.toString.call(obj) === "[object Object]"
      );
    };

    DOM.isFunction = function(obj) {
      return console.log(
        Object.prototype.toString.call(obj) === "[object Function]"
      );
    };

    DOM.isNumber = function(obj) {
      return console.log(
        Object.prototype.toString.call(obj) === "[object Number]"
      );
    };

    DOM.isString = function(obj) {
      return console.log(
        Object.prototype.toString.call(obj) === "[object String]"
      );
    };

    DOM.isBoolean = function(obj) {
      return console.log(
        Object.prototype.toString.call(obj) === "[object Boolean]"
      );
    };

    DOM.isNull = function(obj) {
      return console.log(
        Object.prototype.toString.call(obj) === "[object Null]"
      );
    };
  }

  var $a = new DOM('[data-js="link"]');
  $a.on("click", function(e) {
    e.preventDefault();
    console.log("clicou");
  });

  $a.forEach(function(item) {
    console.log(item);
  });
})(Window, Document);
