const {Builder} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');

(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://academico.iff.edu.br/');

    let element = driver.findElement(webdriver.By.xpath("(//a[@class='item_login_pagina_inicial'])[2]"));
    await element.click();

    element = driver.findElement(webdriver.By.name("LOGIN"));
    element.sendKeys("matricula");

    element = driver.findElement(webdriver.By.name("SENHA"));
    element.sendKeys("senha");

    element = driver.findElement(webdriver.By.id("btnOk"));
    await element.click();

    element = driver.findElement(webdriver.By.xpath("(//a[@class='conteudoLink'])[4]"));
    await element.click();

    driver.findElements(webdriver.By.xpath("(//td[@class='conteudoTexto'])")).then(function(elements){
        elements.forEach(function (element) {
            element.getText().then(function(text){
                console.log(text);
            });
        });
    });
})();