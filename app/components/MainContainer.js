'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function MainContainer(props){
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  )
};

module.exports = MainContainer;
