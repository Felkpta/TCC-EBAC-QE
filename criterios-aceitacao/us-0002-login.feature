Funcionalidade: Login na plataforma
  Como cliente da EBAC-SHOP
  Quero fazer o login (autenticação) na plataforma
  Para visualizar meus pedidos

  Cenário: Autenticação realizada com sucesso (Caminho Feliz)
    Dado que estou na página de login da EBAC-SHOP
    Quando insiro as credenciais válidas de um usuário ativo
    Então o login deve ser efetuado com sucesso
    E devo ser direcionado para a área de visualização dos meus pedidos

  Cenário: Tentativa de login com usuário inativo
    Dado que estou na página de login
    Quando tento autenticar com um usuário com status inativo
    Então o sistema não deve permitir o acesso
    E deve exibir uma mensagem indicando que o usuário está inativo

  Cenário: Exibir mensagem de erro ao errar usuário ou senha
    Dado que estou na página de login
    Quando insiro um usuário ou senha incorretos
    Então o sistema deve exibir uma mensagem de erro de autenticação

  Cenário: Travar login após 3 tentativas de senha incorreta
    Dado que estou na página de login
    Quando erro a senha por 3 vezes consecutivas
    Então o sistema deve travar o acesso do usuário por 15 minutos