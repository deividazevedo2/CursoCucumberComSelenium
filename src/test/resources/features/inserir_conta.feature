#language: pt

@funcionais
Funcionalidade: Cadastro de contas

	Como um usuário 
	Gostaria de cadastrar contas
	Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Contexto: 
	#cenário imperativo vd cenário declarativo
	Dado que desejo adicionar uma conta
	
#	Dado que estou acessando a aplicação
#	Quando informo o usuário "deivid@teste.com"
#	E a senha "abcd1234"
#	E seleciono entrar
#	Então visualizo a página inicial
#	Quando seleciono Contas
#	E seleciono Adicionar

Esquema do Cenário: Deve validar regras cadastro contas
	Quando adiciono a conta "<conta>"
	#E seleciono Salvar
	Então recebo a mensagem "<mensagem>"
	
Exemplos:
	| conta 					| mensagem 														|
	| Conta de Teste 	| Conta adicionada com sucesso! 			|
	| 								| Informe o nome da conta 						|
	| Conta de Teste 	| Já existe uma conta com esse nome! 	|

#Cenário: Não deve inserir uma conta sem nome
#	E informo a conta ""
#	E seleciono Salvar
#	Então sou notificado que o nome da conta é obrigatório
#
#Cenário: Não deve inserir uma conta com nome já existente
#	E informo a conta "Conta de Teste"
#	E seleciono Salvar
#	Então sou notificado que já existe uma conta com esse nome