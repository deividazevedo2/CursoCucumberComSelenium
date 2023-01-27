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
formatter.scenarioOutline({
  "line": 17,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 23,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta de Teste",
        "Já existe uma conta com esse nome!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
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
  "duration": 3984172900,
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
  "duration": 767362500,
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
  "duration": 225386400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 692836900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 68647900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 128543000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 286800900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
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
  "duration": 171302800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 785866800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 47888900,
  "status": "passed"
});
formatter.after({
  "duration": 187589500,
  "status": "passed"
});
formatter.after({
  "duration": 938712300,
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
  "duration": 3703944000,
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
  "duration": 327802700,
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
  "duration": 156171600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 712761800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 69310700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 83602300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 302021100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informoAConta(String)"
});
formatter.result({
  "duration": 99679000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 292933100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 61395500,
  "status": "passed"
});
formatter.after({
  "duration": 105990700,
  "status": "passed"
});
formatter.after({
  "duration": 987618300,
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
  "duration": 5386093500,
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
  "duration": 398688100,
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
  "duration": 197226400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 909977900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 87549300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoContas()"
});
formatter.result({
  "duration": 97483700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 299172900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
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
  "duration": 236842600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 388184800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 102285500,
  "status": "passed"
});
formatter.after({
  "duration": 194303300,
  "status": "passed"
});
formatter.after({
  "duration": 1147658700,
  "status": "passed"
});
});