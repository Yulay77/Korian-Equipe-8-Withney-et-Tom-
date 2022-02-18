import React, {useState, useEffect } from "react";
import Home from "./pages/Home";
import Connexion from './pages/Connexion';
import './App.css';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MonEtablissement from './pages/MonEtablissement';
import ScrollToTop from "./style/components/ScrollToTop";
import RotateLoader from "react-spinners/RotateLoader";




function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {
        loading ? (

        <RotateLoader
        size={20}
        margin={2}
        color={"#4EAABF"}
        loading={loading}
        speedMultiplier={1}
        />
        ) 
        : ( 
      <header className="App-Header">
          <Router>
            <ScrollToTop/>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/etablissement' component={MonEtablissement} />
              <Route path='/connexion' component={Connexion} />
            </Switch>
          </Router> 
        </header>
        )}</div>
  );
}

export default App;
