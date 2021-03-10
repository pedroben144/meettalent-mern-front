
import { useEffect, useState } from "react";
import { MainContext } from "./contexts/MainContext";
import { LoginContext } from "./contexts/LoginContext";
import { SearchContext } from "./contexts/SearchContext";
import { FooterContext } from "./contexts/FooterContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";

import fixHeight from './fixHeightMobile';

import MainWrapper from './containers/Main';
import Footer from "./components/Footer";
import StartUp from "./components/StartUp";
import axios from "axios";



function App() {

  const [ mainStyle, setMainStyle ] = useState('blue');
  const [ footer, setFooter ] = useState(false);
  const [ startLoader, setStartLoader ] = useState(false);
  const [ searchValue, setSearchValue ] = useState('');
  const [ isLogged, setIsLogged ] = useState(false);
  const [ loggedUser, setLoggedUser ] = useState(null);

  const getLoggedUser = () => {
    const localToken = localStorage.getItem('token');
    const localUser = localStorage.getItem('user');
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localToken}`
      }
    };
    if (localToken && localUser) {
      setIsLogged(true);
      axios.get(process.env.REACT_APP_BASE_URL + '/user/' + localUser, axiosConfig)
      .then(function(res) {
        setLoggedUser(res.data.found);
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  }

  useEffect(fixHeight, []);
  useEffect(() => {setTimeout(() => setStartLoader(false), 3000)}, []);
  useEffect(() => getLoggedUser(), [])

  return (
    <Router>
      <MainContext.Provider value={{ mainStyle, setMainStyle }}>
        <LoginContext.Provider value={{ isLogged, setIsLogged, loggedUser, getLoggedUser }}>
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <FooterContext.Provider value={{ setFooter }}>
              <MainWrapper>
                {startLoader && <StartUp />}
                {startLoader === false && <Routes/>}
                {footer && <Footer />}
              </MainWrapper>
            </FooterContext.Provider>
          </SearchContext.Provider>
        </LoginContext.Provider>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
