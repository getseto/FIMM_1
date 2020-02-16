import React from 'react'
import { Button, Input, Form, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { addAssistant, getAssistantsForEvent } from '../firebase'



const NewEvent = ({firebaseApp, eventId, setAssistants}) => {
    const [newAssistants, setNewAssistants] = React.useState()
    const handleReadFile = (file) => {
        const fileString = file.target.result;
        const rows = fileString.split('\n');
        const results = rows.map(row => {
            const assistantRow = row.split(',');
            return {
                firstName: assistantRow[0],
                lastName: assistantRow[1],
                curp: assistantRow[2],
                phone: assistantRow[3],
                cellphone: assistantRow[4],
                email: assistantRow[5],
                call: '',
                attended: false,
            }
        });
        setNewAssistants(results);
    }
        return (
            <Container>
                <Form>
                    <Form.Field>
                        <label>Agregar asistentes</label>
                    </Form.Field>
                    <Form.Field>
                        <Input
                            type="file"
                            accept=".csv"
                            onChange={(event) => {
                                const fileReader = new FileReader()
                                fileReader.onloadend = handleReadFile
                                fileReader.readAsText(event.target.files[0])
                            }
                            } />
                    </Form.Field>
                    <Button type='submit' onClick={async () => { 
                        await addAssistant(firebaseApp, newAssistants, eventId); 
                        const results = await getAssistantsForEvent(firebaseApp, null, eventId)
                        setAssistants(results);
                    }} >Agregar asistentes</Button>

                </Form>
            </Container>
        )
    }

    export default NewEvent;