## CADASTROZADAA


Projeto de Formulário de Cadastro Completo
Este projeto consiste na criação de um formulário de cadastro utilizando HTML, CSS e JavaScript. Ele faz parte de uma tarefa para desenvolvimento de um formulário completo que será utilizado em plataformas de e-Commerce.

## Funcionalidades
• Validação de Campos: O formulário contém validações básicas para garantir que os dados inseridos estejam corretos.
• Validação de CPF: Uma função de validação de CPF foi implementada para garantir que apenas CPFs válidos sejam aceitos.
• Consumo de API: Utilizamos uma API externa para buscar o endereço com base no CPF (exemplo demonstrativo com uma API de CEP).
• Efeitos Visuais: O formulário possui uma interface moderna, com um tema em azul e botões em verde. Ao focar em qualquer campo de entrada, uma “áurea” azul aparece ao redor, destacando o campo.
• Responsividade: A interface do formulário se adapta bem a diferentes tamanhos de tela.
## Tecnologias Utilizadas
• HTML5: Para a estrutura do formulário.
• CSS3: Para estilização e aplicação do tema azul com botões verdes, incluindo responsividade.
• JavaScript: Para validação dos campos, lógica de validação de CPF e integração com a API externa.


## Estrutura do Projeto
O projeto é dividido em três arquivos principais:
1. index.html: Contém a estrutura básica do formulário.
2. style.css: Arquivo responsável pela estilização da página.
3. script.js: Arquivo que contém as lógicas de validação e comunicação com a API externa.
1. index.html
Este arquivo contém a estrutura do formulário e os campos necessários, como nome, e-mail, senha, CPF, data de nascimento e endereço. Cada campo é obrigatório para o cadastro ser completado.
2. style.css
Responsável pela estilização do formulário, o tema geral é azul com botões verdes. Um destaque especial foi dado para os campos que estão sendo editados, onde uma “áurea” azul aparece ao redor do campo em foco.
3. script.js
Neste arquivo, temos a lógica de validação do CPF e o consumo de uma API para preencher automaticamente o endereço ao inserir o CPF. Além disso, há validação de todos os campos para garantir que eles sejam preenchidos corretamente.


## Instalação
1. Clone o repositório do projeto:
git clone https://github.com/seuusuario/formulario-cadastro.git
2. Navegue até a pasta do projeto:
cd formulario-cadastro
3. Abra o arquivo index.html no seu navegador para visualizar o formulário.
Como Funciona a Validação do CPF
O CPF é validado através de uma função JavaScript que verifica os dois últimos dígitos verificadores, assegurando que o CPF siga o padrão numérico correto. Se o CPF for inválido, uma mensagem de erro será exibida ao usuário.


## Consumo de API para Endereço
Utilizamos uma API externa (exemplo de API de CEP) para buscar o endereço com base no CPF. Quando o usuário insere um CPF válido, o endereço é automaticamente preenchido no campo de endereço.
Exemplo de Consumo de API
fetch(`https://viacep.com.br/ws/${cpf}/json/`)
   .then(response => response.json())
   .then(data => {
       if (!data.erro) {
           document.getElementById("endereco").value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
       } else {
           document.getElementById("mensagem").innerText = "Erro ao buscar o endereço!";
       }
   })
   .catch(error => {
       document.getElementById("mensagem").innerText = "Erro na API de endereço!";
   });
## Como Testar
1. Preencha o formulário com as informações solicitadas.
2. Ao inserir um CPF, o JavaScript validará se ele está correto.
3. Ao submeter o formulário, o endereço será buscado automaticamente e o formulário será validado antes de ser processado. 


## Captura de Tela
Aqui está uma visualização do formulário de cadastro:
Contribuição
Sinta-se à vontade para contribuir com melhorias ao projeto. Para isso, siga os passos abaixo:
1. Faça um fork do projeto.
2. Crie uma nova branch com suas modificações: git checkout -b minha-branch.
3. Faça suas alterações e commit: git commit -m 'minhas alterações'.
4. Envie para sua branch: git push origin minha-branch.
5. Crie um novo Pull Request.

## Licença
Este projeto está sob a licença MIT.
Esse README.md cobre todos os aspectos do projeto, desde a instalação até as funcionalidades e as tecnologias usadas. Caso precise de mais ajustes ou queira incluir mais detalhes, me avise!
tem menu de contexto

## AQUI ESTÃO ALGUNS LINKS DE PROJETOS PARECIDOS OU MENOS DESENVOLVIDOS
1. https://brayancorreians.github.io/form-CadEndereco/index.html
2. https://brayancorreians.github.io/email_nome/login.html
3. https://brayancorreians.github.io/verifica-ao-de-email/cpf.html

