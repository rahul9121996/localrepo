import React, { Component } from 'react'
import Counterlifecycle from './Counterlifecycle';

export default class Lifecyclemethod extends Component {
   constructor(){
    super();
    this.state={
        count:0
    }

   }

   componentDidMount(){
    console.log("componentDidMount : when component render first time")
   }

   increment(){
    this.setState({count:this.state.count+1})
   }
   componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.count}</h1>  this is used within this component  */}
       
        <Counterlifecycle number={this.state.count}/>
        <button onClick={()=>this.increment()}>click me</button>

        {/*this is the method before es6 to execute "this"  */}
        {/* <button onClick={this.increment.bind(this)}>clickme2</button> */}
      </div>
    )
  }
}
