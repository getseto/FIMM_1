import React, {useEffect} from 'react';
import { Button, Divider, Grid, Container, Input, Form, Checkbox, Segment } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import BannerComponent from "./components/Banner";
import Subbanner from './components/subbanner';
import Footer from './components/footer';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ButtonsGrid from './components/buttons_grid';
import { logIn, logOut, initFirebase } from './firebase';
import LogOut from './components/LogOut';

function Login() {
  const history = useHistory();
  return <Button size="large" icon="google" color="pink" content="Haz login con Google" onClick={() => logIn(history)}></Button>
} 
function App() {
  useEffect(() => {
    initFirebase()
  })
  return (
    <Router>
      <BannerComponent />
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <PrivateRoute path="/table">
          <LogOut />
        </PrivateRoute>
      </Switch>
      <Footer/>
    </Router>

  );
}
export default App;
