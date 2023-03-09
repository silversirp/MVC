const { Given, When, Then } = require('cucumber');
        const { Builder, By, Key, until } = require('selenium-webdriver');
        const assert = require('assert');

// Define the Selenium WebDriver instance
        let driver;

        Given('the user is on the home page', async function () {
        // Initialize the ChromeDriver instance and navigate to the home page
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3001/');
        });

        When('the user clicks on the {string} link', async function (linkText) {
        // Find the link element and click it
        const link = await driver.findElement(By.linkText(linkText));
        await link.click();
        });

        Then('the user should see a list of items in a table format', async function () {
        // Find the table element and verify that it is visible
        const table = await driver.findElement(By.css('table'));
        const isDisplayed = await table.isDisplayed();
        assert.strictEqual(isDisplayed, true);
        });

        Then('the user should see a message {string}', async function (message) {
        // Find the message element and verify that it contains the expected text
        const messageElement = await driver.findElement(By.css('.message'));
        const actualMessage = await messageElement.getText();
        assert.strictEqual(actualMessage, message);
        });

        Then('the user should see an error message', async function () {
        // Find the error message element and verify that it is visible
        const errorMessage = await driver.findElement(By.css('.error-message'));
        const isDisplayed = await errorMessage.isDisplayed();
        assert.strictEqual(isDisplayed, true);
        });

// Clean up after the test by closing the browser window
        After(async function () {
        await driver.quit();
        });
