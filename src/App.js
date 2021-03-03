import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./core/components/Routes/Routes";
import fixHeight from "./fixHeightMobile";





function App() {

  useEffect(fixHeight, []);

  return (
    <Router>
      <div className="App">
        <Routes/>
      </div>

    </Router>
    
  );
}

export default App;
