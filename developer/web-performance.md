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
