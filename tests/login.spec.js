const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page');

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('successful login', async () => {
        await loginPage.login('testuser', 'password123');
        // Add your assertions here
    });
});
