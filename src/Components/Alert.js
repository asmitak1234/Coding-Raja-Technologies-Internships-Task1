import React from "react"
import PropTypes from "prop-types"

export default function Alert(props) 
{
    // const capitalize=(word)=>
    //     {
    //         const lower=word.toLowerCase();
    //         return lower.charAt(0).toUpperCase()+lower.slice(1);
    //     }
    return(
        <div id="alert-component" className="text-center" style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* {capitalize(props.alert.type)}: */}<strong>{props.alert.msg}</strong> 
        </div>}
        
        </div>
    )
}