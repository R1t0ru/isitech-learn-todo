import { expect, test } from 'vitest'
import { generateKey } from './helper.js'

test('Test GenerateKey', () => {
    expect(generateKey('Test', 1)).toBe('Test-1')
})