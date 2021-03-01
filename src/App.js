import { useEffect } from "react";

import fixHeight from "./fixHeightMobile";

import MainWrapper from './containers/Main'



function App() {

  useEffect(fixHeight, []);

  return (
    <div className="App">
      <MainWrapper blue logo> hello</MainWrapper>
    </div>
  );
}

export default App;
