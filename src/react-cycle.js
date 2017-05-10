import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

var STEP_CACHE = 0;

const mounElement = function() {
   return new Promise(function(resolve, reject) {
     const AppToRender = <App />
     console.log('app instantiated: Step',STEP_CACHE)
     console.log('---------------------------------------')
    ReactDOM.render(
       AppToRender
      , document.getElementById('app'), function(node) {
      resolve(this, node)
    })
  });
}

mounElement().then(function(element, ref){
  STEP_CACHE++;
  console.log('ReactDOM did render: Step ', STEP_CACHE);
  console.log('---------------------------------------')
})
