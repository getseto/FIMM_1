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
              <font color="#1e636d">
              <h2>Entrega de Beneficipos Municipales  </h2>
              <Header.Subheader>
              <font color="#1e636d"> <h3>Trabajando con corazón<Icon name="heart" size="small" /></h3></font>
              </Header.Subheader>
              </font>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
export default BannerComponent;