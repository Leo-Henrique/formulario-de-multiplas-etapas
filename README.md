# Formulário de múltiplas etapas utilizando Context API com React | Desafio do Frontend Mentor

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/227332098-866bf6ad-d8fe-4e37-87b4-72b0aee557f7.gif"
	alt="Visualização da página inicial da projeto" />
</div>

## 🔎 Visão geral

O gerenciamento de estado com a **Context API** do React é essencial e o foco neste projeto, onde é necessário guardar as informações que o usuário insere nos campos e exibi-las no resumo da compra, por exemplo.

Um hook customizado para formulário muito comum no React também pode ser aproveitado neste projeto para validar as informações com **expressões regulares**!

### 🔗 Acesse o projeto

* [Site ao vivo](https://leo-henrique.github.io/formulario-de-multiplas-etapas/)
* [Desafio no Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ)

### 💻 Principais tecnologias / recursos

* [React](https://react.dev/)
* [Context API](https://react.dev/learn/passing-data-deeply-with-context)
* [Vite](https://vitejs.dev/)
* [leo-react-app](https://github.com/Leo-Henrique/leo-react-app)

## 💡 Aprendizados e principais recursos

### Context API

Como este projeto é um formulário de etapas e informações (estados) são setadas e mostradas em componentes diferentes, a Context API se tornou muito útil para guardar as informações escolhidas e exibi-las nas principais situações:

* quando o usuário volta para a etapa anterior;
* quando o usuário visualiza o resumo da "compra" na etapa final.

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/227340513-c86bf088-5a0b-4588-b062-ab148f03a780.gif"
	alt="Resultado do gerenciamento de estado com Context API" />
</div>

### useForm hook

O hook customizado **useForm**, bastante comum no React, é muito útil para tornar os campos do formulários reativos e validar os campos caso seja necessário, podendo ser reutilizado em qualquer campo de texto e poupando bastante linhas de código.

A função a seguir faz parte do hook e é utilizada para a validação, onde a mesma é retornada na função do hook e pode ser utilizada para validar os campos na situação que for conveniente para o projeto:
```js
const validate = ()  => {
    if (!type) return true;

    if (!value.length) {
        setError("Este campo é obrigatório!");
        return false;
    } else if (types[type] && !value.match(types[type].regex)) {
        setError(types[type].message);
        return false;
    } else {
        setError(null);
        return true;
    }
}
```
<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/227344420-ef22dc23-a6d4-4d2f-9d1e-d5c395b4b36b.gif"
	alt="Validação dos campos do formulário" />
</div>

### Regex

Para aproveitar ainda mais o hook useForm, criei três regex com alguns padrões comuns para o formulário. As regex ficam em um objeto no mesmo arquivo do useForm hook e é utilizada na função mostrada anteriormente.

Os principais conceitos de regex que utilizei são:

* classes de caracteres
* âncoras
* quantificadores
* flags

```js
const msg = (type) => `Por favor, digite um ${type} válido!`;
const types = {
    name: {
        regex: /^[a-zÀ-öù-Ź]+$/gi,
        message: msg("nome"),
    },
    email: {
        regex: /^[\w\-.]+@[a-z]+\.+[a-z]+(\.[a-z]+)?$/gi,
        message: msg("e-mail"),
    },
    tel: {
        regex: /^\(?(\d{2})?\)?\s?9\d{4}\s?-?\d{4}$/g,
        message: msg("número de telefone"),
    }
}
```

<div align="center">
	<img src="https://user-images.githubusercontent.com/72027449/227349389-48d269bc-7c0d-4243-a540-0766e55aa7c3.gif"
	alt="Expressões regulares nos campos do formulário" />
</div>