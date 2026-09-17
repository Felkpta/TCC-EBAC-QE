import loginPage from '../support/page-objects/login.page'

describe('US-0002: Funcionalidade de Login', () => {
  beforeEach(() => {
    loginPage.visitarUrl()
  })

  it('Deve realizar login com sucesso (Caminho Feliz)', () => {
    loginPage.preencherLogin('aluno_ebac@teste.com', 'teste@teste.com')
    cy.get('.woocommerce-MyAccount-content').should('be.visible')
  })

  it('Deve exibir mensagem de erro ao inserir senha inválida (Caminho Alternativo)', () => {
    loginPage.preencherLogin('aluno_ebac@teste.com', 'senha_incorreta')
    cy.get('.woocommerce-error').should('be.visible')
  })
})
