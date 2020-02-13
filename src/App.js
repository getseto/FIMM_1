import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import BannerComponent from "./components/Banner";
import Subbanner from './components/subbanner';
import Footer from './components/footer';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { initFirebase } from './firebase';
import LogOut from './components/LogOut';
import LogIn from './components/LogIn';
import DataTable from './pages/table';
import './App.css';
import Attend_call from './components/events';
import Search from './components/search';
import Calltable from './components/Ctable';
import Newevent from './components/Newevent';

function App() {
  useEffect(() => {
    initFirebase()
  })
  return (
    <Router>
      <div>
        <BannerComponent />
    


        <Switch>
          
          <PublicRoute path="/login">
            <LogIn />
          </PublicRoute>

          <PrivateRoute path="/events">
            <Subbanner />
            <Attend_call/>
            <LogOut />
          </PrivateRoute>

          <PrivateRoute path="/table">
            <Subbanner />
            <Search/>
            <DataTable />
            <LogOut />
          </PrivateRoute>

          <PrivateRoute path="/calls">
            <Subbanner />
            <Calltable/>
            <LogOut />
          </PrivateRoute>

          <PrivateRoute path="/newevent">
            <Subbanner />
            <Newevent/>
            <LogOut />
          </PrivateRoute>






          

          
        </Switch>
      </div>
      <Footer />
    </Router>

  );
}
export default App;
