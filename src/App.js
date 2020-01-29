import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BannerComponent from "./components/Banner";
import Subbanner from './components/subbanner';
import Footer from './components/footer';
import ButtonsGrid from './components/buttons_grid';
import { logIn } from './firebase';

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
          <PrivateRoute path="/table">
            <Subbanner />
            <DataTable />
            <LogOut />
          </PrivateRoute>
        </Switch>
      </div>
          <Footer></Footer>
          {/* //  Aqui empieza la pagina de admin home */}

          <BannerComponent></BannerComponent>
          <Subbanner></Subbanner>
          <ButtonsGrid></ButtonsGrid>      
         <Footer></Footer>
         <Divider/>
        </div>
    </div>






      );
    }
    export default App;
