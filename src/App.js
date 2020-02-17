import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import BannerComponent from "./components/Banner";
import Subbanner from './components/Subbanner';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { initFirebase } from './firebase';
import LogOut from './components/LogOut';
import LogIn from './components/LogIn';
import DataTable from './pages/table';
import './App.css';
import EventList from './components/Events';
import NewEvent from './components/NewEvent';

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
        <PrivateRoute exact path="/events/:id">
          <Subbanner />
          <DataTable firebaseApp={firebaseApp} />
          <LogOut />
        </PrivateRoute>
        <PrivateRoute exact path={["/", "/events"]}>
          <Subbanner />
          <EventList firebaseApp={firebaseApp} />
          <LogOut />
        </PrivateRoute>
        <PrivateRoute path="/newevent">
          <Subbanner />
          <NewEvent firebaseApp={firebaseApp} />
          <LogOut />
        </PrivateRoute>
      </Switch>
      </div>
      <Footer />
    </Router>

  );
}
export default App;
