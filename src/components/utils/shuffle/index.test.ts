import shuffle from './'

describe('shuffle', () => {
  it('return array with same length after being shuffle', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toHaveLength(3)
  })
  it('return array with same element after being shuffle', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
  })
})
