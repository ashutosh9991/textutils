import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert= (message,type)=>{
      setAlert({
        msg:message,
        Type:type
      })
      setTimeout(() => {
        setAlert(null);
      },1500);
  }
  const togglemode =()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('light mode is enabled','success');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor ='#323232';
      showAlert('dark mode is enabled','success');   
    }

  }
  return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtils' mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About />}/> */}
          {/* <Route path="/" element={}/> */}
          <Textform showAlert={showAlert} heading="Enter your Text below" mode={mode}/>
      {/* </Routes>  */}
    </div>
    {/* </Router> */}
    


    </>
  );
}

export default App;
