// Valores podem ser atribuídos às variáveis com o sinal =
x = 0; // Agora a variável x tem o valor 0
x // => 0: Uma variável é avaliada com seu valor.
// JavaScript aceita vários tipos de valores
x = 1; // Números.
x = 0.01; // Apenas um tipo Number para inteiros e reais.
x = "hello world"; // Strings de texto entre aspas.
x = 'JavaScript'; // Apóstrofos também delimitam strings.
x = true; // Valores booleanos.
x = false; // O outro valor booleano.

x = null; // Null é um valor especial que significa "nenhum valor".
x = undefined; // Undefined é como null.

//Dois outros tipos muito importantes que programas em JavaScript podem manipular são objetos e
//arrays. Esses são os temas do Capítulo 6, Objetos, e do Capítulo 7, Arrays, mas são tão importantes
//que você vai vê-los muitas vezes antes de chegar a esses capítulos.

// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
var book = { // Objetos são colocados entre chaves.
    topic: "JavaScript", // A propriedade "topic" tem o valor "JavaScript".
    fat: true // A propriedade "fat" tem o valor true.
   }; // A chave marca o fim do objeto.

   // Acesse as propriedades de um objeto com . ou []:
book.topic // => "JavaScript"
book["fat"] // => true: outro modo de acessar valores de propriedade.
book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade.

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0] // => 2: o primeiro elemento (índice 0) do array.
primes.lenght // => 4: quantidade de elementos no array.
primes[primes.lenght-1] // => 7: o último elemento do array.
primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11; // Ou altera um elemento existente por meio de atribuição.
var empty = []; // [] é um array vazio, sem qualquer elemento.
empty.lenght // => 0

// Os arrays e objetos podem conter outros arrays e objetos:
var points = [ // Um array com 2 elementos.
 {x:0, y:0}, // Cada elemento é um objeto.
 {x:1, y:1}
];
var data = { // Um objeto com 2 propriedades
 trial1: [[1,2], [3,4]], // O valor de cada propriedade é um array.
 trial2: [[2,3], [4,5]], // Os elementos dos arrays são arrays.
};
