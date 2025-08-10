touch README.md

bash
npm init -y
npm install -D playwright dotenv
npm install
npx playwright install
EMAIL=testuser@gmail.com
PASSWORD=StrongPass123!


npx playwright test
npx playwright test --grep @sighup
npx playwright test --grep @login
npx playwright test --headed
npx playwright test --project=firefox




