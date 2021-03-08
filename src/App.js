
import { useEffect, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import { FooterContext } from "./contexts/FooterContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";

import fixHeight from './fixHeightMobile';

import MainWrapper from './containers/Main';
import Footer from "./components/Footer";
import StartUp from "./components/StartUp";



function App() {

  const [ mainStyle, setMainStyle ] = useState('blue');
  const [ footer, setFooter ] = useState(false);
  const [ startLoader, setStartLoader ] = useState(false);

  useEffect(fixHeight, []);
  useEffect(() => {setTimeout(() => setStartLoader(false), 3000)}, []);

  return (
    <Router>
      <MainContext.Provider value={{ mainStyle, setMainStyle }}>
        <FooterContext.Provider value={{ setFooter }}>
          <MainWrapper>
            {startLoader && <StartUp />}
            {startLoader === false && <Routes/>}
            {footer && <Footer />}
          </MainWrapper>
        </FooterContext.Provider>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
