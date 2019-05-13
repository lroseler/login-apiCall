import React, { Component } from 'react';
import './App.css';

export default class Success extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            latitidue: '',
            longitude:'',
            coordinates: [],
            error: null,
            isLoaded: false
            
        };
    }

    componentDidMount() {
        let lat = this.state.latitidue;
        let long = this.state.longitude;
        debugger;
        fetch(`https://api.weather.gov/points/${lat},${long}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.coordinates
              });
            },
            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    

      handleSubmit(event){
        if(event.target.latitidue === "latitidue"){
            this.setState({latitidue: event.target.latitidue});
            }
           else if(event.target.longitude === "longitude"){
            this.setState({longitude: event.target.longitude})
           }
      }   

    render(){
        const { error, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
         return(
                <>
                <p>
                    Success!
                </p>
                
                <form>
                Latitiude:
                <input type="text" name="latitiude" className="latitude" latitidue={this.state.latitidue}/><br/>
                Longitude:
                <input type="text" name="longitude" className="longitude" longitude={this.state.longitude}/><br/>
                <input type="submit" value="Submit" className="submit" onSubmit={this.handleSubmit}/>
                </form>

                <ul>
                {this.state.coordinates.map((item => 
                    <li key={item.properties.city}>{item.properties.city}{item.properties.state}</li>))}
                </ul>
                </>

            );
        }
}

}