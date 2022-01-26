process.env.TZ = 'UTC'

module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/src /**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
}
