module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.ts', 'pages/**/*.tsx'],
  coverageReporters: ['lcov', 'text'],
}
