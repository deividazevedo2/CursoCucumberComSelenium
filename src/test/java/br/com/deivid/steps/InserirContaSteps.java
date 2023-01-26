package br.com.deivid.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class InserirContaSteps {

	WebDriver driver;

	public InserirContaSteps() {
		driver = new ChromeDriver();
	}

	@Dado("^que estou acessando a aplicação$")
	public void queEstouAcessandoAAplicação() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./target/webdriver/chromedriver.exe");
		driver.get("https://seubarriga.wcaquino.me/");
	}

	@Quando("^informo o usuário \"([^\"]*)\"$")
	public void informoOUsuário(String usuario) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(usuario);
	}

	@Quando("^a senha \"([^\"]*)\"$")
	public void aSenha(String senha) throws Throwable {
		driver.findElement(By.id("senha")).sendKeys(senha);
	}

	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^visualizo a página inicial$")
	public void visualizoAPáginaInicial() throws Throwable {
		String texto = driver.findElement(By.xpath("/html/body/div[1]")).getText();
		Assert.assertEquals("Bem vindo, Deivid!", texto);
	}

	@Quando("^seleciono Contas$")
	public void selecionoContas() throws Throwable {
		driver.findElement(By.linkText("Contas")).click();
	}

	@Quando("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {
		driver.findElement(By.linkText("Adicionar")).click();
	}

	@Quando("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String conta) throws Throwable {
		driver.findElement(By.id("nome")).sendKeys(conta);
	}

	@Quando("^seleciono Salvar$")
	public void selecionoSalvar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Então("^a conta é inserida com sucesso$")
	public void aContaÉInseridaComSucesso() throws Throwable {
		String texto = driver.findElement(By.xpath("/html/body/div[1]")).getText();
		Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}
}
