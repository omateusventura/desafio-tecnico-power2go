module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['tsx'],
  testMatch: ['**/*.spec.tsx'],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
  },
};
