
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
}

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#09182e';
      showAlert("Dark mode has been enable", "success")
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //     document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //     document.title = "Install TextUtils";
      // }, 1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success")
        document.title = "TextUtils - light Mode";
      }
  }

//   const removeBodyClasses = ()=>{
//     document.body.classList.remove('bg-light')
//     document.body.classList.remove('bg-dark')
//     document.body.classList.remove('bg-warning')
//     document.body.classList.remove('bg-danger')
//     document.body.classList.remove('bg-success')
// }
//   const toggleMode = (cls) => {
//     removeBodyClasses()
//     console.log(cls)
//     document.body.classList.add('bg-' + cls)
//     if (mode === 'light') {
//         setMode('dark');
//         // document.body.style.backgroundColor = '#042743';
//         showAlert("Dark mode has been enabled", "success");
//     }
//     else {
//         setMode('light');
//         document.body.style.backgroundColor = 'white';
//         showAlert("Light mode has been enabled", "success");
//     }
// }
  return (
   
  <>
  <Router>
  {/* <Navbar title="TExtUtils" aboutText="About Text" /> */}
  <Navbar title="TExtUtil" mode={mode} toggleMode={toggleMode} />
  <Alert alert= {alert}/>
  <div className="container my-3" >
    <Routes>
      <Route exact path="/about" element={<About toggleMode={toggleMode} mode={mode} />} />
        
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> 
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />     */}
    </Routes> 
    
  </div>
   </Router> 
  </>
    
  );
}

export default App;
