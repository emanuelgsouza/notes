# Typescript

## Refências

* [Understanding TypeScript - 2020 Edition by Maximilian Schwarzmüller](https://www.udemy.com/course/understanding-typescript/)
* [Minicurso de TypeScript do Willian Justen](https://www.youtube.com/playlist?list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_)

## O que é o Typescript?

É um superset do JavaScript, isto é, é uma extensão do JavaScript que permite adicionar tipos a linguagem.

Além disso, TS:

* Adiciona **tipos**, como number, string entre outros, como também permite adicionar tipos criados pelo usuário.
* Permite usar novas features do JavaScript, e depois de compilado, o código funciona em browsers antigos
* Adiciona algumas funcionalidades não suportadas pelo JavaScript, mas conhecidas do universo OO, como *interfaces* e *generics*
* Permite a implementacao de meta programacao com *decorators*.
* Com o sistema de tipos, é possível usar ferramentas que ajudam no debug de código antes de compilá-lo

Uma das diferencas principais entre JS e TS está no fato de que em JavaScript os tipos são dinâmicos, enquanto que em TS os tipos são estáticos.

Um tipo em TS é assinalado à uma variável da seguinte maneira: `<NAME_OF_VARIABLE>: <TYPE>`. Exemplos:

```ts
const name: string = 'Emanuel'; // isto não é necessário porquê TS possui inferência de tipo

const add = (number1: number, number2: number) => {
  return number1 + number2;
}
```

## Porque adotar TypeScript?

* Evitar comportamentos inesperados.
* Avisa alguns possíveis erros de sintaxe no código.
* Com a tipagem estática, eu possuo uma documentação do meu código como um todo.

## Desvantagens do JavaScript

* Necessita ser compilado (mais um passo no processo)
* Curva de aprendizagem e dificuldade em aprender as boas práticas
* 

## Core Types

### Numbers

TS não diferencia tipos númericos, como *double integer* ou *floats*, como outras linguagens. `5` e `5.00` são tipos `number` da mesma forma.

Então, em TS:

```ts
// Permitido
let age = 30;
let age: number = 30;

// Não permitido
let age = '30'; // deverá me acusar um erro, porque age é do tipo number
```

### Strings

Textos como qualquer outro (entre `""`, `''`, ``);

```ts
// Permitido
let name = 'Emanuel';
let name: string = 'Emanuel';

// Não permitido
let name = 30;
```

### Booleans

Valores já conhecidos, `true` ou `falso`.

```ts
// Permitido
let married = true;
let married: boolean = true;

// Não permitido
let married = 30;
```

### Objects

Todo Object JS será object em TS, porém, TS poderá inferir os tipos automaticamente e não só isso, não permitir que se acesse propriedades que não existem no objeto.

```ts
// Permitido
// TS irá inferir os tipos e as propriedades do object
const emanuel = {
  name: 'Emanuel',
  age: 22,
  married: true
}
console.log(emanuel.name)

// Não permitido
console.log(emanuel.lastName)
```

Podemos ainda anotar o tipo de nossos objetos:

```ts
const emanuel: {
  name: string;
  age: number;
  married: boolean
} = {
  name: 'Emanuel',
  age: 22,
  married: true
}
```

### Arrays

Todo array em JS será um array em TS. A sintaxe para anotação de um array é:

```ts
// variable: <TYPE>[]

// Aqui eu estou dizendo: languages é um array de strings.
// Neste caso, estou sendo específico
const languages: string[];
languages = ['JavaScript', 'Python', 'PHP'];

// Mas e como fazer com que eu tenha uma Array mixado?
// Não é recomendado!
const languagesAny: any[];
languagesAny = ['JavaScript', 'Python', 'PHP', true, 30];
```

### Tuplas

Tuplas em TS são usadas para indicar um conjunto de elementos com tamanho definido. Quando compilado, ele vira um array.

```ts
let tuple: [number, string, boolean];

// Teremos consistência na quantidade de elementos
// As linhas abaixo não compilarão
tuple = [];
tuple = [1];
tuple = [1, ''];

// Teremos consistência na hora de acessar os elementos
tuple[0] // ok
tuple[4] // not ok
```

### Enun

São tipos usados para enumerar valores constantes em nosso código. Por exemplo, podemos usá-lo quando precisamos trabalhar com permissões para um usuário.

Escrevemos Enums:

```ts
// Por padrão, cada role abaixo compilará ao final um número
enum Roles {
  ADMIN, // 0
  AUTHOR, // 1
  USER // 2
}

// Agora podemos usar o enum
const user = {
  name: 'Emanuel',
  role: Roles.ADMIN
}

// fazer comparacões
if (user.role === Roles.ADMIN) {}

// Podemos, no momento da criacão, atribuir valores
enum Roles {
  ADMIN = 5,
  AUTHOR = 'AUTHOR'
}
```

### Any

É o tipo que define que posso usar qualquer valor, qualquer tipo em alguma variável.

```ts
const data = any[]; // aqui estou definindo que meu array pode receber qualquer valor

// O compilador não irá acusar um erro
let data: any = 'Emanuel';
data = 9;
```

### Union

Unios são usados para unir dois tipos e combiná-los de maneira a expressar quais seriam os tipos específicos que uma variável poderia receber. Exemplo:

```ts
// estou dizendo que user pode ser um objeto com um name ou uma string
let user = { name: string } | string;

user = { name: 'Emanuel' }; // ok
user = 'Emanuel'; // ok
```

### Literals

Tipos literais usam os tipos comuns da linguagem JS e definem como uma constante uma variável.

Exemplo:

```ts
// como estou usando const, name se torna uma constante do tipo 'Emanuel'
const name = 'Emanuel';

// mesmo princípio
const age = 22;
```

### Type aliases

Em TS, é possível criar seu próprio tipo. Com isso, você precisará usar `type` para dizer ao TS que aquilo é um tipo criado por você. Ele é util para reaproveitamento de código.

```ts
// definindo um tipo usando Literal type e Union
type GENRE = 'M' | 'F';

type User = {
  name: string;
  age: number;
  genre: GENRE;
}

// definindo que emanuel é do tipo User
const emanuel: User = {
  name: 'Emanuel',
  age: 22,
  genre: 'M' // se eu tentar colocar 'D', por exemplo, será emitido um erro
}
```

### Function types

Funcões também podem ser tipos. Isso é útil para definirmos os tipos que uma funcão precisa receber, e o seu tipo de retorno.

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// aqui estamos definindo que a funcão plusFn será uma funcão
// que recebe dois argumentos e retorna um numero
const plusFn: (n1: number, n2: number) => number;

// o codigo abaixo irá compilar
plusFn = add;

// esse codigo não
plusFn = console.log;
```

### unknown

O tipo `unknown` é parecido com o `any`, porém mais específico, pois nos obriga a checar nosso código caso venhamos a tratar a variável com o tipo `unknown` como uma variável de um outro tipo específico.

```ts
const input: unknown;
let name: string;

// não é permitido
name = input;

// permitido
if (typeof input === 'string') {
  name = input;
}
```

### never

Este tipo define que uma funcão nunca irá retornar nada ou é uma funcão que levanta uma excessão. Ele é mais especícifo que `void`.

```ts
function error(message: string): never {
  throw new Error(message);
}
```

### Classes

As classes em TS seguem o conceito de Classes do paradigma de Programação Orientação a Objeto. O resultado compilado depende de qual o target de compatibilidade é exigido:

* Se `es6`, a classe será transformada em apenas uma classe normal do JavaScript, mas sem as notações de tipo
* Se `es5`, a classe será transformada em uma função construtora.

A sintaxe para definição de classe é:

```ts
class User {
  name: string;
  age: number;

  constructor (n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const emanuel = new User('Emanuel', 22);
```

TS usa os mesmos conceitos da OOP:

* Herança
* Classes Abstratas
* Métodos estáticos
* Restrições de acesso como `public`, `private` e `protected`

Há uma diferenciação necessária. TS adiciona também como restrição de acesso o `readonly`, que marca que um determinado atributo de um objeto não pode ser modificado

```ts
class User {
  readonly name: string;
  private age: number;

  constructor (n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const emanuel = new User('Emanuel', 22);
emanuel.name = 'Emanuel Gonçalves'; // não é possível
```

### Interfaces

Interfaces são formas de definição de contratos em Typescript. Portanto, com uma interface podemos definir os tipos de dados que um determinado objeto precisará ter, como também a assinatura de uma função.

Interfaces também são úteis para descrever o **contrato de uso de uma biblioteca externa**, ou de uma aplicação.

Basicamente uma interface terá o seguinte formato:

```ts
interface UserInterface {
  name: string;
  birthday: string;

  // declarando o contrato de um método
  calculateAge(year: number): number;

  // valores opcionais
  friends?: string[];

  // definindo que a interface pode ter outros campos não declarados
  [propName: string]: number;
}

const emanuel: UserInterface = { name: 'Emanuel', birthday: '1997-08' };
console.log(emanuel);
```

#### Function Interfaces

É possível definir interfaces para funções, que descrevem quais argumentos uma função precisará receber como também o seu tipo de retorno:

```ts
interface User {
  name: string;
}

interface GetUser {
  (name: string): User;
}

const users: ReadonlyArray<User> = [];

let getUserIm: GetUser;
getUserIm = (name) => {
  const usersFound = users.filter(user => user.name === name);
  return usersFound.length > 0 ? usersFound[0] : { name: '' };
};
```

#### Implement

É possível que interfaces extendam outras interfaces, e ainda múltiplas interfaces

```ts
interface Animal {
  name: string;
}

interface Human extends Animal {}

interface Dog extends Animal {}
```

### Type Guards

[Ref](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)

*Type Guards* (proteção de tipo), em Typescript, são expressões que são executadas em *runtime* e que garantem que se está trabalhando com um determinado tipo. Eles são dos seguintes tipos:

* Usando `typeof` para checar se um tipo é string, number entre outros.
* Usando o operador `in` para checar se uma propriedade ou método existe num objeto.
* Usando o operador `instanceof` para checar se uma variável é instância de uma classe

### Index types

[Ref](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types)

São usados para definir ao Typescript que uma determinada interface possui propriedades dinâmicas, ou seja, não queremos ser explícitos com relação à isso.

```ts
interface User {
  name: string;

  [prop: string]: string;

  // como eu defini que aqui as propriedades serão strings e os tipos de retorno strings
  // eu não posso definir a propriedade abaixo
  id: number;
}
```

### Function Overloads

[Ref](https://www.typescriptlang.org/docs/handbook/functions.html#overloads)

É um mecanismo que permite sobrescrever a assinatura de uma função e deixá-la mais rica e inteligente.

```ts
type Numeric = string | number;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Numeric, b: Numeric) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }

  return a + b;
}
```
