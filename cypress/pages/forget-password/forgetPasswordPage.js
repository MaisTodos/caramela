/* eslint-disable no-undef */
import forgetPasswordElements from "./forgetPasswordElements";

class forgetPasswordPage {
  validarTelaEsqueciSenha() {
    cy.get(forgetPasswordElements.btn_forget_redefinir_senha).should(
      "have.text",
      "Redefinir minha senha"
    );
  }
}

export default new forgetPasswordPage();
