import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Container
} from 'semantic-ui-react'

const Attend_call = () => {
  const history = useHistory()
  return(
  <Router>

  <Container>
    <Grid divided="vertically">
      <Grid.Row columns={3}>
        <Grid.Column textAlign='center'>
        </Grid.Column>

        <Grid.Column textAlign="center">

          <Segment placeholder>
          <h3>EVENTO ACTUAL</h3>
          <Segment>
          

            <Grid columns={2} stackable textAlign='center'>
              <Divider vertical>O</Divider>

              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                <Header icon>
                    <Icon name='call' />
                  </Header>
                  <Button basic color="orange" onClick = {() => {history.push('/calls')}}>Llamadas</Button>
                 
                </Grid.Column>

                <Grid.Column>
                <Header icon>
                    <Icon name='user plus' />
                  </Header>
                  <Button basic color="green" onClick = {() => {history.push('/table')}}>Lista de Asistencia</Button>
                  
                </Grid.Column>
              </Grid.Row>
            </Grid>
            </Segment>
          </Segment>
          <br></br>
          <Button basic color="blue">CREAR NUEVO EVENTO</Button>
        </Grid.Column>

        <Grid.Column textAlign='right'> 
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>



  </Router>

)
}

export default Attend_call
