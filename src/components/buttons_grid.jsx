import React from 'react';
import { Grid, Button, Image, Header, Icon, Segment, Container } from "semantic-ui-react";

const ButtonsGrid = () => {
    return (
        <Segment>
            <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
              <Button fluid centered color="green" size='massive'>EVENTOS ACTUALES</Button>
              </Grid.Column>
              <Grid.Column>
              <Button fluid centered color="orange" size='massive'>EVENTOS PASADOS</Button>
              </Grid.Column>
              <Grid.Column>
              <Button  fluid centered color="purple" size='massive'>CREAR NUEVO EVENTO</Button>
              </Grid.Column>
            </Grid.Row>
            </Grid>

        </Segment>
        
           
    
    );
} 
export default ButtonsGrid;