import React from 'react';
import { Button, Divider, Grid, Container, Input, Form, Checkbox } from 'semantic-ui-react';
import BannerComponent from "./components/Banner";
import Subbanner from './components/subbanner';

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
              Introduce tu correo <br />
              <Input size="big" placeholder='Email' /><br />
              Introduce tu contraseña <br />
              <Input size="big" placeholder='Password...' /><br />
              <Divider />
              <Button size="large" color="pink" content="Entrar"></Button>
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>


  );
}
export default App;
 