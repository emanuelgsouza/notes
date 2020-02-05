---
title: Estrutura de Dados
---

# Estrutura de Dados

## Referências

As referências técnicas usadas neste documento são:

* Estrutura de dados, algoritmos, análise da complexidade e implementacoes em Java e C++ - Ana Fernanda Gomes Ascencio e Graziela Santos Araújo
* Estruturas de Dados e Seus Algoritmos - Jayme Luiz Szwarcfiter e Lilian Markenzon

## O que é estrutura de dados?

Segundo Cormen:

> Uma estrutura de dados é um meio para armazenar e organizar dados com o objetivo de facilitar o acesso e as modificações.

Ou seja, toda estrutura de dados visa a ter ao menos dois conceitos claros:

1. É necessário definir uma forma como os dados estarão dispostos na estrutura, por exemplo, quando temos uma pilha, os dados estão dispostos de maneira sequencial. Já quando temos uma árvore, a disposição dos dados já não é dessa maneira.
2. É necessário definir como irá ocorrer as operações de manipulação desses dados. Uma pilha possui uma regra para inserção e recuperação de um dado diferente da fila.

### Análise de algoritmo

Como medimos um algoritmo? Novamente Cormen nos ensina que analisar um algoritmo é prever os recursos que o mesmo irá utilizar. Mas quais recursos? Podemos enumerar ao menos dois, que para alguns seriam os mais relevantes:

* Memória alocada
* Tempo de execução

Portanto, ao analisarmos um algoritmo precisamos entender como ele irá consumir os recursos de que dispõe e assim traçar uma performance do mesmo. Estudar as estruturas de dados é relevante para uma melhor análise dos nossos algoritmos, **haja vista que cada estrutura possui sua própria forma de manipulação de dados**.

Por fim, podemos enumerar ao menos duas formas de análise de algoritmos, segundo Knuth:

* Um algoritmo em particular, quando análisamos o desempenho de um algoritmo para uma determinada tarefa
* Uma conjunto de algoritmos, quando temos uma tarefa e queremos identificar qual algoritmo performa melhor para a execução dela.

## Recursão

O que é recursão? Dizemos que todo *procedimento* (para os mais familiarizados com programação, seria a boa e velha função) **que possui ao menos uma chamada para si mesmo dentro de seu corpo**. Todo procedimento, recursivo ou não, precisa de ao menos uma chama externa, que inicializa a execução da função recursiva. Implicitamente, ao usarmos uma recursão, estamos usando uma estrutura de dados chamada pilha. Um outro elemento importantíssimo de toda recursão chama-se **condição de parada**, sem ela, o procedimento entraria em loop.

Quais as vantagens de se usar recursão?

* Algoritmos mais concisos, e simples de entender
* Provas de correção mais simples

A seguir, ilustramos um exemplo de recursão conhecido, o *cálculo de fatorial*:

```sh
funcao fatorial(n):
  se (n <= 1):
    retorna 1
  
  retorna n * fatorial(n - 1)
```

Em código JavaScript, ficaria:

```js
const fatorial = n => {
  if (n <= 1) {
    return 1
  }

  return n * fatorial(n - 1)
}
```

Vamos investigar em detalhes o exemplo em pseudo código:

* Primeiramente definimos uma função `fatorial`.
* Dentro dela, temos uma condição de parada, que é quando `n` (argumento da função) é igual ou menor a 1.
* Por fim, sendo a condição de parada não atendida, retornamos a execução da função `fatorial` com o valor de `n` decrementado.

## Complexidade de Algorítmos

### Avaliacão do tempo e espaco em análise de algoritmos

Dois fatores são analisados num algoritmo:

1. **Tempo** que ele demora para executar uma determinada tarefa
2. **Espaco** que ele irá consumir para a execucão

#### O tempo

O tempo se tornou relevante haja vista o fato de que cada vez mais se busca resolver problemas complexos em menor tempo. Hoje com o advento do Big Data, há uma necessidade cada vez maior de se desenvolver algoritmo para análise de dados - e que grandes dados - num tempo razoável.

#### O espaco

Computacionalmente, o espaco representa a memória. Sendo assim, é claro a evolucão histórica de que no passado as memórias eram muito limitadas, de maneira que o espaco que um algoritmo usava era extremamente escaco e merecia os devidos cuidados. Hoje tal preocupacão inexiste, pois as memórias se tornaram um recurso virtualmente ilimitado.

#### Como avaliar o tempo?

* Método empírico:
  * Baseado na medicão da execucão do tempo
  * Depende do hardware, compilador, linguagem entre outros
  * Permitem um tratamento estatístico, isto é, posso fazer inúmeros testes e calcular uma média, por exemplo
* Método analítico
  * Determinacão de expressões matemáticas para a estimacão do comportamento do tempo do meu algoritmo
  * Independe dos recursos disponíveis

### Método analítico

Alguns princípios são adotados quando usamos o método analítico

* Sempre partimos do princípio de recebermos quantidades de dados absurdamente grandes
* Quando da criacão da expressão matemática, desconsideramos constantes aditivas e multiplicativas. Exemplo: numa equacão como `n2 + 5n` excluímos o valor de `5n` pois a funcão em sí girará em torno do valor de maior expoente, no caso `n2`.
* O objetivo será exprimir o tempo de execucão em funcão da entrada

Mas como chegamos a nossa funcão?

* Primeiramente, precisamos definir os passos do nosso algoritmo, que são as operacões básicas que ele realiza
* Cada passo, portanto, terá um tempo constante
* A operacão básica que é mais executada é chamada de "operacão dominante". Exemplo: em algorimos de ordenacão geralmente a operacão dominante é a de comparacão
* Sendo assim, nosso objetivo é definir uma funcão que exprime a ordem de grandeza de números de passos de um algoritmo, dado uma entrada

### Complexidade de tempo

Dado o método analítico, temos que é possível calcular a ordem de grandeza de nossos algoritmos. Mas como calcular o tempo? Como saber se um algoritmo performa melhor que o outro em termos de tempo? Para tanto, precisamos fazer a análise de complexidade de tempo

Alguns conceitos são importantes a se mencionar:

1. O ideial é sabermos a quantidade de passos dado a entrada
2. No mundo real, isso é impossível
3. Portanto, precisamos escolher algumas quantidades de entrada "representativas".

O que seriam entradas representativas? Seriam as entradas que representam alguns cenários da vida real, tais cenários são o que chamamos de complexidade

#### Complexidade de pior caso

* O número de entradas é desfavorável, quero saber como a coisa irá se comportar quando a entrada for muito grande
* Tende ao infinito, já que pressupomos que nosso algoritmo receba infinita quantidade de entradas
* Quase sempre é relevante e certamente é mais utilizada

#### Complexidade de melhor caso

* O número de entradas é favorável
* Menos utilizada, apenas em momentos específicos

#### Complexidade de médio caso

* O número de entradas será uma probabilidade
* Exige tratamento matemático, pois eu preciso saber a distribuicão de probabilidade das entradas possíveis para o meu algoritmo para definir a entrada mais comum