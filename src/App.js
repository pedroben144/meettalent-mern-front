import { useEffect, useState } from "react";
import { MainContext } from "./contexts/MainContext";

import fixHeight from "./fixHeightMobile";


import MainWrapper from './containers/Main';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {

  const [ mainStyle, setMainStyle ] = useState('');

  useEffect(fixHeight, []);

  return (
    <div className="App">
      <MainContext.Provider value={{ mainStyle, setMainStyle }}>
        <MainWrapper>
          <LandingPage />
        </MainWrapper>
      </MainContext.Provider>
    </div>
  );
}

export default App;
