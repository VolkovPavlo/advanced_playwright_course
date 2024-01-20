import { test, expect } from '@playwright/test';

test('blog navigation', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');

  await page.getByText('Cracking Google Summer of Code').and (page.locator('a')).click();
  await page.getByText('Back to the list of articles').click();

  await page
    .locator('.posts-list')
    .filter({ hasText:'How I Failed At Amazon Interview Because of LP'})
    .click();
  await page.pause();

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Do Not EVER Accept The' }).first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Home' }).click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'How To Choose Between' }).first().click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'About me' }).click();
  const page3Promise = page2.waitForEvent('popup');
  await page2.getByRole('link', { name: 'Rocket Chat' }).click();
  const page3 = await page3Promise;
  await page2.getByRole('button', { name: 'Home' }).click();
  const page4Promise = page2.waitForEvent('popup');
  await page2.getByRole('link', { name: 'Soft Skills of Senior Engineer' }).click();
  const page4 = await page4Promise;
});