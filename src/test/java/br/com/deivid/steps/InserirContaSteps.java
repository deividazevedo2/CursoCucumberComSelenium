package br.com.deivid.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;

public class InserirContaSteps {

	WebDriver driver;

	public InserirContaSteps() {
		driver = new ChromeDriver();
	}
	
	@Dado("^que desejo adicionar uma conta$")
	public void queDesejoAdicionarUmaConta() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./target/webdriver/chromedriver.exe");
		driver.get("https://seubarriga.wcaquino.me/");
		driver.manage().window().maximize();
		
		driver.findElement(By.id("email")).sendKeys("deivid@teste.com");
		driver.findElement(By.id("senha")).sendKeys("abcd1234");
		driver.findElement(By.tagName("button")).click();
		
		driver.findElement(By.linkText("Contas")).click();
		driver.findElement(By.linkText("Adicionar")).click();
		
	}

	@Quando("^adiciono a conta \"([^\"]*)\"$")
	public void adicionoAConta(String conta) throws Throwable {
		driver.findElement(By.id("nome")).sendKeys(conta);
		driver.findElement(By.tagName("button")).click();
	}

//	@Dado("^que estou acessando a aplicação$")
//	public void queEstouAcessandoAAplicação() throws Throwable {
//		System.setProperty("webdriver.chrome.driver", "./target/webdriver/chromedriver.exe");
//		driver.get("https://seubarriga.wcaquino.me/");
//		driver.manage().window().maximize();
//	}
//
//	@Quando("^informo o usuário \"([^\"]*)\"$")
//	public void informoOUsuário(String usuario) throws Throwable {
//		driver.findElement(By.id("email")).sendKeys(usuario);
//	}
//
//	@Quando("^a senha \"([^\"]*)\"$")
//	public void aSenha(String senha) throws Throwable {
//		driver.findElement(By.id("senha")).sendKeys(senha);
//	}
//
//	@Quando("^seleciono entrar$")
//	public void selecionoEntrar() throws Throwable {
//		driver.findElement(By.tagName("button")).click();
//	}
//
//	@Então("^visualizo a página inicial$")
//	public void visualizoAPáginaInicial() throws Throwable {
//		String texto = driver.findElement(By.xpath("/html/body/div[1]")).getText();
//		Assert.assertEquals("Bem vindo, Deivid!", texto);
//	}
//
//	@Quando("^seleciono Contas$")
//	public void selecionoContas() throws Throwable {
//		driver.findElement(By.linkText("Contas")).click();
//	}
//
//	@Quando("^seleciono Adicionar$")
//	public void selecionoAdicionar() throws Throwable {
//		driver.findElement(By.linkText("Adicionar")).click();
//	}
//
//	@Quando("^informo a conta \"([^\"]*)\"$")
//	public void informoAConta(String conta) throws Throwable {
//		driver.findElement(By.id("nome")).sendKeys(conta);
//	}
//
//	@Quando("^seleciono Salvar$")
//	public void selecionoSalvar() throws Throwable {
//		driver.findElement(By.tagName("button")).click();
//	}
//
//	@Então("^a conta é inserida com sucesso$")
//	public void aContaÉInseridaComSucesso() throws Throwable {
//		String texto = driver.findElement(By.xpath("/html/body/div[1]")).getText();
//		Assert.assertEquals("Conta adicionada com sucesso!", texto);
//	}
//
//	@Então("^sou notificado que o nome da conta é obrigatório$")
//	public void souNotificadoQueONomeDaContaÉObrigatório() throws Throwable {
//		String texto = driver.findElement(By.xpath("/html/body/div[1]")).getText();
//		Assert.assertEquals("Informe o nome da conta", texto);
//	}
//
//	@Então("^sou notificado que já existe uma conta com esse nome$")
//	public void souNotificadoQueJáExisteUmaContaComEsseNome() throws Throwable {
//		String texto = driver.findElement(By.xpath("/html/body/div[1]")).getText();
//		Assert.assertEquals("Já existe uma conta com esse nome!", texto);
//	}

	@Então("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String mensagem) throws Throwable {
		String texto = driver.findElement(By.xpath("/html/body/div[1]")).getText();
		Assert.assertEquals(mensagem, texto);
	}

	@After(order = 1, value = "@funcionais") //o método não executará para os testes que tem a anotação
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("./target/screenshot/cenario_" + cenario.getId() + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@After(order = 0, value = "@funcionais") // After com ordem 0 significa que será o ultimo a ser executado
	public void fecharBrowser() {
		driver.quit();
	}

}
