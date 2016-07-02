var subject, request
module.exports = {
  beforeEach: function () {
    request = td.replace('../wrappers/request')

    subject = require('./set-state')
  },
  happyPath: function () {
    var info = {userId: 'X', locationId: 'Y', state: 'home'}
    td.when(request.post('https://simplisafe.com/mobile/X/sid/Y/set-state', {
      state: 'away',
      mobile: 1,
      no_persist: 0,
      XDEBUG_SESSION_START: 'session_name'
    })).thenCallback(null, 'some response object', {
      result: 5
    })

    var error, result
    subject('away', info, function (er) {
      error = er
    })

    assert.ifError(error)
    assert.equal(info.state, 'away')
  }
}