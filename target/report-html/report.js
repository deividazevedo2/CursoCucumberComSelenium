$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"deivid@teste.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"abcd1234\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 21526490999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deivid@teste.com",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 519030400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1234",
      "offset": 9
    }
  ],
  "location": "InserirContaSteps.aSenha(String)"
});
formatter.result({
  "duration": 222574400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 864708100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 106737400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 130913300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 434666501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informoAConta(String)"
});
formatter.result({
  "duration": 242381899,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 874347701,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 37478701,
  "status": "passed"
});
});