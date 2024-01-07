import { test, expect } from '@playwright/test';

test('create an order', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  await page.locator('li').filter({ hasText: 'Sacha the Deer Sacha’s' }).getByRole('link').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByLabel('Full name').click();
  await page.getByLabel('Full name').fill('Pavlo Volkov');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('random@mail.com');
  //it will fail here
  await page.locator('.snipcart-textbox').first().click();
  //we want to fix this locator
  await page.getByLabel('Street address').fill('reheneratorna');
  await page.getByLabel('Apt/Suite').click();
  await page.getByLabel('Apt/Suite').fill('12');
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('Kyiv');
  await page.getByLabel('Country').click();
  await page.getByLabel('Country').fill('uk');
  await page.getByText('Ukraine', { exact: true }).click();
  await page.getByLabel('Postal/ZIP code').click();
  await page.getByLabel('Postal/ZIP code').fill('02160');
  await page.getByRole('button', { name: 'Continue to payment' }).click();
  await page.getByRole('button', { name: 'Place order' }).click();
  await page.getByRole('heading', { name: 'Thank you for your order' }).click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();

  await page.getByRole('navigation').getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'shopping_cart' }).click();
  await page.getByRole('button', { name: 'Back to store' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await page.getByPlaceholder('Enter your email...').click();
  await page.getByPlaceholder('Enter your email...').fill('mail@mail.com');
  await page.getByRole('button', { name: 'Send Message' }).click();
});