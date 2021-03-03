
import { useEffect, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";

import fixHeight from "./fixHeightMobile";



import MainWrapper from './containers/Main';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {

  const [ mainStyle, setMainStyle ] = useState('');

  useEffect(fixHeight, []);

  return (

    <Router>
    <div className="App">
      <MainContext.Provider value={{ mainStyle, setMainStyle }}>
        <MainWrapper>
          <Routes/>
        </MainWrapper>
      </MainContext.Provider>
    </div>
    </Router>
  );
}

export default App;
