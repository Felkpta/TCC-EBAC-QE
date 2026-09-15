Funcionalidade: Adicionar item ao carrinho
  Como cliente da EBAC-SHOP
  Quero adicionar produtos no carrinho 
  Para realizar a compra dos itens

  Cenário: Adicionar até o limite permitido de um mesmo produto
    Dado que estou na página de um produto
    Quando eu adiciono 10 unidades do mesmo produto ao carrinho
    Então os itens devem ser adicionados com sucesso

  Cenário: Tentar adicionar mais itens do que o permitido
    Dado que estou na página de um produto
    Quando eu tento adicionar 11 unidades do mesmo produto ao carrinho
    Então o sistema deve exibir uma mensagem informando que não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho

  Cenário: Aplicar cupom de desconto de 10%
    Dado que adicionei itens ao carrinho
    Quando o valor total for entre R$ 200 e R$ 600
    Então um cupom de 10% deve ser disponibilizado

  Cenário: Aplicar cupom de desconto de 15%
    Dado que adicionei itens ao carrinho
    Quando o valor total ultrapassar a R$ 600,00
    Então um cupom de 15% deve ser disponibilizado

  Cenário: Validar limite de valor total do carrinho
    Dado que tenho produtos no carrinho
    Quando a soma dos valores tenta ultrapassar a R$ 990,00
    Então o sistema deve bloquear a adição