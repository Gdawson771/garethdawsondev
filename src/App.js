import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav"
import Form from "./Components/Form"
import {Routes,Route,Link} from "react-router-dom" 
import ProjectSpice from "./Components/ProjectSpice"
import Drone from "./Components/Drone"
import React from "react"
import MainQuizical from "./Components/Quizical/MainQuizical"
import About from "./Components/About"
function App() {

  const [offset, setOffset] = React.useState(0);
  
  React.useEffect(() => {
  
    const opacity=0;
    const onScroll = () => setOffset(!window.pageYOffset>0? "white" : "black");
    if(window.pageYOffset==0){
      const opacity=0;
    }
    else if(window.pageYOffset!=0){
      const opacity=0.5;
    }
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    console.log("effect used "+ opacity)
    return () => window.removeEventListener('scroll', onScroll);
}, []);


  return (
    <div className="App">
      <Nav opacity={offset}/>
     

     
      <Routes>
        <Route exact path="/" element={
           <header className="App-header">
             <h1 > Hi there,<br /> I'm Gareth</h1>
          </header>
        } />
        <Route exact path="/contact" element={<Form />} />
        <Route exact path="/about" element={ <About />} />

        <Route exact path="/projects" element={
            <div className='projects--MainDiv'>
              <ProjectSpice />
              <Drone />
              <MainQuizical />
            </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
