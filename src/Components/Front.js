import React from "react"
import PropTypes from "prop-types"

export default function Front(props) 
{

    return(
        <>
        <div className="container mt-4" id="home-page" style={{color:props.mode==='dark'?'rgb(249, 242, 232)':'#042743',}}>
            <h2>EasyResumes - A way to find your perfect resume with different Templates !!</h2>
            <div className="row my-5">
                <div className="col-2">
                    <h4 className="mt-4">Why Choose EasyResumes ?? </h4><br/>
                    <ul>
                        <li>Easy to Create</li>
                        <li>Have Different Templates</li>
                        <li>ATS Friendly</li>
                        <li>Prints your resume in different formats</li>
                        <li>User-Friendly Design</li>
                    </ul>
                </div>
                <div className="col-10 text-center my-4 container">
                    <h4>Make your Resume at only 1 click. </h4><br/>
                    <h5>Choose your Template Structure : </h5><br/>
                    <div className="row mb-5">
                        
                        <div className="col-6 ">
                            <a href="#cv-form" onClick={props.hideHomePage}>
                                <img src="resume t1.png" alt="..." style={{height:"30rem",width:'25rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                            </a>
                        </div>
                        
                        
                        <div className="col-6">
                            <a href="#cv-form" onClick={props.hideHomePage}>
                                <img src="resume t2.png" alt="..." style={{height:"30rem",width:'25rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>
                        
                    </div>
                    <div className="row mb-5">
                        
                        <div className="col-6">
                            <a href="#cv-form " onClick={props.hideHomePage}>
                                <img src="resume t3.png" alt="..." style={{height:"30rem",width:'25rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>
                        
                        
                        <div className="col-6">
                            <a href="#cv-form " onClick={props.hideHomePage}>
                                <img src="resume t4.png" alt="..." style={{height:"30rem",width:'25rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>
                        
                    </div>
                    <div className="row mb-5">
                        <div className="col-6">
                        <a href="#cv-form" onClick={props.hideHomePage}>
                            <img src="resume t5.png" alt="..." style={{height:"30rem",width:'25rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>
                        <div className="col-6">
                        <a href="#cv-form " onClick={props.hideHomePage}>
                            <img src="resume t6.png" alt="..." style={{height:"30rem",width:'25rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-6">
                        <a href="#cv-form" onClick={props.hideHomePage}>
                            <img src="resume t7.png" alt="..." style={{height:"30rem",width:'25rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>
                        <div className="col-6">
                        <a href="#cv-form " onClick={props.hideHomePage}>
                            <img src="resume t8.jpg" alt="..." style={{height:"30rem",width:'25rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="cv-form"  className="container" style={{color:props.mode==='dark'?'rgb(249, 242, 232)':'#042743',}}>
            <h1 className="text-center mt-4">Generate Your Resume</h1>
            <h3 className="mt-5 text-center">Enter Your Details Below : </h3><br/>
            <div className="row">
                <div className="col-md-6">
                        <h3 className=" text-center">Personal Details :</h3><br/>
                    <div className="form-group">
                        <label htmlFor="nameField">Enter Your Full Name : </label>
                        <input type="text" id="nameField" placeholder="Enter Your Name Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactField">Contact Numbers : </label>
                        <input type="text" id="contactField" placeholder="Enter Your Contact Numbers..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressField">Address : </label>
                        <textarea type="text" id="addressField" placeholder="Enter Your Address Here..." className="form-control mb-2"/>
                    </div>

                    <p className="text-secondary my-3">Important Links :</p>
                    
                    <div className="form-group">
                        <label htmlFor="fbField">Facebook : </label>
                        <input type="text" id="fbField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="instaField">Instagram :</label>
                        <input type="text" id="instaField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedField">LinkedIn : </label>
                        <input type="text" id="linkedField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                </div>
            <div className="col-md-6">
            <h3  className=" text-center">Professional Details :</h3><br/>

            <div className="form-group">
                        <label htmlFor="objectiveField">Objective : </label>
                        <textarea  id="objectiveField" type="text" placeholder="Enter Here..." rows="5" className="form-control mb-2"/>
            </div>
            <div className="form-group" id="we">
                        <label htmlFor="">Work Experience : </label>
                        <textarea placeholder="Enter Here..." className="form-control weField mb-2"/>
        
                        <div className="container text-center mt-2" id="weAddButton">
                            <button className="btn btn-primary btn-sm" onClick={props.addNewWEField}>Add More</button>
                        </div>
            </div>

            <div className="form-group" id="aq">
                        <label htmlFor="">Academic Qualifications : </label>
                        <textarea placeholder="Enter Here..." className="form-control aqField mb-2"/>
            
                        <div className="container text-center mt-2 " id="aqAddButton">
                            <button className="btn btn-primary btn-sm" onClick={props.addNewAQField}>Add More</button>
                        </div>
            </div>

            </div>
            </div>
          <div className="container text-center mt-3">
            <button className="btn btn-primary btn-lg" onClick={props.previewCV}><strong>Preview</strong></button>
          </div>
       </div>

        

    </>
    )
}