import React from "react";
import { Grid, Segment,Icon,Header, Input } from "semantic-ui-react";


const Subbanner = () => {
  return (
    <Segment color="grey" inverted>
      <Grid columns={3} divided>
      <Grid.Row>
      <Grid.Column>

    <Icon.Group as="h1" size='large'>
      <Icon name='home' /> Inicio
    </Icon.Group>
    
      </Grid.Column>
      <Grid.Column>
      <Icon.Group as="h1" size='large'>
      <Icon name="search" /> Buscar 
      <Input size="mini" placeholder='Buscar...' />
    </Icon.Group>
    
      </Grid.Column>
      <Grid.Column>
      <Icon.Group as="h1" size='large'>
      <Icon name="user" /> Usuario
    </Icon.Group>
      </Grid.Column>
    </Grid.Row> 
    </Grid>
    </Segment>
  );
};

export default Subbanner;