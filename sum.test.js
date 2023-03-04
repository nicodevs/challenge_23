import sum from '../src/sum'
import { describe, expect, it } from 'vitest'

describe('sum', () => {
  it('returns zero when is called without parameters', () => {
    expect(sum()).toBe(0)
  })

  it('returns same number when only one number is passed as parameter', () => {
    expect(sum(1)).toBe(1)
  })

  it('returns sum when more than one number is passed as parameter', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })
})
