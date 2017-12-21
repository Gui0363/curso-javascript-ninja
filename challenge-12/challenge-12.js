(function () {
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
  // DONE

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
  var person = {
    name: "Guilherme",
    lastname: "Souza",
    age: 24
  };

  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
  var resu = Object.keys(person);
  console.log('Propriedades de "person": ', resu);

  /*
Crie um array vazio chamado `books`.
*/
  var books = [];

  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  books.push({
    'name': 'Anjos e Demônios',
    'pages': 30
  }, {
    'name': 'Origem',
    'pages': 50
  }, {
    'name': 'Desplugado',
    'age': 70
  });

  /*
Mostre no console todos os livros.
*/
  console.log("\nLista de livros: ", books);

  /*
Remova o último livro, e mostre-o no console.
*/
  var retirei = books.pop();
  console.log("\nLivro que está sendo removido: ", retirei);


  /*
Mostre no console os livros restantes.
*/
  console.log("\nAgora sobraram somente os livros:", books);

  /*
Converta os objetos que ficaram em `books` para strings.
*/
  var stringado = JSON.stringify(books);

  /*
Mostre os livros nesse formato no console:
*/
  console.log("\nLivros em formato string: ", stringado);

  /*
Converta os livros novamente para objeto.
*/
  var desinstrigado = JSON.parse(stringado);
  console.log("\nAgora os livros são objetos novamente: ", desinstrigado);

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
  for (var prop in books) {
    for (var prop2 in books[prop]) {
      console.log(prop2 + ': ' + books[prop][prop2]);
    }
  }

  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  var myName = ['G', 'u', 'i', 'l', 'h', 'e', 'r', 'm', 'e'];
  console.log("\nMeu nome é: " + myName.join(''));

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  // ?

  console.log("\nMeu nome invertido é: " + myName.reverse().join(''));

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  // ?

  console.log("\nAgora em ordem alfabética: " + myName.sort().join(''));
  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  // ?
})();
