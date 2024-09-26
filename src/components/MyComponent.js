// class component
// function component
import React from "react";
class MyComponent extends React.Component {

    state = {
        name: 'Rain',
        address: 'Ask for help',
        age: 26
    };
    handleClick(event) {
        console.log(">> Click button")
        console.log("My name is ", this.state.name)
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }
    // JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;