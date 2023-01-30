package br.com.deivid.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

/**
 * features: indica qual é o arquivo .feature que será executado 
 * glue: significa onde o arquivo .feature se encontra dentro do projeto 
 * tags: dentro de colchetes; se iniciar com ~ então não vai executar os cenários da anotação;
 * 		 se tiver mais de uma anotação para executar ou não basta separar com vírgula {"@a", "@b", ...}
 * plugin: dentro de colchetes; dá pra informar alguns tipos de relatório para ser gerado na execução
 * dryRun: se true, quando tiver rodando um teste com selenium, por exemplo, nao vai abrir o browser
 * 			   vai apenas validar os cenários, passos e se os métodos correspondentes estão criados.
 * 
 * @author deivid
 * 
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/", 
		glue = "br.com.deivid.steps",
		tags = { "@unitários"}, 
		plugin = { "pretty", "html:target/report-html", "json:target/report.json" },
		monochrome = true, 
		snippets = SnippetType.CAMELCASE, 
		dryRun = false,
		strict = false)
public class Runner {
}
