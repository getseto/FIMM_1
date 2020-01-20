import React from 'react';
import { Grid, Image, Header, Icon, Segment } from "semantic-ui-react";

const Footer = () => {
    return (
        <Segment >
            <Grid divided="vertically">
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <h1> Este es un footer</h1>
                    </Grid.Column>
                    <Grid.Column>
                        {/* <Image  fluid centered    width="100" heigth="30" src="https://servicios.zapopan.gob.mx:8000/wwwportal/publicfiles/inline-images/iniciozapopan2019-1915x215_1.png" 
              /> */}

                    </Grid.Column>

                    <Grid.Column>
                        <h2>
                            Municipio de Zapopan, Jalisco
                            Avenida Hidalgo 151, Zapopan, 45100 Zapopan, Jal.
                            33 3818 2200 </h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment >
    );
}
export default Footer;