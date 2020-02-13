import React from "react";
import { Grid, Segment, Icon, Input } from "semantic-ui-react";


const Subbanner = () => {
  return (
    <Segment color="grey" inverted size="mini">
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>

            <Icon.Group as="h3" size='small'>
              <Icon name='home' /> Inicio
    </Icon.Group>

          </Grid.Column>
          <Grid.Column>
            <Icon.Group as="h3" size='large'>
              <Icon name="search" /> Buscar <Input size="mini" placeholder='Busca aquí' />
            </Icon.Group>


          </Grid.Column>
          <Grid.Column>
            <Icon.Group as="h3" size='large'>
              <Icon name="user" /> Usuario
    </Icon.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Subbanner;