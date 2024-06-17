import React from "react"
import PropTypes from "prop-types"

export default function Navbar(props)
{
    return(
        <>
        <nav id="navbar-component" className={`navbar navbar-expand-lg bg-${props.mode==='dark'?'#042743':'#c2c8f4'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{color:props.mode==='dark'?'white':'black',}}><strong>EasyResumes</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
            
        </nav>
        <hr style={{border: "2px solid white",margin:"0px",}}></hr>
        </>
    )
}