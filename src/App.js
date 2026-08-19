//import logo from './logo.svg';
import Alert from './Alert';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Myapp - Dark Mode';
      //      setInterval(() =>{
      // document.title = 'Myapp is Amazing Mode';
      //      }, 2000);

      //     setInterval(() =>{
      // document.title = 'Install Myapp Now';
      //      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Myapp - Light Mode';
    }
  }
  return (
     <>
    {/* <BrowserRouter> */}
   
    
        <Navbar title="Myapp" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar title="Myapp"/> */}
        <Alert alert={alert} />
        <div className="container my-3"></div>
          {/* <Routes> */}
            {/* /users --> Components 1
            /users/home --> --> Components 2 */}
            {/* <Route  exact path ="/about" element={<About/>}/>
            </Routes>
          <Routes> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            {/* <Route exact path="/" element={
            } /> </Routes> </BrowserRouter> */}

          

              
          
       
    



    </>
  );
}

export default App;




