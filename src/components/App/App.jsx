import React from 'react';
import './App.scss';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Doctor from "./Doctor/Doctor";
import Priem from "./Priem/Priem";
import Lawyer from "./Lawyer/Lawyer";

function App(props) {


  return (
    <Router>
        <Routes>
            <Route path={'/login/'} element={<Login />}/>
            <Route path={'/registration/'} element={<Registration />}/>
            <Route path={'/doctor/'} element={<Doctor />}/>
            <Route path={'/priem/'} element={<Priem />}/>
            <Route path={'/lawyer/'} element={<Lawyer />}/>
        </Routes>

    </Router>
  );
}

export default App;
