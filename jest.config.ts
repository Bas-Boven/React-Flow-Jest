// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
export const config: Config.InitialOptions = {
    verbose: true,
    maxWorkers: "50%"
};

// Or async function
export default async (): Promise<Config.InitialOptions> => {
    return {
        resetMocks: true,
        verbose: true,
        roots: [
            "<rootDir>"
        ],
        collectCoverage: true,
        coverageDirectory: "<rootDir>/test/coverage",
        moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
        testMatch: [
            "**/__tests__/**/*.+(ts|tsx|js)",
            "**/?(*.)+(spec|test).+(ts|tsx|js)"
        ],
        transform: {
            "^.+\\.(ts|tsx)$": "ts-jest",
            "^.+\\.svg$": "<rootDir>/tests/jest/svgTransform.js"
        },
        moduleNameMapper: {
            "\\.(css|scss)$": "<rootDir>/tests/jest/styleMock.js"
        },
        reporters: [ "default", "bamboo-jest-reporter" ],
        maxWorkers: "50%"
    };
};
