Funcionalidade: API de cupons
  Como admin da EBAC-SHOP
  Quero criar um serviço de cupom
  Para poder listar e cadastrar os cupons

  Cenário: Listar todos os cupons com sucesso
    Dado que estou autenticado como administrador com usuário "admin_ebac" e senha "@admin!&b@c!2022"
    Quando eu envio uma requisição GET para "/wc/v3/coupons"
    Então a API deve listar todos os cupons cadastrados

  Cenário: Cadastrar um novo cupom com sucesso
    Dado que estou autenticado como administrador
    Quando eu envio uma requisição POST para "/wc/v3/coupons" com os campos obrigatórios "code", "amount", "discount_type" e "description"
    Então o cupom deve ser cadastrado com sucesso

  Cenário: Tentar cadastrar cupom com código repetido
    Dado que já existe um cupom com o código "Ganhe10"
    Quando eu envio uma requisição POST tentando criar outro cupom com o mesmo nome
    Então o sistema deve retornar um erro informando que o nome do cupom não pode ser repetido

  Cenário: Acessar serviço sem autenticação
    Dado que não informei as credenciais de autenticação
    Quando eu envio uma requisição GET para "/wc/v3/coupons"
    Então a API deve negar o acesso