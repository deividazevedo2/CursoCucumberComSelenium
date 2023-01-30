$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuário \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "#\tDado que estou acessando a aplicação"
    },
    {
      "line": 15,
      "value": "#\tQuando informo o usuário \"deivid@teste.com\""
    },
    {
      "line": 16,
      "value": "#\tE a senha \"abcd1234\""
    },
    {
      "line": 17,
      "value": "#\tE seleciono entrar"
    },
    {
      "line": 18,
      "value": "#\tEntão visualizo a página inicial"
    },
    {
      "line": 19,
      "value": "#\tQuando seleciono Contas"
    },
    {
      "line": 20,
      "value": "#\tE seleciono Adicionar"
    }
  ],
  "line": 22,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "adiciono a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#E seleciono Salvar"
    }
  ],
  "line": 25,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 28,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 29,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 30,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta de Teste",
        "Já existe uma conta com esse nome!"
      ],
      "line": 31,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#cenário imperativo vd cenário declarativo"
    }
  ],
  "line": 12,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContaSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 4456197800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "adiciono a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#E seleciono Salvar"
    }
  ],
  "line": 25,
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
      "offset": 18
    }
  ],
  "location": "InserirContaSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 554182500,
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
  "duration": 68383900,
  "status": "passed"
});
formatter.after({
  "duration": 146479300,
  "status": "passed"
});
formatter.after({
  "duration": 774835600,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#cenário imperativo vd cenário declarativo"
    }
  ],
  "line": 12,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContaSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 4885674500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "adiciono a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#E seleciono Salvar"
    }
  ],
  "line": 25,
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
      "offset": 18
    }
  ],
  "location": "InserirContaSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 553425600,
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
  "duration": 39746800,
  "status": "passed"
});
formatter.after({
  "duration": 134845300,
  "status": "passed"
});
formatter.after({
  "duration": 934587400,
  "status": "passed"
});
formatter.background({
  "line": 10,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#cenário imperativo vd cenário declarativo"
    }
  ],
  "line": 12,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContaSteps.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 4522476700,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "adiciono a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#E seleciono Salvar"
    }
  ],
  "line": 25,
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
      "offset": 18
    }
  ],
  "location": "InserirContaSteps.adicionoAConta(String)"
});
formatter.result({
  "duration": 455417800,
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
  "duration": 39291900,
  "status": "passed"
});
formatter.after({
  "duration": 366022300,
  "status": "passed"
});
formatter.after({
  "duration": 790486800,
  "status": "passed"
});
});