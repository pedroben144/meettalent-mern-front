import { useEffect } from "react";
import fixHeight from "./fixHeightMobile";
import LandingPage from "./pages/LandingPage/LandingPage";




function App() {

  useEffect(fixHeight, []);

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
