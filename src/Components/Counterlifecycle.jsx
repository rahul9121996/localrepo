import React, { Component } from 'react'

export default class Counterlifecycle extends Component {

    componentDidUpdate(prevprops){
        console.log(prevprops.number)
        console.log(this.props.number)
        if(prevprops.number !== this.props.number){
            console.log("componentDidUpdate: number updated")
        }


    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
