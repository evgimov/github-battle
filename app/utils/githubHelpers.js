var axios = require('axios');

var id = "YOUR_CLIEND_ID";
var sec = "YOUR_SECRET)ID";
var param = "?cliend_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
  return axios.get('http://api.github.com/users/' + username + param);
}


var helpers = {
  getPLayersInfo: function (players) {
    return axios.all(players.map(function(username){
      return getUserInfo(username)
    })).then(function(info){
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in getPlayers Info',err)
    })
  }
};

module.exports = helpers;