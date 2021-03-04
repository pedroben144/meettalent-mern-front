
import { useEffect, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";

import fixHeight from './fixHeightMobile';

import MainWrapper from './containers/Main';
import Footer from "./components/Footer";
import StartUp from "./components/StartUp";





function App() {

  const [ mainStyle, setMainStyle ] = useState('white');
  const [ footer, setFooter ] = useState(false);
  const [ startLoader, setStartLoader ] = useState(true);

  useEffect(fixHeight, []);
  useEffect(() => {setTimeout(() => setStartLoader(false), 2000)}, []);

  return (
    <Router>
      <MainContext.Provider value={{ mainStyle, setMainStyle }}>
        <MainWrapper>
          {startLoader && <StartUp />}
          {startLoader === false && <Routes/>}
          {footer && <Footer />}
        </MainWrapper>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
