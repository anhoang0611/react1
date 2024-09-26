// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    // JSX
    render() {
        const myInfor = ['ab', 'c', 'c']

        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor name="Ask me" age="30" />
                <hr />
                <DisplayInfor name={"me"} age={26} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;