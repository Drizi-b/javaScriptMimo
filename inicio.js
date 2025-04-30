// let e const => para definir variáveis
// let => definir com palavra única, sem espaço. Ex.: let nome, let idade...
// Para juntar mais de uma palavra no nome utilizar o metodo camelCase. Ex.: bomDia
// let é uma variável, isto é, varia. Const é uma constante, isto é, ñ varia, ñ muda, ñ aceita alterações.
// const => escolher nomes descritivos, não se pode alterar, usar camelCase ou opcionalmente letras MAIÚSCULAS. Ex.: const BIRTHDAY = "28/12/1975". Qdo utilizarmos letras MAIÚSCULAS usaremos snake_case para nomear variáveis com múltiplas palavras. Ex.: SPEED_OF_LIGHT
// sempre colocar ponto e vírgula (;) para identificar o final do comando. 
// As palavras identificadas com aspas duplas ("") e/ou simples ('') são denominadas strings, podendo conter qlq caracter.
// const browser = "Chrome". Onde browser é a variável e Chrome é o valor atribuido a esta variável.

// O comando console.log() exibe na tela do PC as instruções contidas entre parênteses. console.log("Hello World!")
// Ex de como alterar uma variavel let (qtas vezes quiser):
let currentStatus = "Watching Netflix";
currentStatus = "Relaxing at the beach";
console.log(currentStatus);
// Podemos atribuir a uma variável o valor de outra. Ex.: let currentStatus = defaultStatus;

// Existem outros tipos de variáveis como números que ñ têm aspas ao redor.
// Podemos atribuir expressões às variáveis acrescentando +, -, * e /. Tanto com numerais qto com strings.
// Podemos armazenar resultados de cálculos em variáveis. Ex.: const private = 5; const public = 7; const total = private + public; console.log("Total posts: " + total);
// Podemos misturar vários tipos de variáveis. Ex.:
let userName = "Adriana";
let idade = 49;
console.log(userName + " " + idade);

// Booleanos são variáveis que identificam true ou false.
const isRaining = true;
const isSunny = false;
// O sinal de exclamação na frente de um booleano (true ou false) o transforma no seu oposto.
const isMorning = true;
console.log(!isMorning)
// Podemos salvar uma negação inteira em outra variável também:
const isMorning1 = true;
const isEvening = !isMorning1;
console.log(isEvening);

// Igualdade de números (===)
// console.log(10 === 13); resultado = false
// console.log(100 === 100); resultado = true

 const votes = 10;
 console.log(votes === 11);

// Desigualdade de números (!==)
console.log(1 !== 10); // => true

const result = 1 !== 2;
console.log(result);

const batteryLevel = 78;
const charged = batteryLevel === 100;
console.log(charged);

// Testando o conhecimento
// Qdo usar console.log() p/exibir o valor de uma variável? => Antes de criarmos a variável.
// Pq New York ñ é uma string? => Pq ñ há aspas ao redor.
// Complete: const spaceship ___ "Enterprise"; => =
// Exiba Atlanta no console. => console.log("Atlanta")
// Exiba o valor da string: const ingredients = "Sugar, spice and everything nice"; => console.log(ingredients);
// O que este cod exibe? let income = 1400; let savings = 900; savings = 1000; income = 1500; console.log(savings); => 1000
// Exiba goal menos milesRan: const goal = 5; const milesRan = 3; console.log("Miles left: "); console.log(); => goal - milesRan
// Garanta que true apareça no console: let loggedIn = false; console.log("Logged in: "); console.log(loggedIn); loggedIn = !false; console.log("Logged in: "); console.log(); => loggedIn

// Comparação com > ou <
// console.log(100 > 200); => false
// console.log(10 > 9); => true

// Comparação menor ou igual(<=), maior ou igual(>=)
// console.log(1 <= 3); => true
// console.log(11 <= 11); => true

// Diferentes "tipos" de valores
// string("A"), numero(49), boolean(true, false);

// Podemos usar + para juntar numeros e strings.
// Ex.: console.log("10" + "10"); => 1010.
// console.log(10 + 10); => 20.

// Operadores lógicos
// && (E) => retorna true se todas as condições forem true
// || (OU) => retorna true se pelo menos uma consição for true
// ! (NÃO) => retona o seu inverso. Ex.: podemos negar uma expressão inteira
let isBatteryOn = true;
let isPowerOn = false;
console.log(!(isBatteryOn && isPowerOn));

// If -> podemos escrever um código que se adapta a diferentes situações usando a instrução IF. Esta somente executa o código se o booleano for true.
// Desclarações IF decidem apenas sobre o bloco de código cujas instruções estão entre chaves {}
if (true) {
    console.log("I'm a code block!");
}

// Um programa de perguntas e respostas usa o operador === para verificar se a resposta de um partricipante está correta. IF funciona com todos os operadores de comparação.(>, >=, <, <=, ===, !==)
let answer = "Picasso";
if (answer === "Picasso") {
    console.log(answer + " is correct!")
}
let answer1 = "Matisse";
if (answer1 !== "Picasso") [
    console.log(answer1 + " is wrong!")
]

let isDay = true;
if (isDay) {
    console.log("Lights off!");
}

let hour = 14;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 17) {
    console.log("Good afternoon!");
} else if (hour < 21) {
    console.log("Good evening!")
} else {
    console.log("Good night!");
}

// while loop => faz o programa repetir o console.log qtas vezes quisermos.
// let define qdo começa a contagem, na condição while colocamos o limite e após o console.log podemos colocar de qtas em qtas vezes. Ex.:
let counter = 5; //começa no 5 e vai até 9, de 1 em 1
while (counter < 10) {
    console.log(counter);
    counter++;
} 

let contagem = 5; //começa no 6 e vai até 10, de 1 em 1
while (contagem < 10) {
    contagem++;
    console.log(contagem);
}
