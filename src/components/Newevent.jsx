import React from 'react'
import { useHistory } from "react-router-dom";
import { Form, Segment, Button } from 'semantic-ui-react'
import { saveEvent } from '../firebase';

const NewEvent = ({ firebaseApp }) => {
    const history = useHistory()
    const [newEvent, setNewEvent] = React.useState()
    const handleChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value })
    }
    
    return (
        <Segment>
            <Form>
                <Form.Field>
                    <label>Nombre del evento</label>
                    <input placeholder='Nombre del evento' name='name' onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Fecha del evento</label>
                    <input placeholder='Fecha de creación' name='date' onChange={handleChange} />
                </Form.Field>
                <Button type='submit' onClick={ async () => {
                    await saveEvent(firebaseApp, newEvent);
                    history.push('/events');
                }} >Crear evento</Button>
            </Form>
        </Segment>
    )
}

export default NewEvent;
