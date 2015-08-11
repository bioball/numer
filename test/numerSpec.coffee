require '..'
chai = require('chai')
{ expect } = chai

describe 'numer', ->

  it 'adds these methods to Number.prototype', ->

    expect(Number).to.respondTo('seconds')
    expect(Number).to.respondTo('minutes')
    expect(Number).to.respondTo('hours')
    expect(Number).to.respondTo('days')
    expect(Number).to.respondTo('weeks')
    expect(Number).to.respondTo('months')

  describe 'returns the correct values', ->

    it 'for seconds', ->

      expect((1).seconds()).to.equal(1000)
      expect((3).seconds()).to.equal(3000)

    it 'for minutes', ->

      expect((1).minutes()).to.equal(60000)
      expect((3).minutes()).to.equal(180000)

    it 'for hours', ->

      expect((1).hours()).to.equal(3600000)
      expect((3).hours()).to.equal(10800000)

    it 'for days', ->

      expect((1).days()).to.equal(86400000)
      expect((3).days()).to.equal(259200000)

    it 'for months', ->

      expect((1).months()).to.equal(2592000000)
      expect((3).months()).to.equal(7776000000)

    it 'for years', ->

      expect((1).years()).to.equal(31536000000)
      expect((3).years()).to.equal(94608000000)