import React from 'react';
import { Button, Divider, Grid, Container, Input, Form, Checkbox, Segment } from 'semantic-ui-react';
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
  return (
    <div className="App">
      <BannerComponent></BannerComponent>
      <Subbanner></Subbanner>
        <div>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <Form>
                  <Form.Field>
                    <label>Escribe tu correo</label>
                    <input placeholder='e-mail' />
                  </Form.Field>
                  <Form.Field>
                    <label>Escribe tu contraseña</label>
                    <input placeholder='contraseña' />
                  </Form.Field>
                  <Form.Field>
                  </Form.Field>
                  <Button size="large" color="pink" content="Entrar" onClick={logIn}></Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div>
     
        <Router>
          <ul>
            <li>
              <Link to="/adminhome">Administrador</Link>
              {/* esto crea la ruta */}
            </li>
          </ul>
          {/* <Route path="./pages/adminhome" component={Adminhome} /> */}
          {/* esto me dice que componente mostrar */}
        </Router>

        <Segment/>
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
