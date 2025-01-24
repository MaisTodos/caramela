import createElements from "./createElements";

class createPage {
  validarTelaCriarConta() {
    cy.get(createElements.text_criar_conta_informe_seus_dados).should(
      "have.text",
      "Informe os dados da sua empresa para iniciar o cadastro:"
    );
  }
}

export default new createPage();
