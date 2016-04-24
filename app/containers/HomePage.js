import React, { Component } from 'react';
import Home from '../components/Home';
import 'whatwg-fetch';

export default class HomePage extends Component {
  render() {
    return (
      <div>
       <Home />
      </div>
    );
  }
}

fetch('http://us-4.rightscale.com/')
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    document.body.innerHTML = body
  })
