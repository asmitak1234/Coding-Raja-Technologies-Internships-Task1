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
                        <li>---Prints your Resume in Different Formats---</li>
                        <li>---User-Friendly Design---</li>
                        <li>---Totally Secure---</li>
                        <li>---No Need To Login or Register---</li>
                        <li>---Flexible---</li>
                    </ul>
                </div>
                <hr></hr><hr></hr>
                <div className="realtime-clock text-center bottom my-10" id="clock">
                    <h2>Date & Time<br/></h2>
                    {props.showtime()}
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
                        <label htmlFor="nameField"><strong>Enter Your Full Name : </strong></label>
                        <input type="text" id="nameField" placeholder="Enter Your Name Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phonenumberField"><strong>Contact Numbers :</strong> </label>
                        <input type="text" id="phonenumberField" placeholder="Enter Your Contact Numbers..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressField"><strong>Address : </strong></label>
                        <textarea type="text" id="addressField" placeholder="Enter Your Address Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        {/* <form action="#" method="post" encType="multipart/form-data"> */}
                            <label htmlFor="imageUpload"><strong>Choose a Profile Image :</strong></label><br/>
                            <input type="file" id="imageUpload" accept="image/*" name="imageUpload"></input>
                            <input type="submit" className="buttoncolour" onClick={props.storeImageurl}></input>
                        {/* </form> */}
                    </div><br/>
                    <div className="form-group" id="lang">
                                <label htmlFor=""><strong>Languages Known: </strong></label>
                                <input type="text" placeholder="Enter Here..." className="form-control langField mb-2"/>
                                
                                <div className="container text-center mt-2 mb-3" id="langAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewlangField}>Add More</button>
                                </div>
                    </div>
                    <div className="form-group" id="hobby">
                                <label htmlFor=""><strong>Interests and Hobbies :</strong></label>
                                <input type="text" placeholder="Enter Here..." className="form-control hobbyField mb-2"/>

                                <div className="container text-center mt-2 mb-3" id="hobbyAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewhobbyField}>Add More</button>
                                </div>
                    </div>
                    <p className="text-secondary my-3">Important Links :</p>
                    
                    <div className="form-group">
                        <label htmlFor="emailField"> <strong>E-Mail Address : </strong></label>
                        <input type="text" id="emailField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="githubField"> <strong>Github : </strong></label>
                        <input type="text" id="githubField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="linkedField"><strong>LinkedIn :</strong> </label>
                        <input type="text" id="linkedField" placeholder="Enter Here..." className="form-control mb-2"/>
                    </div>
                </div>

                <div className="col-md-6">
                    <h3  className=" text-center">Professional Details :</h3><br/>
                    <div className="form-group">
                                <label htmlFor="jobField"><strong>Job Title :</strong> </label>
                                <input  id="jobField" type="text" placeholder="Enter Here..." rows="5" className="form-control mb-2"/>
                    </div>
                    <div className="form-group">
                                <label htmlFor="objectiveField"><strong>Career Objective/Summary/Profile :</strong> </label>
                                <textarea  id="objectiveField" type="text" placeholder="Enter Here..." rows="5" className="form-control mb-2"/>
                    </div>
                    <div className="form-group" id="we">
                        <div id="weinput">
                                <label htmlFor=""><strong>Work Experience : </strong></label><br/>
                                
                                <label><p>Company Name:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control weFieldcompany mb-2"/>
                                <label><p>Year of Service:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control weFieldyear mb-2"/>
                                <label><p>Job Title:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control weFieldjobtitle mb-2"/>
                                <label><p>Responsibilities/Detail/About Job:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control weFieldabout mb-2"/>
                        </div>
                                <div className="container text-center mt-2 mb-3" id="weAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewWEField}>Add More</button>
                                </div>
                    </div>

                    <div className="form-group" id="aq">
                        <div id="aqinput">
                                <label htmlFor=""><strong>Academic Qualifications/Educational Details : </strong></label><br/>
                                <label><p>Degree Name:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control aqFielddeg mb-2"/>
                                <label><p>Session/Year:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control aqFieldyear mb-2"/>
                                <label><p>School/College Name:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control aqFieldscname mb-2"/>
                                <label><p>Detail -may be about cgpa/sgpa/percentage/marks:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control aqFieldabout mb-2"/>
                        </div>
                                <div className="container text-center mt-2 mb-3" id="aqAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewAQField}>Add More</button>
                                </div>
                    </div>
            
                    <div className="form-group" id="expertise">
                                <label htmlFor=""><strong>Expertise In : </strong></label>
                                <input type="text" placeholder="Enter Here..." className="form-control expertiseField mb-2"/>

                                <div className="container text-center mt-2 mb-3" id="expertiseAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewexpertiseField}>Add More</button>
                                </div>
                                
                    </div>
                    <div className="form-group" id="skills">
                                <label htmlFor=""><strong>Skills : </strong></label>
                                <input type="text" placeholder="Enter Here..." className="form-control skillsField mb-2"/>

                                <div className="container text-center mt-2 mb-3" id="skillsAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewskillsField}>Add More</button>
                                </div>
                                
                    </div>
                   
                    <div className="form-group" id="refer">
                        <div id="referinput">
                                <label htmlFor=""><strong>References : </strong></label><br/>

                                <label><p>Name:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control referFieldname mb-2"/>
                                <label><p>Company Name:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control referFieldcompany mb-2"/>
                                <label><p>Job Title:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control referFieldjobt mb-2"/>
                                <label><p>Contact -may be email,number:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control referFieldcontacts mb-2"/>
                        </div>
                                <div className="container text-center mt-2 mb-3" id="referAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewreferField}>Add More</button>
                                </div>
                    </div>
                    <div className="form-group" id="cert">
                                <label htmlFor=""><strong>Cources and Certificates: </strong></label>
                                <input type="text" placeholder="Enter Here..." className="form-control certField mb-2"/>
                                
                                <div className="container text-center mt-2 mb-3" id="certAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewcertField}>Add More</button>
                                </div>
                    </div>
                    <div className="form-group" id="awards">
                                <label htmlFor=""><strong>Awards and Achievements: </strong></label>
                                <input type="text" placeholder="Enter Here..." className="form-control awardsField mb-2"/>

                                <div className="container text-center mt-2 mb-3" id="awardsAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewawardsField}>Add More</button>
                                </div>
                    </div>
                    <div className="form-group" id="projects">
                        <div id="projectsinput">
                                <label htmlFor=""><strong>Projects : </strong></label><br/>

                                <label><p> Project Name:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control projectsFieldname mb-2"/>
                                <label><p>Duration:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control projectsFielddur mb-2"/>
                                <label><p>Tech-Stack Used:</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control projectsFieldtech mb-2"/>
                                <label><p>Detail/Summary/About</p></label>
                                <input type="text" placeholder="Enter Here..." className="form-control projectsFieldabout mb-2"/>
                        </div>        
                                <div className="container text-center mt-2 mb-3" id="projectsAddButton">
                                    <button className="btn btn-primary btn-sm" onClick={props.addNewprojectsField}>Add More</button>
                                </div>
                    </div>

                
                </div>
            </div>
            

          <div className="container text-center mt-3">
            <button className="btn btn-primary btn-lg" onClick={props.previewCV}><strong>Preview</strong></button>
          </div>
        </div>

        <div className="hidden text-center my-4" id="lastcomment">
            <strong>"IF THERE IS EMPTY SPACES IN YOUR FINAL RESUME ,IT IS BECAUSE OF THE IMPROPER AMOUNT OF DETAILS...."</strong>
        </div>

        <div className="hidden my-7" id="printcv">
            <button className="btn btn-primary btn-lg ms-5 my-1" onClick={props.PrintCVpdf}><strong>PDF File Download</strong></button>
            <button className="btn btn-primary btn-lg ms-5 my-1" onClick={props.PrintCVword}><strong>WORD File Download</strong></button>
            <button className="btn btn-primary btn-lg ms-5 my-1" onClick={props.PrintCVimage}><strong>Image Download</strong></button> 
        </div>


        
    </>
    )
}