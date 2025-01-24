import loginPage from "../pages/login/loginPage";
import createPage from "../pages/create/createPage";
import forgetPasswordPage from "../pages/forget-password/forgetPasswordPage";
import selectCompanyPage from "../pages/select-company/selectCompanyPage";
import homePage from "../pages/home/homePage";
let userdata;

describe("Fluxo de login", () => {
  beforeEach(() => {
    cy.visit('login');
    cy.fixture('data').then( (data)=>{
      userdata=data;
      })
  });

  it("AC_01 - Deve direcionar para a tela de Criar conta ao pressionar o botão “Criar minha conta”", 
    { tags: ['smoke', 'regressivo', 'positivo'] }, () => {
    loginPage.clicarCriarMinhaConta();
    createPage.validarTelaCriarConta();
  });

  it("AC_02 - Input “E-mail” deve retornar mensagem de erro quando o dado for inválido.",
    { tags: ['regressivo', 'negativo'] }, () => {
    loginPage.digitarEmail("pedro.barreto@maistodos");
    loginPage.validarMensagemErroEmail();
  });

  it("AC_03 - Input “Senha” deve retornar mensagem de erro quando o dado for inválido.",
    { tags: ['regressivo', 'negativo'] }, () => {
    loginPage.digitarSenha(userdata.senha_incompleta);
    loginPage.validarMensagemErroSenha();
  });

  it("AC_04 - Ícone de olho deve desligar e ligar a anonimização da senha digitada",
    { tags: ['regressivo', 'positivo'] }, () => {
    loginPage.digitarSenha(userdata.senha_incompleta);
    loginPage.validarAnonimizacao();
    loginPage.clicarDesanonimizarSenha();
    loginPage.validarDesanonimizacao();
  });
 
  it("AC_05 - Botão de “Esqueci a senha” deve direcionar para o fluxo de Esqueci minha senha",
    { tags: ['smoke', 'regressivo', 'positivo'] }, () => {
    loginPage.clicarEsqueciASenha();
    forgetPasswordPage.validarTelaEsqueciSenha();
  });

  it("AC_06 - Deve ser possível alternar o estado (enable/disable) do botão “Acessar minha conta” de acordo com o preenchimento dos inputs de e-mail e senha",
    { tags: ['regressivo', 'positivo'] }, () => {
    loginPage.digitarEmail(Cypress.env('email'));
    loginPage.digitarSenha(Cypress.env('senha'));
    loginPage.validarBotaoAcessarContaIsEnable();
    loginPage.excluirSenha();
    loginPage.validarBotaoAcessarContaIsDisable();
  });

  it("AC_07 - Deve ser aberto um modal de erro ao preencher os inputs de login e/ou senha com dados inválidos",
    { tags: ['regressivo', 'negativo'] }, () => {
    loginPage.digitarEmail(userdata.email_invalido);
    loginPage.digitarSenha(userdata.senha_invalida);
    loginPage.clicarAcessarConta();
    loginPage.validarModalErroLogin();
  });

  it("AC_08 - Botão “Avançar” deve acessar a aplicação caso todos os campos obrigatórios  estejam preenchidos com dados válidos",
    { tags: ['smoke', 'regressivo', 'positivo'] }, () => {
    loginPage.digitarEmail(Cypress.env('email'));
    loginPage.digitarSenha(Cypress.env('senha'));
    loginPage.clicarAcessarConta();
    selectCompanyPage.validarTelaSelectCompany();
    selectCompanyPage.escolherUnidade();
    homePage.validarTelaHome();
  }); 
 
});
