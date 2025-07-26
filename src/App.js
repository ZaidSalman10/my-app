import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  
  const [theme, setTheme] = useState("light")
  const toggleMode = () => {
    if(theme === "light"){ 
      setTheme("dark"); 
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
      showAlert("Dark mode has been enabled");
    }
    else{ 
      setTheme("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      showAlert("Light mode has been enabled");
    }
  }

  const [alert, setAlert] = useState("");
  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert("");
    }, 2000);
  } 

  return (
    <>
    <Navbar title="TextUtils" mode={theme} toggleMode={toggleMode}/>
    <div data-bs-theme={theme}>
      <TextForm heading="Enter your text" alert={alert} />
    </div>
    </>
  );
}

export default App;
