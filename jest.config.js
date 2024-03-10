/** @type {import('ts-jest').JestConfigWithTsJest} */
import { pathsToModuleNameMapper } from 'ts-jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper({
    "@/*": [
        "../src",
        "../src/*"
    ]
  }, { prefix: '<rootDir>/src' })
};
