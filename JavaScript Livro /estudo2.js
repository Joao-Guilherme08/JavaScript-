3 – 2 // => 1: subtração
3 * 2 // => 6: multiplicação
3 / 2 // => 1.5: divisão
points[1].x – points[0].x // => 1: operandos mais complicados também funcionam
"3" + "2" // => "32": + soma números, ou concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0; // Define uma variável
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // Soma 2: o mesmo que count = count + 2;
count *= 3; // Multiplica por 3: o mesmo que count = count * 3;
count // => 6: nomes de variáveis também são expressões.

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos.
var x = 2, y = 3; // Esses sinais = são atribuições e não testes
// de igualdade.
x == y // => falso: igualdade
x != y // => verdadeiro: desigualdade
x < y // => verdadeiro: menor que
x <= y // => verdadeiro: menor ou igual a
x > y // => falso: maior que
x >= y // => falso: maior ou igual a
"two" == "three" // => falso: as duas strings são diferentes
"two" > "three" // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y) // => verdadeiro: falso é igual a falso

// Os operadores lógicos combinam ou invertem valores booleanos
(x == 2) && (y == 3) // => verdadeiro: as duas comparações são verdadeiras. &&
// é E
(x > 3) || (y < 3) // => falso: nenhuma das comparações é verdadeira. || é OU
!(x == y) // => verdadeiro: ! inverte um valor booleano

Uma função é um bloco de código JavaScript nomeado e parametrizado que você define uma vez
e, então, pode chamar repetidamente. As funções não serão abordadas formalmente até o Capítulo
8, Funções, mas, assim como os objetos e arrays, você vai vê-las muitas vezes antes de chegar a esse
capítulo. Aqui estão alguns exemplos simples:
// As funções são blocos de código JavaScript parametrizados que podemos chamar.
function plus1(x) { // Define uma função chamada "plus1", com o parâmetro "x"
return x+1; // Retorna um valor uma unidade maior do que o que foi passado
} // As funções são incluídas entre chaves

plus1(y) // => 4: y é 3; portanto, essa chamada retorna 3+1
var square = function(x) { // As funções são valores e podem ser atribuídas a
 // variáveis
 return x*x; // Calcula o valor da função
}; // Um ponto e vírgula marca o fim da atribuição.
square(plus(y)) // => 16: chama duas funções em uma única expressão

Quando combinamos funções com objetos, obtemos métodos:
// Quando funções recebem as propriedades de um objeto, as
// chamamos de "métodos". Todos os objetos de JavaScript têm métodos:
var a = []; // Cria um array vazio
a.push(1,2,3); // O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao
// objeto no qual o método é definido: neste caso, o array de pontos anterior.
points.dist = function() { // Define um método para calcular a distância entre
    // pontos
    var p1 = this[0]; // Primeiro elemento do array que chamamos
    var p2 = this[1]; // Segundo elemento do objeto "this"
    var a = p2.x-p1.x; // Diferença em coordenadas X
    var b = p2.y-p1.y; // Diferença em coordenadas Y
    return Math.sqrt(a*a + // O teorema de Pitágoras
    b*b); // Math.sqrt() calcula a raiz quadrada
   };
   points.dist() // => 1,414: distância entre nossos 2 pontos


   Agora, conforme prometido, aqui estão algumas funções cujos corpos demonstram instruções de
estruturas de controle JavaScript comuns:
// As instruções JavaScript incluem condicionais e laços que usam a sintaxe
// das linguagens C, C++, Java e outras.
function abs(x) { // Uma função para calcular o valor absoluto
 if (x >= 0) { // A instrução if...
 return x; // executa este código, se a comparação for
 // verdadeira.
 } // Este é o fim da cláusula if.
 else { // A cláusula opcional else executa seu código se
 return -x; // a comparação for falsa.
 } // Chaves são opcionais quando há 1 instrução por
 // cláusula.
} // Observe as instruções return aninhadas dentro de
 // if/else.

 function factorial(n) { // Uma função para calcular fatoriais
    var product = 1; // Começa com o produto de 1
    while(n > 1) { // Repete as instruções que estão em {}, enquanto a
    // expressão em () for verdadeira
    product *= n; // Atalho para product = product * n;
    n--; // Atalho para n = n – 1
    } // Fim do laço
    return product; // Retorna o produto
   }
   factorial(4) // => 24: 1*4*3*2


   function factorial2(n) { // Outra versão, usando um laço diferente
    var i, product = 1; // Começa com 1
    for(i=2; i <= n; i++) // Incrementa i automaticamente, de 2 até n
    product *= i; // Faz isso a cada vez. {} não é necessário para laços
    // de 1 linha
    return product; // Retorna o fatorial
   }
   factorial2(5) // => 120: 1*2*3*4*5
