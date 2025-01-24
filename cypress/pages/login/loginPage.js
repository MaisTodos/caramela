import loginElements from "./loginElements";

class loginPage {
  digitarEmail(email) {
    cy.get(loginElements.input_login_email)
    .click({ force: true })
    .type(email);
  }
  digitarSenha(senha) {
    cy.get(loginElements.input_login_senha)
    .click({ force: true })
    .type(senha);
  }
  excluirSenha(){
    cy.get(loginElements.input_login_senha)
    .clear()
  }
  clicarAcessarConta() {
    cy.get(loginElements.btn_login_acessar_conta)
    .click({ force: true });
  }
  clicarAnonimizarSenha() {
    cy.get(loginElements.btn_login_anonimiza)
    .click({ force: true });
  }
  clicarDesanonimizarSenha() {
    cy.get(loginElements.btn_login_nnsei)
    .click({ force: true });
  }
  clicarEsqueciASenha() {
    cy.get(loginElements.btn_esqueci_a_senha)
    .click({ force: true });
  }
  clicarCriarMinhaConta() {
    cy.get(loginElements.btn_criar_minha_conta)
    .click({ force: true });
  }
  validarMensagemErroEmail() {
    cy.get(loginElements.text_error).should(
        "have.text", 
        "E-mail inválido"
    );
  }
  validarMensagemErroSenha() {
    cy.get(loginElements.text_error).should(
        "have.text", 
        "Senha inválida"
    );
  }
  validarTelaLogin() {
    cy.get(loginElements.img_login_bem_vindo)
    .should("be.visible");
  }
  validarAnonimizacao() {
    cy.get(loginElements.text_anonimizado).should(
      "have.attr",
      "type",
      "password"
    );
  }
  validarDesanonimizacao() {
    cy.get(loginElements.text_anonimizado).should(
        "have.attr", 
        "type", 
        "text"
    );
  }
  validarBotaoAcessarContaIsEnable() {
    cy.get(loginElements.btn_login_acessar_conta).should(
        'not.be.disabled'
    );
  }
  validarBotaoAcessarContaIsDisable() {
    cy.get(loginElements.btn_login_acessar_conta).should(
        'be.disabled'
    );
  }
  validarModalErroLogin() {
    cy.get(loginElements.btn_login_tentar_novamente)
    .should('be.visible');
  }
}

export default new loginPage();
