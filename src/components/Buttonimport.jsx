import React from 'react'
import { Button, Container, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Buttonimport = () => (
    <Container>
        <div>
            <Button className="ui button" floated='right'>
                <Icon name='file excel' />
                Importar
            </Button>
        </div>
    </Container>
)

export default Buttonimport
