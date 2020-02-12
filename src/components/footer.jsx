import React from 'react';
import { Grid, Segment, Image } from "semantic-ui-react";
import coloreszap from '../img/coloreszap.jpg';

const Footer = () => {
    return (
        <Segment>
            <Grid divided="vertically">
                <Grid.Row columns={3}>
                    <Grid.Column textAlign='center'>
                        <font color="#1e636d"> <p> 2020- ZapAcademy</p> </font>
                    </Grid.Column>
                    <Grid.Column>
                        
                        <Image src={coloreszap}  class="ui medium centered image"/> 

                    </Grid.Column>

                    <Grid.Column textAlign='right'>
                        <font color="#1e636d">
                            
                            <p>
                                Municipio de Zapopan, Jalisco
                                Avenida Hidalgo 151, Zapopan, 45100 Zapopan, Jal.
                            33 3818 2200 </p>
                        </font>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}
export default Footer;
