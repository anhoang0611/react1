import React from "react";

class DisplayInfor extends React.Component {
    render() {
        // destructuring array/obj
        const { age, name } = this.props;
        // pros => viết tắt của propeties
        return (
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }
}

export default DisplayInfor;