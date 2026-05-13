const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { InventoryPage } = require('../../pages/InventoryPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test('e2e - completar compra de un producto', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackpackToCart();
  await expect(inventoryPage.cartBadge).toHaveText('1');

  await inventoryPage.goToCart();
  await expect(cartPage.cartItem).toBeVisible();

  await cartPage.checkout();
  await checkoutPage.fillInformation('Maria', 'Garcia', '41000');
  await checkoutPage.finishPurchase();

  await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
});