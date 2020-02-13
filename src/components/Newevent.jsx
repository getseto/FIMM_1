import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Newevent = () => (
    <Container>
    <Form>
        <Form.Field>
            <label>Nombre del evento</label>
            <input placeholder='Nombre del evento' />
        </Form.Field>
        <Form.Field>
            <label>Fecha del evento</label>
            <input placeholder='Fecha del evento' />
        </Form.Field>
        <Button type='Crear evento'>Crear evento</Button>
    </Form>
    </Container>
)

export default Newevent