 What is Jest?
Jest is a popular JavaScript testing framework developed by Facebook. It is used to write and run tests for JavaScript and TypeScript code, especially for Node.js and React projects. Jest is easy to set up, provides a simple API, and includes features like test coverage, mocking, and snapshot testing.
2. How to Install Jest
Initialize your project (if you haven’t already):
Apply to sum.test.js
Run
Install Jest as a development dependency:
Apply to sum.test.js
Run
3. Project File Structure
Apply to sum.test.js
sum.js — Contains your sum function.
sum.test.js — Contains your Jest unit test for the sum function.
package.json — Project configuration file.
node_modules/ — Installed dependencies
6. Update package.json to use Jest
Add the following to your package.json:
Apply to sum.test.js
7. How to Run the Test
In your project directory, run:
Apply to sum.test.js
Run
or
Apply to sum.test.js
Run
Jest will find all files ending with .test.js and run the tests.
Summary:
Jest is a testing framework for JavaScript.
Install it with npm install --save-dev jest.
Write your function and test in separate files.
Add a test script to package.json.
Run your tests with npm test.
