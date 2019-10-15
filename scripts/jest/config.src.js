module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/*.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest',
  rootDir: process.cwd(),
  roots: ['<rootDir>/test'],
  testMatch: ['<rootDir>/test/*.spec.ts'],
  transform: { '^.+\\.(js|ts)$': 'ts-jest' }
}
