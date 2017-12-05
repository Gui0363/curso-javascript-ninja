# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x) {
return !!x;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(null);
isTruthy(undefined);
isTruthy(false);
isTruthy(NaN);
isTruthy(0);
isTruthy(-0);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(12);
isTruthy(21);
isTruthy(42);
isTruthy(100);
isTruthy(200);
isTruthy(300;
isTruthy(1000);
isTruthy(-10);
isTruthy(-45);
isTruthy(1);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    placa: 'FOX-1993',
    ano: 1997,
    cor: 'Red',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(novaCor) {
    carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obeterModelo = function() {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    return 'Esse carro é um ' + carro.obterMarca() + ' ' +  carro.obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(add) {

var carroLotado = false;
var pessoasNoCarro = carro.quantidadePessoas;
var pessoasAindaCabem = 5 - carro.quantidadePessoas;

carro.quantidadePessoas === 5 && pessoasNoCarro + add >= 5 ? carroLotado = true : carroLotado = false;

carroLotado ? 'O carro já está lotado!' : carroLotado = false ;

add > pessoasAindaCabem ?
console.log('Só cabem mais ' + pessoasAindaCabem + ' pessoas!') :
pessoasAindaCabem === 1 ?
console.log('Só cabe mais 1 pessoa') :
add <= pessoasAindaCabem ?
carro.quantidadePessoas += add :
console.log('Não consegui fazer nada, há um erro') ;

return 'Temos ' + carro.quantidadePessoas + ' pessoas no carro!'

};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // Red;

// Mude a cor do carro para vermelho.
carro.mudaCor('Vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // Vermelho;

// Mude a cor do carro para verde musgo.
carro.mudaCor('Verde Musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // Verde Musgo;

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // Esse carro é Fiat Uno;

// Adicione 2 pessoas no carro.
carro.addPessoas(2); // Tem 2 pessoas no carro;

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4); // Só cabem mais 3 pessoas no carro; Tem 2 pessoas no carro;

// Faça o carro encher.
carro.addPessoas(3); // Tem 5 pessoas no carro;

// Tire 4 pessoas do carro.
carro.addPessoas(-4); // Tem 1 pessoas no carro;

// Adicione 10 pessoas no carro.
carro.addPessoas(10); // Só cabem mais 4 pessoas no carro; Tem 1 pessoa no carro;

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 1
```
