import React from "react";
class MyComponent extends React.Component {

  // Constructor is the first method called when the component is created
  constructor(props) {
    // Calls the constructor of the parent class (React.Component)
    // Must be called before using 'this'
    super(props);

    this.state = {
      count: 0,
    };

    // Binding the 'handleClick' method to the current class instance
    // So that 'this' inside handleClick refers to this component
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }  

  
  render() {
    return (
      <button onClick={this.handleClick}>
        Count: {this.state.count}
      </button>
    );
  }
}
export default MyComponent;
