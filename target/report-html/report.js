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
  "duration": 4456450100,
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
  "duration": 482139300,
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
  "duration": 199971600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 742641900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 66060000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 97745600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 398651800,
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
  "duration": 162193900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 771973000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 63338600,
  "status": "passed"
});
formatter.after({
  "duration": 1079297900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 21,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "informo o usuário \"deivid@teste.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "a senha \"abcd1234\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 26,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 4205264200,
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
  "duration": 341528300,
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
  "duration": 200573600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 818669200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 115119200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 146267300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 426939100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 440522100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 59514400,
  "status": "passed"
});
formatter.after({
  "duration": 1079239400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 32,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "informo o usuário \"deivid@teste.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "a senha \"abcd1234\"",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 37,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3267449100,
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
  "duration": 281698500,
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
  "duration": 128736800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 938653800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 51531900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 68788900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 224889900,
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
  "duration": 268990200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 369125200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 63238100,
  "status": "passed"
});
formatter.after({
  "duration": 959057900,
  "status": "passed"
});
});