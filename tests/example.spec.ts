import { test, expect } from "@playwright/test";

test("try to signin with login and password", async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
  await page.getByTestId("username-input").fill('Yulia');
  await page.getByTestId("password-input").fill('test1234');
  await page.getByTestId("signIn-button").click();
  await expect(page.getByTestId("authorizationError-popup")).toBeVisible();
});

test("not enable signin for short password", async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
  await page.getByTestId("username-input").fill('Yulia');
  await page.getByTestId("password-input").fill('test12');
  await expect(
    page.getByText("The field must contain at least of characters: 8"),
  ).toBeVisible();
  await expect(page.getByTestId("signIn-button")).toBeDisabled();
  //getByText('The field must contained at')
});
