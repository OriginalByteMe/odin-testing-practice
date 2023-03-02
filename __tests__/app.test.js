import { describe, expect, test } from '@jest/globals'
import { analyzeArray, caesarCipher, calculator, capitalize, reverseString } from '../app.js'

describe('should capitalize the first letter of a string', () => {
  test('convert hello to Hello', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
})

describe('Should reverse a string', () => {
  test('convert hello to olleh', () => {
    expect(reverseString('hello')).toBe('olleh')
  })
})

describe('Calculator should do basic calcualtions', () => {
  const calc = calculator()

  test('Add 1 + 1 = 2', () => {
    expect(calc.add(1,1)).toBe(2)
  })

  test('Subtract 1 - 1 = 0', () => {
    expect(calc.subtract(1,1)).toBe(0)
  })

  test('Multiply 2 * 3 = 6', () => {
    expect(calc.multiply(2,3)).toBe(6)
  })

  test('Divide 6 / 2 = 3', () => {
    expect(calc.divide(6,2)).toBe(3)
  })
})

describe('Ceasers cipher should shift string by specified amount', () => {
  test('convert hello to ifmmp', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp')
  })

  test('should keep the same case when converting', () => {
    expect(caesarCipher('heLlo', 1)).toBe('ifMmp')
  })

  test('should wrap from z to a', () => {
    expect(caesarCipher('z', 1)).toBe('a')
  })

  test('should take into account for punctuation', () => {
    expect(caesarCipher('hello!', 1)).toBe('ifmmp!')
  })

  test('should take into account for numbers', () => {
    expect(caesarCipher('123', 1)).toBe('123')
  })
})

describe('Should analayze the array', () => {
  test('expect function to return accurate min, max, avg and length of array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
  })
})


