import {Component, Fragment} from 'react';
import { Card } from './Components/Card';
import { Modal } from './Components/Modal';
import { Filter } from './Components/Filter';

import './App.css';


// converted function component to class component 
// as we had to use state and lifecycle methods
// no need of props as App is the root Parent component so won't get props from anywhere
class App extends Component {
  constructor() {
    super()
  
    this.state = {

      rockets : [],
      selectedHeight : 0
       
    }
  }

  //fetch returns a promise. A promise is something that will be either resolved or rejected at a later point.
  // then is used to hook up a handler that will be called when the promise is resolved (and optionally when it's rejected,
  // if you pass a second function into then; otherwise you'd use catch).

  componentDidMount(){
    fetch("https://api.spacexdata.com/v4/rockets")
    .then((response) =>response.json())
    .then(rockets =>this.setState({
      rockets:rockets})) // setting the rockets from response to rockets state variable
      //rockets is now array of objects
    
    
  }

  handleChange(e){
    this.setState({
      selectedHeight: e.target.value
    })
  }

  /*
main reason for using Fragment is that it is a tiny bit faster when compared to the one with the ‘div’ tag inside it, 
as we didn’t create any DOM node. 
Also, it takes less memory. 
Another shorthand also exists for the above method in which we make use of ‘<>’ and ‘</>’

  */
  
  render(){
    const { rockets, selectedHeight} = this.state; // destructuring state variables
    // filteredRockets is now an array of rockets satisfying give condition
    const filteredRockets = rockets.filter(rocket =>
      rocket.height.feet > selectedHeight );
  return (

    // no (), event implicitly passed
    <div className="container">

        <div className = "row bg-info my-3" >
          <div className = "col-12 " >
          <h1 style= {{color:'black',  fontWeight:'bold'} }>SpaceX Rocket Encyclopedia</h1> 
          </div>
        </div>

       <Filter onChange = {this.handleChange.bind(this)}/>

      <div className = "row">
     
      {filteredRockets.map((rocket) =>(
        <Fragment>
          <Card rocket = {rocket}/>
          <Modal rocket = {rocket}/>
        </Fragment>

      ))}
    </div>
    
    </div>
  );
}
}


       {/* there is no way to pass props from a child component to a parent component.
        so we are passing the function as props.
        when child filter invokes the function, it  */}

export default App;

{/*
active: false
boosters: 0
company: "SpaceX"
cost_per_launch: 6700000
country: "Republic of the Marshall Islands"
description: "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
diameter: {meters: 1.68, feet: 5.5}
engines: {isp: {…}, thrust_sea_level: {…}, thrust_vacuum: {…}, number: 1, type: "merlin", …}
first_flight: "2006-03-24"
first_stage: {thrust_sea_level: {…}, thrust_vacuum: {…}, reusable: false, engines: 1, fuel_amount_tons: 44.3, …}
flickr_images: (2) ["https://imgur.com/DaCfMsj.jpg", "https://imgur.com/azYafd8.jpg"]
height: {meters: 22.25, feet: 73}
id: "5e9d0d95eda69955f709d1eb"
landing_legs: {number: 0, material: null}
mass: {kg: 30146, lb: 66460}
name: "Falcon 1"
payload_weights: [{…}]
second_stage: {thrust: {…}, payloads: {…}, reusable: false, engines: 1, fuel_amount_tons: 3.38, …}
stages: 2
success_rate_pct: 40
type: "rocket"
wikipedia: "https://en.wikipedia.org/wiki/Falcon_1" */}

