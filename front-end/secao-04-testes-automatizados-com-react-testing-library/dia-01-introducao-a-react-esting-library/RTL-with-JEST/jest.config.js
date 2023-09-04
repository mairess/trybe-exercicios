module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js'],
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/mock.js',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  }