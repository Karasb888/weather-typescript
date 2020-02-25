module.exports = {
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    setupFiles: ['<rootDir>/test-setup.js'],
    setupFilesAfterEnv: ['jest-extended'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\', '.data.ts'],
    coverageDirectory: '<rootDir>/coverage',
    moduleNameMapper: {
        '\\.(css|less|scss|sass|styl)$': '<rootDir>/node_modules/jest-css-modules'
    },
    transform: {
        '^.+\\.(ts|tsx|js)$': '<rootDir>/test-compiler.js',
        '.+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};