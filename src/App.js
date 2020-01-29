import React from 'react';
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

function App() {
  let firebaseApp = initFirebase()
  return (
    <Router>
      <div>
        <BannerComponent />
        <Switch>
          <PublicRoute path="/login">
            <LogIn />
          </PublicRoute>
          <PrivateRoute path="/table">
            <Subbanner />
            <DataTable firebaseApp={firebaseApp} />
            <LogOut />
          </PrivateRoute>
        </Switch>
      </div>
      <Footer />
    </Router>

  );
}
export default App;
