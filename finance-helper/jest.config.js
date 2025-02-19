// jest.config.js
module.exports = {
    testMatch: [
      "<rootDir>/tst/**/*.test.{js,jsx,ts,tsx}", // Matches test files in tst/
      "<rootDir>/tst/**/*.spec.{js,jsx,ts,tsx}", // Matches spec files in tst/ (Optional)
    ],
    setupFilesAfterEnv: ['<rootDir>/tst/setupTests.ts'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // For resolving absolute imports in tests
    },
  };