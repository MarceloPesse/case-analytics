# Google Analytics Case

Programa simples feito em jQuery e a biblioteca para js do Google Analytics com o objetivo de testar o funcionamento da plataforma.

**Git pages com o mockup: 
https://marcelopesse.github.io/case-analytics/**

## Problema proposto
Identificar algumas ações do usuário como:
- click de botões específicos
- envio de formulário
- preenchimento de formulário

## Pressupostos
- Só podemos inserir um arquivo .js, a fim de evitar maiores problemas para o dono do site. (O que nos força a colocar somente um arquivo chamado tagueamento.js que contém tanto o nosso código quanto a chamada para download da biblioteca Analytics.js do google)
- Não precisamos de coisas muito complexas, por exemplo, verificar se a pagina foi carregada antes de verificar o clique. (Se o usuário clicou em algo, podemos presumir que o site carregou normalmente)
- Para verificarmos o preenchimento do forms iremos checar se o campo sofreu 'blur' e se a alguma coisa preenchida no forms. Outras possibilidades de verificação seriam a primeira vez que o campo sofrer 'focus' por exemplo.
