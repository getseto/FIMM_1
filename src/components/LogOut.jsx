import React from 'react';
import { Grid, Button, Image, Header, Icon, Segment, Container } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import ButtonsGrid from './buttons_grid';
import { logOut } from '../firebase';

const LogOut = () => {
    const history = useHistory();
    return (
      <div className="App">
          <div>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                    <Button size="large" icon="google" color="pink" content="Logout" onClick={() => logOut(history)}></Button>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    )
}
export default LogOut;