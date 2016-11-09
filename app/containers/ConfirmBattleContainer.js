var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');


var ConfirmBattleContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentDidMount: function(){
    var query = this.props.location.query;
    // Fetch from github then update state
  },

  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.player}
      />
    );
  }

});

module.exports = ConfirmBattleContainer;