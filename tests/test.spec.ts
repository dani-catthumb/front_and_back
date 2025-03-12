import { test, expect } from '@playwright/test';
import config from '../frontend/src/config.json'

const FrontendURL = config.FRONTEND_URL;


test.describe("Home", () => {
  
  test('has title', async ({ page }) => {
    await page.goto(FrontendURL);
  
    await expect(page).toHaveTitle("Front and Back");
  });
  
  test('test clicking on 5th and 10th employee (hardcoded)', async ({ page }) => {
    await page.goto(FrontendURL);
  
    await page.locator('td[itemid="5"]').click();

    await expect(page.locator('td[specificemployeeid="5"]')).toHaveText("5");
    await expect(page.locator('td[specificemployeeid="5"] + *')).toHaveText("David Lee");

  
    await page.locator('td[itemid="10"]').click();

    await expect(page.locator('td[specificemployeeid="10"]')).toHaveText("10");
    await expect(page.locator('td[specificemployeeid="10"] + *')).toHaveText("Amy Chen");

  });

})
