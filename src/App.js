
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
import { LoadingContext } from "./contexts/LoadingContext";
import { Loading } from "./components/Loading/Loading";



function App() {

  const [ mainStyle, setMainStyle ] = useState('blue');
  const [ footer, setFooter ] = useState(false);
  const [ startLoader, setStartLoader ] = useState(true);
  const [ searchValue, setSearchValue ] = useState('');
  const [ isLogged, setIsLogged ] = useState(false);
  const [ loggedUser, setLoggedUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);


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
        <LoginContext.Provider value={{ isLogged, setIsLogged, loggedUser, setLoggedUser, getLoggedUser }}>
          <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <FooterContext.Provider value={{ setFooter }}>
              <MainWrapper>
                <LoadingContext.Provider value={{isLoading, setIsLoading}}>
                <Loading/>
                  {startLoader && <StartUp />}
                  {startLoader === false && <Routes/>}
                  {footer && <Footer />}
                </LoadingContext.Provider>
              </MainWrapper>
            </FooterContext.Provider>
          </SearchContext.Provider>
        </LoginContext.Provider>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
