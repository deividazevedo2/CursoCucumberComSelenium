#language: pt

@unitários
Funcionalidade: Aprender Cucumber
	Como um aluno
	Eu quero aprender a utilizar Cucumber
	Para que eu possa automatizar critérios de aceitação
	
Cenário: Deve executar especificação
	Dado que criei o arquivo corretamente
	Quando executá-lo
	Então a especificação deve finalizar com sucesso
	
Cenário: Deve incrementar contador
	Dado que o valor do contador é 15
	Quando eu incrementar em 3
	Então o valor do contador será 18
	
Cenário: Deve incrementar contador
	Dado que o valor do contador é 123
	Quando eu incrementar em 35
	Então o valor do contador será 158
	
Cenário: Deve calcular atraso na entrega
	Dado que a entrega é dia 05/04/2018
	Quando a entrega atrasar em 2 dias
	Então a entrega será efetuada em 07/04/2018
	
Cenário: Deve calcular atraso no prazo de entrega da China
	Dado que o prazo é dia 05/04/2018
	Quando a entrega atrasar em 2 meses
	Então a entrega será efetuada em 05/06/2018
	
	
	
	
	
	
Cenário: Deve criar steps genéricos para estes passos
	Dado que o ticket é AF345
	E que o valor da passagem é R$ 230,45
	E que o nome do passageiro é "Fulano da Silva"
	E que o telefone do passageiro é 9999-9999
	Quando criar os steps
	Então o teste vai funcionar
    
Cenário: Deve reaproveitar os steps "Dado" do cenário anterior
  Dado que o ticket é AB167
  E que o ticket especial é AB167
  E que o valor da passagem é R$ 1120,23
  E que o nome do passageiro é "Cicrano de Oliveira"
  E que o telefone do passageiro é 9888-8888

Cenário: Deve negar todos os steps "Dado" dos cenários anteriores
  Dado que o ticket é CD123
  E que o ticket é AG1234
  E que o valor da passagem é R$ 1.1345,56
  E que o nome do passageiro é "Beltrano Souza Matos de Alcântara Azevedo"
  E que o telefone do passageiro é 1234-5678
  E que o telefone do passageiro é 999-2223 
