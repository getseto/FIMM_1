import React from 'react'
import { Button, Input, Form, Container, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { addAssistant, getAssistantsForEvent } from '../firebase'



const AddAssistants = ({ firebaseApp, eventId, setAssistants }) => {
    const [newAssistants, setNewAssistants] = React.useState()
    const handleReadFile = (file) => {
        const fileString = file.target.result;
        const rows = fileString.split('\n');
        rows.shift()
        const results = rows.map((row) => {
            const assistantRow = row.split(',');
            return {
                curp: assistantRow[0],
                firstName: assistantRow[1],
                lastName1: assistantRow[2],
                lastName2: assistantRow[3],
                cellphone: assistantRow[4],
                phone: assistantRow[5],
                email: assistantRow[6],
                call: '',
                attended: false,
            }
        });
        setNewAssistants(results);
    }
    return (
        <Container>
            <Form >
                <Form.Field>
                    <h4 align='center'>Parece que no hay ningún asistente</h4>
                    <h4 align='center'>¡Agrega algunos ahora!</h4>
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
                }} >
                    Guardar</Button>
                <p>* Solo acepta archivos con extensión .csv</p>
            </Form>
        </Container>
    )
}

export default AddAssistants;