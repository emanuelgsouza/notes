# Web Performance

## Como um website é carregado?

Em termos gerais, nós temos dois dispositivos principais que trabalham quando estamos lidando com desenvolvimento web:

* **Client ou Client Side (Lado do cliente)**: é o dispositivo que o usuário interage. Chamamos correntemente de *front-end*.
* **Server ou Server Side (Lado do servidor)**: é quem recebe as requisições do cliente, quem serve o conteúdo que queremos exibir. Correntemente chamamos de *back-end*.

Mas o que é o request? *Request*, ou solicitação, é o um pedido que o cliente faz de um conteúdo a um servidor. Na web, um *request* é do tipo HTTP (Hyper Text Transfer Protocol).

Quando navegamos a uma página web, por exemplo [emanuelgsouza.dev](emanuelgsouza.dev), o cliente (que na web também podemos chamar de browser), pede por uma página `index.html`. O servidor responde com a página HTML pedida e assim o browser começa a decodificar aquela página.

Em um determinado momento, o browser precisa pedir por um outro recurso, agora é o `index.css`, e assim ele faz mais um request ao servidor.

No meio da página, o browser verifica que existe uma imagem, `hero.png`, e também solicita ela ao servidor.

Por fim, no final da página, o browser verifica que há um outro arquivo externo: `index.js` e também o solicita ao browser.

Assim, de maneira geral, é como uma página web é carregada, decodificada e exibida ao usuário.

Algumas considerações:

* O HTML, bem como o CSS e o Javascript (JS) é decodificado de cima a abaixo, ou seja, linha a linha
* Algumas operações são bloqueantes, isto é, o browser, ao chegar numa linha, só passa para a de baixo, após a execução dela (por exemplo, carregar um script JS).

Referências:
* [Como os browsers processam seu HTML e CSS? | #1 Série Fundamentos](https://www.youtube.com/watch?v=OYQuPaGiQ6A)
* [Como os browsers funcionam](https://www.html5rocks.com/pt/tutorials/internals/howbrowserswork/)

## Boas práticas para performance

### Contexto do Network (comunicação entre client-server)

#### Minificação de código

Quanto antes, diminua o tamanho do seu código que vai para produção. Ao diminuir o tamanho dos arquivos, você ganha em velocidade, pois são menos bytes a seres transferidos na rede. Algumas ferramentas:

* Para HTML: [HTML Minifier](https://github.com/kangax/html-minifier)
* Para CSS: [nano](https://github.com/cssnano/cssnano), [CSSO](https://github.com/css/csso) e [CSS minifier](https://cssminifier.com/)
* Para JavaScript: [UglifyJS](https://github.com/mishoo/UglifyJS2)

#### Procure unificar seus assets

Em vez de termos inúmeros arquivos CSS e JS em seu projeto, procure uní-los em um único arquivo CSS e JS, pois isso facilitará na hora do browser fazer as requisições, pois não precisará fazer inúmeras requisições para montar uma tela

Porém, se atenha ao fato do arquivo final (CSS ou JS) ficar muito grande, pois isso também será um problema.

Para tanto, utilize ferramentas de bundlers. Exemplos:

* [Webpack](https://webpack.js.org/)
* [Browserify](http://browserify.org/)
* [Parcel](https://parceljs.org/).

### Trabalhando com imagens

#### Use os tipos de imagens corretas no momento correto

* [GIF, PNG, JPG or SVG. Which One To Use? - Sitepoint](https://www.sitepoint.com/gif-png-jpg-which-one-to-use/)
* [Image file formats: when to use each file type - 99Designs](https://en.99designs.com.br/blog/tips/image-file-types/)

#### Minimize suas imagens ao máximo

* Use alguma ferramenta de compressão (exemplos)
  * Para PNGs - [TinyPNG](https://tinypng.com/)
  * Para JPEGs - [TinyJPG](https://tinyjpg.com/)
* Use ferramentas como o [Page Weight da imgix](https://pageweight.imgix.com/) para verificar o quanto as imagens pesam o seu site
* Prefira usar SVGs e ícones quando não há a real necessidade de usar fotos e afins
* Prefira SVGs para ícones e pequenas ilustrações
* Dimensione suas imagens para cada contexto de aplicação (Desktop, Mobile e Tablet ao menos)
  * Uma das formas de usar isso em seu website é usando media queries para definir quando uma imagem deve ser mostrada ou não
* Procure diminuir a qualidade de suas imagens JPEGs quando possível (30%-60%)
* Remove metadados das suas imagens
  * O website [verexif](https://www.verexif.com/en/) mostra metadados suas imagens. Removê-las não só o faz ganhar em performance, mas também em segurança, removendo alguns dados importantes das suas imagens
* Procure usar um CDN de imagens, como o [imginx](https://www.imgix.com/)

## Critical Render Path

Como otimizar a renderização dos elementos no browser?

Primeiramente, é importante entender como funciona o processo de renderização:

* [Como os browsers processam seu HTML e CSS? | #1 Série Fundamentos](https://www.youtube.com/watch?v=OYQuPaGiQ6A)
* [Documentação da Mozilla - Em inglês](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)
* [Documentação do Google Developers - Em inglês](https://developers.google.com/web/fundamentals/performance/critical-rendering-path)

A seguir, alguns princípios gerais para cada recurso:

### HTML

1. Procure colocar a importação do CSS no `<head>`
2. Procure colocar a importação de scripts no final da tag `<body>`

### CSS

[Documentação da Mozilla sobre a tag link](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/link)

1. Carregue apenas o que você precisa
2. Use o atribute media para carregar apenas o script de que precisa
3. Procure não ter tanta [especificidade em seu CSS](https://medium.com/emanuelg-blog/entendendo-a-preced%C3%AAncia-de-estilo-em-css-especificidade-heran%C3%A7a-e-efeito-cascata-a437c4929173)

### JavaScript

[Documentacão do Google Developers sobre como carregar eficientemente bibliotecas de terceiros](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript)

1. Carregue scripts assincronamente
2. Use corretamente o atributo `deffer`
3. Minimize a manipulacão do DOM
4. Evite JavaScript bloqueante

## Recursos adicionais

* [Texto do CSS Tricks sobre Prefetching, preloading, prebrowsing](https://css-tricks.com/prefetching-preloading-prebrowsing/)
* [Documentacão oficial de como usar a aba Performance do DevTools do Chrome](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance)
* [Texto do Cloudfare sobre HTTP/3](https://blog.cloudflare.com/http3-the-past-present-and-future/)
* [Texto do Google Developers sobre HTTP/2](https://developers.google.com/web/fundamentals/performance/http2/)
