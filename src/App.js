
import { useEffect, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";

import fixHeight from "./fixHeightMobile";

import MainWrapper from './containers/Main';
import Footer from "./components/Footer";




function App() {

  const [ mainStyle, setMainStyle ] = useState('white');
  const [ footer, setFooter ] = useState(true);

  useEffect(fixHeight, []);

  return (
    <Router>
      <MainContext.Provider value={{ mainStyle, setMainStyle, footer }}>
        <MainWrapper>
          <Routes/>
          {footer && <Footer />}
        </MainWrapper>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
