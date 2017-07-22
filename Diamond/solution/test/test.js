let chai = require('chai')
let assert = chai.assert

let printDiamond = require('../diamond')

describe('Diamond', () => {
  it('should print a single letter for A', () => {
    assert.equal(printDiamond('A'), 'A')
  })

  it('should print the correct pattern for B, e.g. A B B A', () => {
    assert.equal(printDiamond('B'), 'A B B A')
  })

  it('should print a pattern similar to that of B for C', () => {
    assert.equal(printDiamond('C'), 'A B B C C B B A')
  })

  it('should print correct pattern for D', () => {
    assert.equal(printDiamond('D'), 'A B B C C D D C C B B A')
  })
})
