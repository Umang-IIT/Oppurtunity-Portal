import React from "react";
import "./Input.css";

function Input(props){
    const [state,setState] = React.useState(0);
    function Increase(){
        setState(state + 1);
    }

    return (
        <div>
            <h5 style={{color: "grey"}}>{props.Heading}</h5>
            <div className="mb-2 " style={(state >=1 )?{display: "block" }:{display: "none"}}>
                <input placeholder="Title" type="text" className="form-control" style={{display:"block"}}/>
                <textarea placeholder="Description" className="form-control"></textarea>
            </div>
            <div className="mb-2 " style={(state >=2 )?{display: "block" }:{display: "none"}}>
                <input placeholder="Title" type="text" className="form-control" style={{display:"block"}}/>
                <textarea placeholder="Description" className="form-control"></textarea>
            </div>
            <div className="mb-2 " style={(state >=3 )?{display: "block" }:{display: "none"}}>
                <input placeholder="Title" type="text" className="form-control" style={{display:"block"}}/>
                <textarea placeholder="Description" className="form-control"></textarea>
            </div>
            <a onClick={Increase} className="btn add-btn">+ Add {props.Add}</a>
        </div>
    );
}

export default Input;