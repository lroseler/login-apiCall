import React, { Component } from 'react';
import './App.css';
import Success from './success.js';
import Error from './error.js';


export default class NextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: ''
        };
    }
  
   render(){
        const isLoggedIn = this.state.login;
        
        if (isLoggedIn) {
          return <Success />;
          }
       else{
          return <Error />;
         }
       
   }
}