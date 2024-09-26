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


        // console.log("Random ", Math.floor((Math.random() * 100) + 1))
        // merge State =>react class
        this.setState({
            name: 'An',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMouseOver(event) {
        // console.log(event.pageX)
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('mee')
    }
    // JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and I'm {this.state.age}

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChange(event)} />
                    <button>Submit</button>

                </form>
            </div>
        );
    }
}

export default MyComponent;