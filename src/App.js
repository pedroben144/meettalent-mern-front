
import { useEffect, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";

import fixHeight from "./fixHeightMobile";

import MainWrapper from './containers/Main';




function App() {

  const [ mainStyle, setMainStyle ] = useState('white');

  useEffect(fixHeight, []);

  return (
    <Router>
      <MainContext.Provider value={{ mainStyle, setMainStyle }}>
        <MainWrapper>
          <Routes/>
        </MainWrapper>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
