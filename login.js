import React, { Component } from 'react';
import './App.css';
import './login.css';
import NextPage from './nextPage';

export default class Body extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            
            uname:'',
            pass:'',   
            login: '',
            
        };
    }

handleChange(event) {
          if(this.state.uname){
           this.setState({uname: event.target.uname});
           }
          else if(this.state.pass){
           this.setState({pass:event.target.pass});
          }
        }  
handleSubmit(event){
    event.preventDefault();
    if(this.state.uname.state=== 'foo'){
        this.setState({login: true.toString()});
        
    }
    else{
        this.setState({login: false.toString()});
        
    }
}


render(){
    
    return(
        <>
        <form onSubmit={this.handleSubmit}>
        <label>
            <div className="user">
            Username:
            <br />
            <input type="text" name="username" className="username" uname={this.state.uname}
            onChange={this.handleChange}/>
            </div>
        </label>
        <br />
        <label>
            <div className="pass">
            Password:
            <br />
            <input type="password" name="word" className="word" word={this.state.word} 
            onChange={this.handleChange} />
           </div>
        </label>
        <br />
            <input type="submit" value="Submit" />
            
        </form>
        <NextPage login={this.login}/>
        
        </>
    );
 }

}

//