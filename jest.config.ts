import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  testEnvironment: './jest.environment.ts',
  testMatch: [
    "**/tests/*.+(ts|tsx|js)"
  ]
};
export default config;
