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
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
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
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 4413259400,
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
  "duration": 212739700,
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
  "duration": 121465000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 578666900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 59372600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 67729500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 246362100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
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
  "duration": 128863400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 467415000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 41040300,
  "status": "passed"
});
formatter.after({
  "duration": 993905400,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
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
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3296416600,
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
  "duration": 160541000,
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
  "duration": 152020500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 551220100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 43692600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 75444300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 249254500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 23,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 232746200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 40066400,
  "status": "passed"
});
formatter.after({
  "duration": 811939700,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
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
formatter.match({
  "location": "InserirContaSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 2828422300,
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
  "duration": 194997900,
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
  "duration": 126704900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 620471700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 56810200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 70312400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 224976200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 27,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
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
  "duration": 103613400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 484791900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 49979100,
  "status": "passed"
});
formatter.after({
  "duration": 3956278700,
  "status": "passed"
});
});