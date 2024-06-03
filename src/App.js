import './App.css';
import Alert from './Components/Alert';
import Front from './Components/Front';
import Navbar from './Components/Navbar';
import React,{useState} from 'react';

export default function App()
 {

  function hideHomePage()
  {
    document.getElementById("home-page").style.display="none";
    document.getElementById("cv-form").style.display="block";
  }

  function addNewWEField()
  {
    let addwe=document.createElement("textarea");
    addwe.classList.add("form-control");
    addwe.classList.add("weField");
    addwe.classList.add("mb-2");
    addwe.setAttribute("placeholder","Enter Here...");

    let addweobj=document.getElementById("we");
    let weaddbtn=document.getElementById("weAddButton");
    addweobj.insertBefore(addwe,weaddbtn);
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
      },1500);

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
        document.body.style.backgroundColor='rgb(249, 242, 232)';
        showalert("Light Mode is Enabled !!",'success');
      }
  }

  // function previewCV()
  // {

  // }

  // function PrintCVpdf()
  // {

  // }

  // function PrintCVword()
  // {
    
  // }

  return (
  <>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <Front mode={mode} toggleMode={toggleMode} addNewWEField={addNewWEField} addNewAQField={addNewAQField} hideHomePage={hideHomePage}/>

  </>
  );
}