var sendCredentials = require('./send-credentials')
var getLocations = require('./get-locations')

module.exports = function (credentials, cb) {
  sendCredentials(credentials, function (er, user) {
    getLocations(user.uid, function (er, locations) {
      cb(null, {
        userId: user.uid,
        locationId: Object.keys(locations)[0]
      })
    })
  })
}
