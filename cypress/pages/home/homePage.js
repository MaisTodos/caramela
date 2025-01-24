import homeElements from "./homeElements";

class homePage {
    validarTelaHome(){
        cy.get(homeElements.img_home_bem_vindo).should('be.visible')
    }
}

export default new homePage();