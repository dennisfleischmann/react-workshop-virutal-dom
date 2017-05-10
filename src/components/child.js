import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var STEP_CACHE = 0;


class Child extends Component {
componentWillMount(){
    STEP_CACHE++
     console.log('%c Child - componentWillMount: Step '+STEP_CACHE, 'background: purple; color: white; display: block;');
  }
  

  componentWillUpdate(){
    STEP_CACHE++
    console.log('%c Child - componentWillUpdate: Step '+STEP_CACHE, 'background: yellow; color: black; display: block;');

  }
  
  render() {
    const {
      count
    } = this.props;
  
    STEP_CACHE++;
    console.log('%c Child - render: Step '+STEP_CACHE, 'background: red; color: white; display: block;');

    return ( <div>
              <h5 style={{fontColor:'red'}}>yay!</h5>
              </div>)
  }
  componentDidMount(){
    STEP_CACHE++
    console.log('%c Child - componentDidMount: Step '+STEP_CACHE, 'background: purple; color: white; display: block;');
  }

  componentDidUpdate(){
     STEP_CACHE++
    console.log('%c Child - componentDidUpdate: Step '+STEP_CACHE, 'background: yellow; color: black; display: block;');
  }
}

export default Child;