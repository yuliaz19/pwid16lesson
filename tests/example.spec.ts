import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/ar";

test("try to signin with login and password", async ({ page }) => {
  await page.goto(process.env.APP_URL);
  const randomUsername = faker.internet.username();
  const randomPassword = faker.internet.password();
  await page.getByTestId("username-input").fill(randomUsername);
  await page.getByTestId("password-input").fill(randomPassword);
  await page.getByTestId("signIn-button").click();
  await expect(page.getByTestId("authorizationError-popup")).toBeVisible();
});

test("not enable signin for short password", async ({ page }) => {
  await page.goto(process.env.APP_URL);
  const randomUsername = faker.internet.username();
  const randomPassword = faker.internet.password().slice(0, 5);
  // const randomPassword = faker.string.alphanumeric(7);
  await page.getByTestId("username-input").fill(randomUsername);
  await page.getByTestId("password-input").fill(randomPassword);
  await expect(
    page.getByText("The field must contain at least of characters: 8"),
  ).toBeVisible();
  await expect(page.getByTestId("signIn-button")).toBeDisabled();
  //getByText('The field must contained at')
});
