import selectCompanyElements from "./selectCompanyElements";

class selectCompanyPage {
  validarTelaSelectCompany() {
    cy.url({ timeout: 10000 }).should('include', '/');
    cy.url().should('include', '/select-company');

  }
  escolherUnidade(){
    cy.get(selectCompanyElements.btn_escolha_prim_unidade).click();
  }
}

export default new selectCompanyPage();