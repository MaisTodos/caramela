import onboardingPage from "../pages/onboarding/onboardingPage";

describe("Fluxo de onboarding", () => {
    beforeEach(() => {
        cy.visit('/');
      })
    it("OB_01 - Deve direcionar para o fluxo de login ao pressionar o botão “Acessar minha conta”", 
        { tags: ['smoke', 'regressivo', 'positivo'] }, () => {
        onboardingPage.clicarAcessarConta();
        onboardingPage.validarDirecionarAC();
      });
      it("OB_02 - Deve direcionar para o fluxo de cadastro de conta ao pressionar o botão “Criar conta” ", 
        { tags: ['smoke', 'regressivo', 'positivo'] }, () => {
        onboardingPage.clicarCriarConta();
        onboardingPage.validarDirecionarCC();
      });
 })
