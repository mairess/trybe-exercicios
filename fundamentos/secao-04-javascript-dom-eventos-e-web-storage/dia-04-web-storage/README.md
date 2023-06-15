# <p align="center">Exercícios - agora, a prática</p>

## Exercício - Aplicando o DOM e Web Storage

Imagine que você precisa desenvolver uma nova funcionalidade em uma aplicação. A pessoa usuária deve conseguir salvar suas preferências de configuração da página. Até o momento a página se parece com a imagem abaixo:

![a98751e1-058b-4a35-a527-a762e3bd494d-Referência do leitor de conteúdos](https://github.com/mairess/trybe-exercicios/assets/130297266/abd93b7e-b6ba-4c8b-9c12-1bbd81b4e627)

Para realizar o exercício, crie três arquivos com os nomes `index.html`, `style.css` e `script.js`. Utilize os códigos a seguir:

`index.html`

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Leitor</title>
  <script src="./script.js"></script>
</head>
<body>
  <section class="preferences">
    <section id="background-color" class="options">
      <span>Cor de fundo</span>
      <button>white</button>
      <button>black</button>
      <button>green</button>
      <button>blue</button>
      <button>yellow</button>
    </section>
    <section id="font-color" class="options">
      <span>Cor da fonte</span>
      <button>black</button>
      <button>red</button>
      <button>white</button>
    </section>
    <section id="font-size" class="options">
      <span>Tamanho da fonte</span>
      <button>8pt</button>
      <button>10pt</button>
      <button>12pt</button>
      <button>14pt</button>
      <button>20pt</button>
    </section>
    <section id="line-height" class="options">
      <span>Espaçamento entre as linhas</span>
      <button>1</button>
      <button>normal</button>
      <button>1.5</button>
      <button>2.0</button>
      <button>3.0</button>
    </section>
    <section id="font-family" class="options">
      <span>Tipo da fonte</span>
      <button>Arial</button>
      <button>Times New Roman</button>
    </section>
  </section>
  <main>
    <section class="title">
      <h1>Lorem Ipsum</h1>
    </section>
    <section class="description">
      <h3>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
    </section>
    <article class="content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tellus purus. Sed blandit nec duit eu lacinia. Vestibulum tincidunt hendrerit turpis, vitae hendrerit ipsum mollis at. Nulla a leo purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ac tellus at ante ullamcorper finibus. Sed efficitur risus sit amet diam fringilla sagittis. 
      </p>
    </article>
  </main>  
</body>
</html>
```

`style.css`

```
body {
  margin: 10px;
}
.preferences {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid green;
}
.options {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
}
.paragraph {
  display: flex;
}
```

`script.js`

```
window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
  }

  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color
    }
  }

  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
  }

  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height
    }
  }

  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
  }

  // Cor de fundo da tela;
  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  // Cor do texto;
  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML)
    })
  }

  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML)
    })
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML)
    })
  }

  // Tipo da fonte (_Font family_).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML)
    })
  }
}
```
Agora implemente o código para que a pessoa usuária possa salvar suas preferencias de acordo com os exercícios a seguir:

### Exercício 1
Armazene a cor de fundo escolhida pela pessoa usuária no navegador.

### Exercício 2
Armazene a cor do texto escolhida pela pessoa usuária no navegador.

### Exercício 3
Armazene o tamanho da fonte escolhida pela pessoa usuária no navegador.

### Exercício 4
Armazene o espaçamento entre as linhas do texto escolhido pela pessoa usuária no navegador.

### Exercício 5
Armazene o tipo da fonte _(Font family)_ escolhida pela pessoa usuária no navegador.

### Exercício 6
Ao retornar à página, as preferências que foram salvas devem ser mantidas na tela.

``` 
Bônus ⭐️: As propriedades descritas acima são obrigatórias, mas você é livre para adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo melhorar a experiência da pessoa que lê em sua página.
```
