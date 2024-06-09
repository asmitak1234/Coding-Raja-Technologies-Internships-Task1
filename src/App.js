import html2canvas from 'html2canvas';
import './App.css';
import Alert from './Components/Alert';
import Front from './Components/Front';
import Navbar from './Components/Navbar';
import React,{useState} from 'react';

export default function App()
 {
  const [idoftemp, setidoftemp]=useState(null);

  function hideHomePage(integer)
  {
    setidoftemp(integer);
    document.getElementById("home-page").style.display="none";
    document.getElementById("cv-form").style.display="block";
    showalert("Enter the Form Below !!",'success');
    window.alert("Do not Refresh this page at any time ,it can lead to loss of all your data");
  }
  
  function addNewWEField()
  {
    let addwe=document.createElement("input");
    addwe.classList.add("form-control");
    addwe.classList.add("weField");
    addwe.classList.add("mb-2");
    addwe.setAttribute("placeholder","Enter Here...");
    addwe.setAttribute("type","text");

    let addweobj=document.getElementById("we");
    let weaddbtn=document.getElementById("weAddButton");
    addweobj.insertBefore(addwe,weaddbtn);

    // let parentwediv=document.getElementById("we");
    // let childElementsofwe=[];
    // for(let i=0;i<parentwediv.children.length;i++)
    //   {
    //     childElementsofwe.push(parentwediv.children[i]);
    //   }
    // let newwediv=document.createElement('div');
    // childElementsofwe.forEach(function(childElement){
    //   newwediv.appendChild(childElement);
    // });
    // parentwediv.insertBefore(newwediv,parentwediv.lastChild);

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
  function addNewreferField()
  {
    let addrefer=document.createElement("input");
    addrefer.setAttribute('type','text');
    addrefer.classList.add("form-control");
    addrefer.classList.add("referField");
    addrefer.classList.add("mb-2");
    
    addrefer.setAttribute("placeholder","Enter Here...");

    let addreferobj=document.getElementById("refer");
    let referaddbtn=document.getElementById("referAddButton");
    addreferobj.insertBefore(addrefer,referaddbtn);
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
  function addNewprojectsField()
  {
    let addprojects=document.createElement("input");
    addprojects.setAttribute('type','text');
    addprojects.classList.add("form-control");
    addprojects.classList.add("projectsField");
    addprojects.classList.add("mb-2");
    
    addprojects.setAttribute("placeholder","Enter Here...");

    let addprojectsobj=document.getElementById("projects");
    let projectsaddbtn=document.getElementById("projectsAddButton");
    addprojectsobj.insertBefore(addprojects,projectsaddbtn);
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
 function addNewAQField()
    {
      let addaq=document.createElement("textarea");
      addaq.classList.add("form-control");
      addaq.classList.add("weField");
      addaq.classList.add("mb-2");
      addaq.setAttribute("placeholder","Enter Here...");
  
      
      let addaqobj=document.getElementById("aq");
      let aqaddbtn=document.getElementById("aqAddButton");
      addaqobj.insertBefore(addaq,aqaddbtn);
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
        document.body.style.backgroundColor='rgb(187, 190, 199)';
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
    else{
      showalert("NO IMAGE SELECTED","danger");
    }
}


// let nameField1 = document.querySelector("#nameField").value; // Retrieve nameField1 outside the loop
// let tempcheck = document.getElementsByClassName(tempclass);
// for (let i = 0; i < tempcheck.length; i++) {
//     // for name
//     let nameall = "namet" + idoftemp; // Assuming idoftemp is defined somewhere
//     let names = tempcheck[i].querySelector("#" + nameall); // Using querySelector to find elements by ID

//     if (names) {
//         names.innerHTML = nameField1; // Set innerHTML directly
//     } else {
//         console.log("NO ELEMENT FOUND HAVING ID " + nameall);
//     }
// }

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
    let weField1=document.getElementsByClassName("weField");
    let jobField1=document.querySelector("#jobField").value;
    let objectiveField1=document.querySelector("#objectiveField").value;
    let aqField1=document.getElementsByClassName("aqField");
    let expertiseField1=document.getElementsByClassName("expertiseField");
    let skillsField1=document.getElementsByClassName("skillsField");
    let referField1=document.getElementsByClassName("referField");
    let certField1=document.getElementsByClassName("certField");
    let awardsField1=document.getElementsByClassName("awardsField");
    let projectsField1=document.getElementsByClassName("projectsField");

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
  

  //for work experience
var weall="#wet"+idoftemp;
var wes=tempcheck[i].querySelector(weall);
if(wes)
   {
  
  var strwe="";
  for(let e of weField1)
    {
      strwe=strwe+`<li> ${e.value} </li>`;
    }
  wes.innerHTML=strwe;
   }
   else{
     console.log("NO ELEMENT FOUND HAVING ID "+weall);
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

  //for education
  var aqall="#aqt"+idoftemp;
var aqs=tempcheck[i].querySelector(aqall);
if(aqs)
   {
  var straq="";
  for(let e of aqField1)
    {
      straq=straq+`<li> ${e.value} </li>`;
    } 
aqs.innerHTML=straq;
   }
   else{
     console.log("NO ELEMENT FOUND HAVING ID "+aqall);
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
 
 //for reference
 var referall="#refert"+idoftemp;
 var refers=tempcheck[i].querySelector(referall);
  if(refers)
     {
  var strrefer="";
  for(let e of referField1)
    {
      strrefer=strrefer+`<li> ${e.value} </li>`;
    }
refers.innerHTML=strrefer;
}
else{
  console.log("NO ELEMENT FOUND HAVING ID "+referall);
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
 
  //for projects
  var projectsall="#projectst"+idoftemp;
  var projectss=tempcheck[i].querySelector(projectsall);
    if(projectss)
       {
  var strprojects="";
  for(let e of projectsField1)
    {
      strprojects=strprojects+`<li> ${e.value} </li>`;
    }
projectss.innerHTML=strprojects;
}
else{
  console.log("NO ELEMENT FOUND HAVING ID "+projectsall);
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

 const element = document.getElementsByClassName(tempclass);
 
  function PrintCVpdf()
  {
    console.log("printed in pdf");
  }

  function PrintCVword()
  {
    console.log("printed in word");
  }

  function PrintCVimage()
  {
    console.log("printed in image");
  }




  return (
  <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <Front mode={mode} toggleMode={toggleMode} PrintCVimage={PrintCVimage} PrintCVword={PrintCVword} PrintCVpdf={PrintCVpdf} storeImageurl={storeImageurl} showtime={showtime} addNewawardsField={addNewawardsField} addNewprojectsField={addNewprojectsField} addNewWEField={addNewWEField} addNewcertField={addNewcertField} addNewreferField={addNewreferField} addNewskillsField={addNewskillsField} addNewhobbyField={addNewhobbyField} addNewexpertiseField={addNewexpertiseField} addNewAQField={addNewAQField} addNewlangField={addNewlangField} hideHomePage={hideHomePage} previewCV={previewCV}/>

  </>
  );
}