// jest.config.js
module.exports = {
    testMatch: [
      "<rootDir>/tst/**/*.test.{js,jsx,ts,tsx}", // Matches test files in tst/
      "<rootDir>/tst/**/*.spec.{js,jsx,ts,tsx}", // Matches spec files in tst/
    ],
    setupFilesAfterEnv: ['<rootDir>/tst/setupTests.js'], // Adjust path as needed
  };