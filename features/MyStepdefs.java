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

// See details
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

        Given('I am a logged in user', () => {
        // Implement login process, assuming the user is already logged in
        })

        Given('I am on the homepage', () => {
        cy.visit('/')
        })

        When('I click on an item', () => {
        cy.get('.item').first().click() // Click on the first item element found
        })

        Then('I should be able to see the item\'s name, image, and description', () => {
        cy.get('.item-name').should('be.visible') // Assert that the item name is visible
        cy.get('.item-image').should('be.visible') // Assert that the item image is visible
        cy.get('.item-description').should('be.visible') // Assert that the item description is visible
        })

        When('I click on a non-existent item', () => {
        // Click on a non-existent item, assuming that such an element does not exist
        cy.get('.non-existent-item').should('not.exist')
        })

        Then('I should see an error message', () => {
        cy.get('.error-message').should('be.visible') // Assert that the error message is visible
        cy.get('.item-name').should('not.exist') // Assert that the item name is not visible
        cy.get('.item-image').should('not.exist') // Assert that the item image is not visible
        cy.get('.item-description').should('not.exist') // Assert that the item description is not visible
        })

        Then('I should not be able to see any item details', () => {
        cy.get('.item-name').should('not.exist') // Assert that the item name is not visible
        cy.get('.item-image').should('not.exist') // Assert that the item image is not visible
        cy.get('.item-description').should('not.exist') // Assert that the item description is not visible
        })

        Given('the item exists', () => {
        // Assume that the item exists in the database
        })

        Given('I am not authorized to view the item', () => {
        // Assume that the user is not authorized to view the item
        })

        Then('I should see a 403 Forbidden error message', () => {
        cy.get('.error-message').should('be.visible') // Assert that the error message is visible
        cy.contains('403 Forbidden').should('be.visible') // Assert that the error message contains "403 Forbidden"
        cy.get('.item-name').should('not.exist') // Assert that the item name is not visible
        cy.get('.item-image').should('not.exist') // Assert that the item image is not visible
        cy.get('.item-description').should('not.exist') // Assert that the item description is not visible
        })