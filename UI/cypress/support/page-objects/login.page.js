class LoginPage {
  get #inputUser() { return cy.get('#username') }
  get #inputPassword() { return cy.get('#password') }
  get #btnLogin() { return cy.get('[name="login"]') }

  visitarUrl() {
    cy.visit('minha-conta')
  }

  preencherLogin(usuario, senha) {
    this.#inputUser.clear().type(usuario)
    this.#inputPassword.clear().type(senha, { log: false })
    this.#btnLogin.click()
  }
}

export default new LoginPage()
