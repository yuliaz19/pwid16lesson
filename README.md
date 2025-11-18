Follow the following instructions on how to install dependencies,
run tests, and work with environment variables.

1. Install the latest version of Playwright:
   % npm init playwright@latest
   where:
   ✔ Do you want to use TypeScript or JavaScript? · TypeScript
   ✔ Where to put your end-to-end tests? · tests
   ✔ Add a GitHub Actions workflow? (Y/n) · true
   ✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · Y)
2. Install the library Faker.js by running:
   npm install @faker-js/faker
3. Install Prettier:
   npm install --save-dev prettier
4. Add to Configuration:
   APP_URL=https://fe-delivery.tallinn-learning.ee/signin
   (for GitHub use SECRETS)
5. Format tests with Prettier if necessary:
   npx prettier --write .npx prettier --write .
6. Run tests:
   npx playwright test
