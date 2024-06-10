module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testEnvironment: "jest-environment-jsdom"
};
