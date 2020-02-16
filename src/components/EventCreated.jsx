import React from 'react'
import { Header, Container, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const EventCreated = () => (
    <Container>
        <Header as='h1' textAlign='center'>
            ¡Su evento ha sido creado!
            <div>
                <Button negative>Regresar</Button>
            </div>
        </Header>

    </Container>
)

export default EventCreated;