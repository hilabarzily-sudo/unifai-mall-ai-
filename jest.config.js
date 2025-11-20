/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.jsx?$': ['babel-jest', { presets: ['@babel/preset-react'] }],
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/main.jsx',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 80,
      statements: 80,
    },
  },
  testMatch: [
    '<rootDir>/tests/unit/**/*.test.{js,jsx}',
    '<rootDir>/tests/integration/**/*.test.{js,jsx}',
  ],
};

