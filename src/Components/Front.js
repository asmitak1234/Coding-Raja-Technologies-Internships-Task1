import React from "react"
import PropTypes from "prop-types"

export default function Front(props) 
{

    return(
        <>
        <div className="container mt-4" id="home-page" style={{color:props.mode==='dark'?'white':'black',}}>
            <h2>EasyResumes - A way to find your perfect resume with different Templates !!</h2>
            <div className="container">

                <div className="text-center my-4 container">
                    <h4>Make your Resume at only 1 click. </h4><br/>
                    <h5>Choose your Template Structure : </h5><br/><br/>
                    <div className="row mb-5 mx-2">
                        
                        <div className="col-md-6 mb-2">
                            <a href="#cv-form" id="resumetemp1" onClick={()=>props.hideHomePage(1)}>
                                <img src="resume-template-1.png" alt="..." style={{height:"20rem",width:'15rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                            </a>
                        </div>
                        
                        <div className="col-md-6 mb-2">
                            <a href="#cv-form" id="resumetemp2"  onClick={()=>props.hideHomePage(2)}>
                                <img src="resume-template-2.png" alt="..." style={{height:"20rem",width:'15rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                       
                        
                    </div>

                    <div className="row mb-5 mx-2">
                        
                         </div>
                        
                        <div className="col-md-6 mb-2">
                            <a href="#cv-form " id="resumetemp3"   onClick={()=>props.hideHomePage(3)}>
                                <img src="resume-template-3.png" alt="..." style={{height:"20rem",width:'15rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>

                        <div className="col-md-6 mb-2">
                            <a href="#cv-form " id="resumetemp4"   onClick={()=>props.hideHomePage(4)}>
                                <img src="resume-template-4.png" alt="..." style={{height:"20rem",width:'15rem',backgroundSize:'cover',backgroundRepeat:"no-repeat"}}/>
                        </a>
                        </div>

                    </div>   
                    
               
                </div>
                <hr></hr>
                <hr></hr>
                <div className="text-center">
                    <h4 className="mt-4">Why Choose EasyResumes ?? </h4><br/>
                    <ul type="none">
                        <li>---Easy to Create---</li>
                        <li>---Have Different Templates---</li>
                        <li>---ATS Friendly---</li>
                        <li>---Prints your resume in different formats---</li>
                        <li>---User-Friendly Design---</li>
                    </ul>
                </div>
            </div>
        </div>


        <div id="cv-form"  className="container hidden" style={{color:props.mode==='dark'?'rgb(249, 242, 232)':'#042743',}}>
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
                        <label htmlFor="phonenumberField">Contact Numbers : </label>
                        <input type="text" id="phonenumberField" placeholder="Enter Your Contact Numbers..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressField">Address : </label>
                        <textarea type="text" id="addressField" placeholder="Enter Your Address Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        {/* <form action="#" method="post" encType="multipart/form-data"> */}
                            <label>Choose a Profile Image :</label><br/>
                            <input type="file" id="imageUpload" name="imageUpload"></input>
                            {/* <input type="submit" value={upload}></input> */}
                        {/* </form> */}
                    </div><br/>
                    <div className="form-group">
                                <label htmlFor="languageField">Languages Known: </label>
                                <input type="text" id="languageField" placeholder="Enter Here..." className="form-control mb-2"/>
                                {/* add the add button */}
                    </div>
                    <div className="form-group">
                                <label htmlFor="hobbyField">Interests and Hobbies : </label>
                                <input type="text" id="hobbyField" placeholder="Enter Here..." className="form-control mb-2"/>
                                {/* add the add button */}
                    </div>
                    <p className="text-secondary my-3">Important Links :</p>
                    
                    <div className="form-group">
                        <label htmlFor="emailField">E-Mail Address : </label>
                        <input type="text" id="emailField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="githubField">Github :</label>
                        <input type="text" id="githubField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedField">LinkedIn : </label>
                        <input type="text" id="linkedField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                </div>

                <div className="col-md-6">
                    <h3  className=" text-center">Professional Details :</h3><br/>

                    <div className="form-group">
                                <label htmlFor="objectiveField">Career Objective/Summary/Profile : </label>
                                <textarea  id="objectiveField" type="text" placeholder="Enter Here..." rows="5" className="form-control mb-2"/>
                    </div>
                    <div className="form-group" id="we">
                        {/* to add more fiels like session ,job title,responsibilities,.. */}
                                <label htmlFor="">Work Experience : </label>
                                <textarea placeholder="Enter Here..." className="form-control weField mb-2"/>
                
                                <div className="container text-center mt-2" id="weAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewWEField}>Add More</button>
                                </div>
                    </div>

                    <div className="form-group" id="aq">
                        {/* to add more fiels like session ,degree,.. */}
                                <label htmlFor="">Academic Qualifications/Educational Details : </label>
                                <textarea placeholder="Enter Here..." className="form-control aqField mb-2"/>
                    
                                <div className="container text-center mt-2 " id="aqAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewAQField}>Add More</button>
                                </div>
                    </div>
                    <div className="form-group">
                                <label htmlFor="expertiseField">Expertise In : </label>
                                <input type="text" id="expertiseField" placeholder="Enter Here..." className="form-control mb-2"/>
                                {/* add the add button */}
                    </div>
                    <div className="form-group">
                                <label htmlFor="skillsField">Skills : </label>
                                <input type="text" id="skillsField" placeholder="Enter Here..." className="form-control mb-2"/>
                                {/* add the add button */}
                    </div>
                   
                    <div className="form-group" id="aq">
                        {/* to add more fiels like number ,email,.. */}
                        <label htmlFor="referenceField">References : </label>
                                <input type="text" id="referenceField" placeholder="Enter Here..." className="form-control mb-2"/>
                                {/* add the add button */}
                    </div>
                    <div className="form-group">
                                <label htmlFor="certField">Cources and Certificates: </label>
                                <input type="text" id="certField" placeholder="Enter Here..." className="form-control mb-2"/>
                                {/* add the add button */}
                    </div>
                    <div className="form-group">
                                <label htmlFor="awardsField">Awards and Achievements: </label>
                                <input type="text" id="awardsField" placeholder="Enter Here..." className="form-control mb-2"/>
                                {/* add the add button */}
                    </div>
                    <div className="form-group">
                                <label htmlFor="projectsField">Projects : </label>
                                <input type="text" id="projectsField" placeholder="Enter Here..." className="form-control mb-2"/>
                                {/* add the add button */}
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