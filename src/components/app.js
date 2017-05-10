import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Child from './child';

var STEP_CACHE = 0;

class App extends Component {
  constructor(props){
    super(props);
    this.state ={count: 1 };
  }

  componentWillMount(){
    STEP_CACHE++
    console.log('%c App - componentWillMount: Step '+STEP_CACHE, 'background: purple; color: white; display: block;');
  }

  componentWillUpdate(){
    STEP_CACHE++
     console.log('%c App - componentWillUpdate: Step '+STEP_CACHE, 'background: yellow; color: black; display: block;');
  }
  
  render() {
    const {
      count
    } = this.state;
  
    STEP_CACHE++;
    console.log('%c App - render: Step '+STEP_CACHE, 'background: green; color: white; display: block;');

    return ( <div>
              <h1>Hello from my Statefull Component </h1>
                <button onClick={() => {
                    this.setState({count: count+1}) 
                    console.log('%c================================================', 'background: blue; color: white; display: block;');
                    console.log('CLICK');
                    console.log('%c================================================', 'background: blue; color: white; display: block;');
                    }
                    } 
                        ref={(ref) => { console.log('ref is executed', ref) }}
                >
                  click - {count}
                </button>
                <Child />
              </div>)
  }
  componentDidMount(){
    STEP_CACHE++
    console.log('%c App - componentDidMount: Step '+STEP_CACHE, 'background: purple; color: white; display: block;');
  }

  componentDidUpdate(){
    STEP_CACHE++
    console.log('%c App - componentDidUpdate: Step '+STEP_CACHE, 'background: yellow; color: black; display: block;');
  }
}

export default App;