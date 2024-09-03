import React from "react";

const Button = (props) => {
    return (
        <div className="btn">
            <button className="btn-field" onClick={props.onClick}>{props.value}</button>
        </div>
    )
};
export default Button;