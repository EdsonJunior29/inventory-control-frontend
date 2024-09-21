import type { Config } from 'jest';

const swcJsxJestConfig = {
  jsc: {
    transform: {
      react: {
        runtime: 'automatic',
      },
    },
  },
};

const config: Config = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  resetMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts, tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/coverage',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', swcJsxJestConfig],
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  displayName: 'inventory-control-front-tests',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

export default config;
