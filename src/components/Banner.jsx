import React from 'react';
import { Grid, Image, Header, Icon, Segment } from "semantic-ui-react";

const BannerComponent = () => {
    return (
        <Segment color="purple">
          <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src="https://www.zapopan.gob.mx/wp-content/uploads/2011/06/Logo_DesarrolloCombate-1.png" />
              </Grid.Column>
              <Grid.Column>
                <Header>
                <br></br> 
                  <h1>Trabajando con corazón  <Icon name="heart" size="small"/></h1>
                  <Header.Subheader>
                    <h1>Entrega de Beneficios Municipales</h1>
                  </Header.Subheader>
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
    );
} 
export default BannerComponent;