import onboardingElements from "./onboardingElements";

class onboardingPage {
    clicarAcessarConta(){
        cy.get(onboardingElements.btn_onboarding_acessar_login).click()
    }
    clicarCriarConta(){
        cy.get(onboardingElements.btn_onboarding_criar_conta).click()
    }
    validarDirecionarAC(){
        cy.url().should('include', '/login');
    }
    validarDirecionarCC(){
        cy.url().should('include', '/create');
    }
}

export default new onboardingPage();