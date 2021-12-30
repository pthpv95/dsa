const { lengthOfLongestSubstring } = require('./index')

it('should work 1st case', () => {
  let s = ""
  const result = lengthOfLongestSubstring(s)
  expect(result).toEqual(0)
})

it('should work 2nd case', () => {
  let s = " "
  const result = lengthOfLongestSubstring(s)
  expect(result).toEqual(1)
})

it('should work 3rd case', () => {
  let s = "bbbbbb"
  const result = lengthOfLongestSubstring(s)
  expect(result).toEqual(1)
})

it('should work 4 case', () => {
  let s = "pwwkew"
  const result = lengthOfLongestSubstring(s)
  expect(result).toEqual(3)
})

it('should work 5 case', () => {
  let s = "dvdf"
  const result = lengthOfLongestSubstring(s)
  expect(result).toEqual(3)
})

