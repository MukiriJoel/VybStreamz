import type { Config } from 'jest'
import nextJest from 'next/jest.js'

// Function to generate a timestamped file name
const timestamp = new Date().toISOString().replace(/[:.]/g, '-')

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/(.*)$': '<rootDir>/$1', // ✅ Added so imports like @/lib/context/AuthContext work
  },

  // ✅ Add reporters
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './test-results',
        filename: `test-report-${timestamp}.html`,
        expand: true,
        pageTitle: 'VybStreamz Component Test Report',
      },
    ],
  ],
}

export default createJestConfig(config)
