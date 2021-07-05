module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts)?$': 'ts-jest',
    '^.+\\.(js)?$': 'babel-jest'
  }
}
