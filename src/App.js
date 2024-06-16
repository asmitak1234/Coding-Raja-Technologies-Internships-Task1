import './App.css';
import Alert from './Components/Alert';
import Front from './Components/Front';
import Navbar from './Components/Navbar';
import React,{useState} from 'react';

export default function App()
 {
  const [idoftemp, setidoftemp]=useState(null);
  
  const[countweadd,setcountweadd]=useState(1);
  const[countreferadd,setcountreferadd]=useState(1);
  const[countaqadd,setcountaqadd]=useState(1);
  const[countpadd,setcountpadd]=useState(1);

  function hideHomePage(integer)
  {
    setidoftemp(integer);
    document.getElementById("home-page").style.display="none";
    document.getElementById("cv-form").style.display="block";
    showalert("Enter the Form Below !!",'success');
    window.alert("Do not Refresh this page at any time ,it can lead to loss of all your data");
  }

  let addweobj=document.getElementById("we");
  let weaddbtn=document.getElementById("weAddButton");
  function addNewWEField()
  {
    const head=document.createElement('div');
    let addwe=addweobj.appendChild(head);
    head.innerHTML=('<div id="weinput"><label for=""><strong>Work Experience : </strong></label><br/><label><p>Company Name:</p></label><input type="text" placeholder="Enter Here..." class="form-control weFieldcompany mb-2"/><label><p>Year of Service:</p></label><input type="text" placeholder="Enter Here..." class="form-control weFieldyear mb-2"/><label><p>Job Title:</p></label><input type="text" placeholder="Enter Here..." class="form-control weFieldjobtitle mb-2"/><label><p>Responsibilities/Detail/About Job:</p></label><input type="text" placeholder="Enter Here..." class="form-control weFieldabout mb-2"/></div>');
    addweobj.insertBefore(addwe,weaddbtn);
    setcountweadd((countweadd+1));
 
  }
    
  
  let addreferobj=document.getElementById("refer");
    let referaddbtn=document.getElementById("referAddButton"); 
  function addNewreferField()
  {
    const head=document.createElement('div');
    let addrefer=addreferobj.appendChild(head);
    head.innerHTML=('<div id="referinput"><label><strong>References : </strong></label><br/><label><p>Name:</p></label><input type="text" placeholder="Enter Here..." class="form-control referFieldname mb-2"/><label><p>Company Name:</p></label><input type="text" placeholder="Enter Here..." class="form-control referFieldcompany mb-2"/><label><p>Job Title:</p></label> <input type="text" placeholder="Enter Here..." class="form-control referFieldjobt mb-2"/><label><p>Contact -may be email,number:</p></label><input type="text" placeholder="Enter Here..." class="form-control referFieldcontacts mb-2"/></div>');
    addreferobj.insertBefore(addrefer,referaddbtn);
    setcountreferadd((countreferadd+1));
   
  }
  

  let addaqobj=document.getElementById("aq");
  let aqaddbtn=document.getElementById("aqAddButton");
  function addNewAQField()
    {
      const head=document.createElement('div');
      let addaq=addaqobj.appendChild(head);
      head.innerHTML=(`<div id="aqinput">
                                <label><strong>Academic Qualifications/Educational Details : </strong></label><br/>
                                <label><p>Degree Name:</p></label>
                                <input type="text" placeholder="Enter Here..." class="form-control aqFielddeg mb-2"/>
                                <label><p>Session/Year:</p></label>
                                <input type="text" placeholder="Enter Here..." class="form-control aqFieldyear mb-2"/>
                                <label><p>School/College Name:</p></label>
                                <input type="text" placeholder="Enter Here..." class="form-control aqFieldscname mb-2"/>
                                <label><p>Detail -may be about cgpa/sgpa/percentage/marks:</p></label>
                                <input type="text" placeholder="Enter Here..." class="form-control aqFieldabout mb-2"/>
                        </div>`);                  
      addaqobj.insertBefore(addaq,aqaddbtn);
      setcountaqadd((countaqadd+1));
    }


  let addprojectsobj=document.getElementById("projects");
    let projectsaddbtn=document.getElementById("projectsAddButton");
  function addNewprojectsField()
  {
    const head=document.createElement('div');
    let addprojects=addaqobj.appendChild(head);
    head.innerHTML=('<div id="projectsinput"><label><strong>Projects : </strong></label><br/><label><p> Project Name:</p></label><input type="text" placeholder="Enter Here..." class="form-control projectsFieldname mb-2"/><label><p>Duration:</p></label><input type="text" placeholder="Enter Here..." class="form-control projectsFielddur mb-2"/> <label><p>Tech-Stack Used:</p></label><input type="text" placeholder="Enter Here..." class="form-control projectsFieldtech mb-2"/><label><p>Detail/Summary/About</p></label><input type="text" placeholder="Enter Here..." class="form-control projectsFieldabout mb-2"/></div>');
    addprojectsobj.insertBefore(addprojects,projectsaddbtn);
    setcountpadd((countpadd+1));
      
  }
  

   
  
  function addNewlangField()
  {
    let addlang=document.createElement("input");
    addlang.setAttribute('type','text');
    addlang.classList.add("form-control");
    addlang.classList.add("langField");
    addlang.classList.add("mb-2");
    
    addlang.setAttribute("placeholder","Enter Here...");

    let addlangobj=document.getElementById("lang");
    let langaddbtn=document.getElementById("langAddButton");
    addlangobj.insertBefore(addlang,langaddbtn);
  }

  function addNewhobbyField()
  {
    let addhobby=document.createElement("input");
    addhobby.setAttribute('type','text');
    addhobby.classList.add("form-control");
    addhobby.classList.add("hobbyField");
    addhobby.classList.add("mb-2");
    
    addhobby.setAttribute("placeholder","Enter Here...");

    let addhobbyobj=document.getElementById("hobby");
    let hobbyaddbtn=document.getElementById("hobbyAddButton");
    addhobbyobj.insertBefore(addhobby,hobbyaddbtn);
  }
  
  function addNewskillsField()
  {
    let addskills=document.createElement("input");
    addskills.setAttribute('type','text');
    addskills.classList.add("form-control");
    addskills.classList.add("skillsField");
    addskills.classList.add("mb-2");
    
    addskills.setAttribute("placeholder","Enter Here...");

    let addskillsobj=document.getElementById("skills");
    let skillsaddbtn=document.getElementById("skillsAddButton");
    addskillsobj.insertBefore(addskills,skillsaddbtn);
  }
  
  function addNewcertField()
  {
    let addcert=document.createElement("input");
    addcert.setAttribute('type','text');
    addcert.classList.add("form-control");
    addcert.classList.add("certField");
    addcert.classList.add("mb-2");
    
    addcert.setAttribute("placeholder","Enter Here...");

    let addcertobj=document.getElementById("cert");
    let certaddbtn=document.getElementById("certAddButton");
    addcertobj.insertBefore(addcert,certaddbtn);
  }
  function addNewawardsField()
  {
    let addawards=document.createElement("input");
    addawards.setAttribute('type','text');
    addawards.classList.add("form-control");
    addawards.classList.add("awardsField");
    addawards.classList.add("mb-2");
    
    addawards.setAttribute("placeholder","Enter Here...");

    let addawardsobj=document.getElementById("awards");
    let awardsaddbtn=document.getElementById("awardsAddButton");
    addawardsobj.insertBefore(addawards,awardsaddbtn);
  }
 

  function addNewexpertiseField()
  {
    let addexpertise=document.createElement("input");
    addexpertise.setAttribute('type','text');
    addexpertise.classList.add("form-control");
    addexpertise.classList.add("expertiseField");
    addexpertise.classList.add("mb-2");
    
    addexpertise.setAttribute("placeholder","Enter Here...");

    let addexpertiseobj=document.getElementById("expertise");
    let expertiseaddbtn=document.getElementById("expertiseAddButton");
    addexpertiseobj.insertBefore(addexpertise,expertiseaddbtn);

  }


  let [mode,setMode]=useState("light");
  let [alert,setAlert]=useState(null);
  
  const showalert=(msg,type)=>
    {
      setAlert({
        msg:msg,
        type:type,
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);

    }
  const toggleMode=()=>
  {
    if(mode==="light")
      {
        setMode("dark");
        document.body.style.backgroundColor='#042743';
        showalert("Dark Mode is Enabled !!",'success');
      }
    else
      {
        setMode("light");
        document.body.style.backgroundColor='#c2c8f4';
        showalert("Light Mode is Enabled !!",'success');
      }
  }

function showtime()
{   
  function updateClock()
  {
    var now= new Date();
    var date=now.toDateString();
    var time=now.toLocaleTimeString();
    var datetime="================================ Date-"+date+"  and  "+"Time-"+time+"  =======================";
    document.getElementById('clock').textContent=datetime;
  }
  setInterval(updateClock,1000);
}

var imageurl;
function storeImageurl()
{
  var input=document.getElementById("imageUpload");
  var file=input.files[0];

  if(file)
    {
      imageurl=URL.createObjectURL(file);
      let btn1=document.querySelector(".buttoncolour");
      btn1.style.backgroundColor='rgb(164, 253, 144)';
      btn1.style.color='white';
    }
    if(!file){
      showalert("NO IMAGE SELECTED","danger");
    }
}


var tempclass="containertemp"+idoftemp;

  function previewCV()
  {
    //to check that the element is present in that parent element or not
    
    let tempcheck=document.getElementsByClassName(tempclass);

    let nameField1=document.querySelector("#nameField").value;
    let phonenumberField1=document.querySelector("#phonenumberField").value;
    let addressField1=document.querySelector("#addressField").value;
    let langField1=document.getElementsByClassName("langField");
    let hobbyField1=document.getElementsByClassName("hobbyField");
    let emailField1=document.querySelector("#emailField").value;
    let githubField1=document.querySelector("#githubField").value;
    let linkedField1=document.getElementById("linkedField").value;
    let jobField1=document.querySelector("#jobField").value;
    let objectiveField1=document.querySelector("#objectiveField").value;
    let expertiseField1=document.getElementsByClassName("expertiseField");
    let skillsField1=document.getElementsByClassName("skillsField");
    let certField1=document.getElementsByClassName("certField");
    let awardsField1=document.getElementsByClassName("awardsField");

    // work experience fields
    let weFieldcom=document.getElementsByClassName("weFieldcompany");
    let weFieldy=document.getElementsByClassName("weFieldyear");
    let weFieldjt=document.getElementsByClassName("weFieldjobtitle");
    let weFieldabt=document.getElementsByClassName("weFieldabout");

    // education fields
    let aqFieldy=document.getElementsByClassName("aqFieldyear");
    let aqFieldd=document.getElementsByClassName("aqFielddeg");
    let aqFieldsc=document.getElementsByClassName("aqFieldscname");
    let aqFieldabt=document.getElementsByClassName("aqFieldabout");

    // reference fields
    let rFieldn=document.getElementsByClassName("referFieldname");
    let rFieldcom=document.getElementsByClassName("referFieldcompany");
    let rFieldjt=document.getElementsByClassName("referFieldjobt");
    let rFieldct=document.getElementsByClassName("referFieldcontacts");
   
        // projects fields
        let pFieldn=document.getElementsByClassName("projectsFieldname");
        let pFielddur=document.getElementsByClassName("projectsFielddur");
        let pFieldt=document.getElementsByClassName("projectsFieldtech");
        let pFieldabt=document.getElementsByClassName("projectsFieldabout");

  for(var i=0;i<tempcheck.length;i++)     //tempcheck.item.length
    {
    // for name
    var nameall="#namet"+idoftemp;
    var names=tempcheck[i].querySelector(nameall);
    
    if(names)
    {
    names.innerHTML=nameField1;
    }
    else{
      console.log("NO ELEMENT FOUND HAVING ID "+nameall);
    }

    //for phone-number

    // let phonenumberField1=document.querySelector("#phonenumberField").value;
    // var phonenumberall="#phonenumbert"+idoftemp;
    // document.querySelector(phonenumberall).innerHTML=phonenumberField1;

    var phonenumberall="#phonenumbert"+idoftemp;
    var phonenumbers=tempcheck[i].querySelector(phonenumberall);
    if(phonenumbers)
    {
    phonenumbers.innerHTML=phonenumberField1;
    }
    else{
      console.log("NO ELEMENT FOUND HAVING ID "+phonenumberall);
    }

     //for address
    //  let addressField1=document.getElementById("addressField").value;
    //  var addressall="addresst"+idoftemp;
    //  document.getElementById(addressall).innerHTML=addressField1;
    var addressall="#addresst"+idoftemp;
    var addresss=tempcheck[i].querySelector(addressall);
    if(addresss)
    {
    addresss.innerHTML=addressField1;
    }
    else{
      console.log("NO ELEMENT FOUND HAVING ID "+addressall);
    }
     
    //  for image
    // var imageall="imageUploadt"+idoftemp;
    // document.getElementById(imageall).src=imageurl;

    var imageall="#imageUploadt"+idoftemp;
    var imagess=tempcheck[i].querySelector(imageall);
    if(imagess)
    {
      imagess.src=imageurl;
    }
    else{
     
      console.log("NO ELEMENT FOUND HAVING ID "+imageall);
    }
    //for language
  //   let langField1=document.getElementsByClassName("langField");
  //   var strlang="";
  //   for(let e of langField1)
  //     {
  //       strlang=strlang+`<li> ${e.value} </li>`;
  //     }
  //   var langall="#langt"+idoftemp;
  //  document.querySelector(langall).innerHTML=strlang;

  var langall="#langt"+idoftemp;
   var langs=tempcheck[i].querySelector(langall);
   if(langs)
   {
    var strlang="";
    for(let e of langField1)
      {
        strlang=strlang+`<li> ${e.value} </li>`;
      }
   langs.innerHTML=strlang;
   }
   else{
    console.log("NO ELEMENT FOUND HAVING ID "+langall);
   }

   //for hobby
   var hobbyall="#hobbyt"+idoftemp;
   var hobbys=tempcheck[i].querySelector(hobbyall);
   if(hobbys)
    {
   
   var strhobby="";
   for(let e of hobbyField1)
     {
       strhobby=strhobby+`<li> ${e.value} </li>`;
     }
   hobbys.innerHTML=strhobby;
    }
    else{
      console.log("NO ELEMENT FOUND HAVING ID "+hobbyall);
    }

  //for email
  // let emailField1=document.querySelector("#emailField").value;
  // var emailall="#emailt"+idoftemp;
  // document.querySelector(emailall).innerHTML=emailField1;

  var emailall="#emailt"+idoftemp;
    var emails=tempcheck[i].querySelector(emailall);
    if(emails)
    {
      emails.innerHTML=emailField1;
    }
    else{
      console.log("NO ELEMENT FOUND HAVING ID "+emailall);
    }

  //for github
  // var githuball="#githubt"+idoftemp;
  // let githubField1=document.querySelector("#githubField").value; 
  // document.querySelector(githuball).innerHTML=githubField1;
  var githuball="#githubt"+idoftemp;
    var githubs=tempcheck[i].querySelector(githuball);
    if(githubs)
    { 
      githubs.innerHTML=githubField1;
    }
    else{
      console.log("NO ELEMENT FOUND HAVING ID "+githuball);
    }

  //for linkedin
  //  var linkedall="linkedt"+idoftemp;
  //  let linkedField1=document.getElementById("linkedField").value;
  // document.getElementById(linkedall).innerHTML=linkedField1;
  var linkedall="#linkedt"+idoftemp;
  var linkeds=tempcheck[i].querySelector(linkedall);
  if(linkeds)
  {
    linkeds.innerHTML=linkedField1;
  }
  else{
    console.log("NO ELEMENT FOUND HAVING ID "+linkedall);
  }

/////////////////////////////////////////////////professional details////////////////////////////////////////////////////////////////////////

 
    let lis="<li>"; let lie="</li>";
    let h4s="<h4>";let h4e="</h4>";
    let h5s="<h5>";let h5e="</h5>";
    let h6s="<h6>";let h6e="</h6>";
    let ps="<p>--";let pe="</p>";

  //for work experience   
var weall="#wet"+idoftemp;
var wes=tempcheck[i].querySelector(weall);
if(wes)
  {
    var strwe="";
    let arrayswe=[weFieldcom,weFieldy,weFieldjt,weFieldabt];

    for(let i=0; i<countweadd;i++)
    { 
      for(let j=0;j<4;j++)
        {
          
              if(arrayswe[j][i]!==undefined)
                {
                  strwe=strwe+(j===0?(lis+h4s+arrayswe[j][i].value+h4e):j===1?(h5s+arrayswe[j][i].value+h5e):j===2?(h6s+arrayswe[j][i].value+h6e):(ps+arrayswe[j][i].value+pe+lie));
                }
            
        }
    }
    wes.innerHTML=strwe;

   }

   else{
     console.log("NO ELEMENT FOUND HAVING ID "+weall);
    }

  //for education
  var aqall="#aqt"+idoftemp;
var aqs=tempcheck[i].querySelector(aqall);
if(aqs)
   {
  var straq="";
  let arraysaq=[aqFieldy,aqFieldd,aqFieldsc,aqFieldabt];

  for(let i=0; i<countaqadd;i++)
    { 
      for(let j=0;j<4;j++)
        {
          
              if(arraysaq[j][i]!==undefined)
                {
                  straq=straq+(j===0?(lis+h4s+arraysaq[j][i].value+h4e):j===1?(h5s+arraysaq[j][i].value+h5e):j===2?(h6s+arraysaq[j][i].value+h6e):(ps+arraysaq[j][i].value+pe+lie));
                }
            
        }
    }
  
   aqs.innerHTML=straq;
   }
   else{
     console.log("NO ELEMENT FOUND HAVING ID "+aqall);
    }
    
    //for reference
 var referall="#refert"+idoftemp;
 var refers=tempcheck[i].querySelector(referall);
  if(refers)
     {
  var strrefer="";
  let arraysrefer=[rFieldn,rFieldcom,rFieldjt,rFieldct];

  for(let i=0; i<countreferadd;i++)
    { 
      for(let j=0;j<4;j++)
        {
          
              if(arraysrefer[j][i]!==undefined)
                {
                  strrefer=strrefer+(j===0?(lis+h4s+arraysrefer[j][i].value+h4e):j===1?(h5s+arraysrefer[j][i].value+h5e):j===2?(h6s+arraysrefer[j][i].value+h6e):(ps+arraysrefer[j][i].value+pe+lie));
                }
            
        }
    }
refers.innerHTML=strrefer;
}
else{
  console.log("NO ELEMENT FOUND HAVING ID "+referall);
 } 

  //for projects
  var projectsall="#projectst"+idoftemp;
  var projectss=tempcheck[i].querySelector(projectsall);
    if(projectss)
       {
  var strprojects="";
  let arraysp=[pFieldn,pFielddur,pFieldt,pFieldabt];

  for(let i=0; i<countreferadd;i++)
    { 
      for(let j=0;j<4;j++)
        {
          
              if(arraysp[j][i]!==undefined)
                {
                  strprojects=strprojects+(j===0?(lis+h4s+arraysp[j][i].value+h4e):j===1?(h5s+arraysp[j][i].value+h5e):j===2?(h6s+arraysp[j][i].value+h6e):(ps+arraysp[j][i].value+pe+lie));
                }
            
        }
    }
projectss.innerHTML=strprojects;
}
else{
  console.log("NO ELEMENT FOUND HAVING ID "+projectsall);
 }

      //for job position
      // var joball="#jobt"+idoftemp;
      // let jobField1=document.querySelector("#jobField").value;
      // document.querySelector(joball).innerHTML=jobField1;
      var joball="#jobt"+idoftemp;
      var jobs=tempcheck[i].querySelector(joball);
      if(jobs)
      {
      jobs.innerHTML=jobField1;
      }
      else{
        console.log("NO ELEMENT FOUND HAVING ID "+joball);
      }

    //for objective
    // var objall="#objt"+idoftemp;
    // let objectiveField1=document.querySelector("#objectiveField").value;
    // document.querySelector(objall).innerHTML=objectiveField1;
    var objall="#objt"+idoftemp;
      var objs=tempcheck[i].querySelector(objall);
      if(objs)
      {
        objs.innerHTML=objectiveField1;
      }
      else{
        console.log("NO ELEMENT FOUND HAVING ID "+objall);
      }



  //for expertise
  var expall="#expt"+idoftemp;
  var exps=tempcheck[i].querySelector(expall);
if(exps)
   {
  var strexp="";
  for(let e of expertiseField1)
    {
      strexp=strexp+`<li> ${e.value} </li>`;
    } 
exps.innerHTML=strexp;
}
else{
  console.log("NO ELEMENT FOUND HAVING ID "+expall);
 }

  //for skills
  var skillall="#skillt"+idoftemp;
  var skills=tempcheck[i].querySelector(skillall);
  if(skills)
     {
  var strskill="";
  for(let e of skillsField1)
    {
      strskill=strskill+`<li> ${e.value} </li>`;
    }
skills.innerHTML=strskill;
}
else{
  console.log("NO ELEMENT FOUND HAVING ID "+skillall);
 }
 

 
  //for certificates
    var certall="#certt"+idoftemp;
    var certs=tempcheck[i].querySelector(certall);
    if(certs)
       {
  var strcert="";
  for(let e of certField1)
    {
      strcert=strcert+`<li> ${e.value} </li>`;
    }
certs.innerHTML=strcert;
}
else{
  console.log("NO ELEMENT FOUND HAVING ID "+certall);
 }
 
 //for awards
  var awardsall="#awardst"+idoftemp;
  var awardss=tempcheck[i].querySelector(awardsall);
    if(awardss)
       {
  var strawards="";
  for(let e of awardsField1)
    {
      strawards=strawards+`<li> ${e.value} </li>`;
    }
awardss.innerHTML=strawards;
}
else{
  console.log("NO ELEMENT FOUND HAVING ID "+awardsall);
 }


}

    var templateclass="."+"containertemp"+idoftemp; 
    if(idoftemp===1)
    {
      document.querySelector(templateclass).removeAttribute("id");
    }
    else{
    document.querySelector(templateclass).style.display="inline-block";
    }

    document.querySelector("#cv-form").style.display="none";

    document.querySelector("#lastcomment").style.display="block";
    document.querySelector("#printcv").style.display="inline";
    
  }

 
  function PrintCVpdf()
  {window.alert("If The Colours Or Graphics Are Not Visible ,PLEASE Tick The 'Background Graphics' Option in the 'More Settings'...")

   window.print();
   
  }

  // function PrintCVword()
  // {
  //   console.log("printed in word");
  // }

  // function PrintCVimage()
  // {
  //   console.log("printed in image");
  // }

  return (
  <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Front mode={mode} toggleMode={toggleMode} PrintCVpdf={PrintCVpdf} storeImageurl={storeImageurl} showtime={showtime} addNewawardsField={addNewawardsField} addNewprojectsField={addNewprojectsField} addNewWEField={addNewWEField} addNewcertField={addNewcertField} addNewreferField={addNewreferField} addNewskillsField={addNewskillsField} addNewhobbyField={addNewhobbyField} addNewexpertiseField={addNewexpertiseField} addNewAQField={addNewAQField} addNewlangField={addNewlangField} hideHomePage={hideHomePage} previewCV={previewCV}/>

  </>
  );
}