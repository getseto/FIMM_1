import React from 'react';
import { Checkbox, Table, Segment, Input, Radio, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import Search from '../components/Search';
import { editAssistant } from '../firebase';
import NewEvent from '../components/AddAssitants';
import { useParams } from 'react-router-dom';
import AddAssistants from '../components/AddAssitants';

const TableRow = ({ assistant, eventId, firebase }) => {
    const [isEditable, setIsEditable] = React.useState(false);
    const [call, setCall] = React.useState();
    const [formData, setFormData] = React.useState({
        ...assistant
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        !isEditable ? (
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox slider defaultChecked={formData.attended} onChange={(event, { checked }) => { editAssistant(firebase, { ...formData, attended: checked }, eventId) }} />
                </Table.Cell>
                <Table.Cell>{formData.firstName}</Table.Cell>
                <Table.Cell>{formData.lastName}</Table.Cell>
                <Table.Cell>{formData.curp}</Table.Cell>
                <Table.Cell>{formData.phone}</Table.Cell>
                <Table.Cell>{formData.cellphone}</Table.Cell>
                <Table.Cell>{formData.email}</Table.Cell>
                <Table.Cell>
                    <Radio
                        label='Contesto'
                        onClick={() => setCall('contesto')}
                        onChange={(event, { checked }) => {
                            checked && editAssistant(firebase, { ...formData, call: 'contesto' }, eventId)
                        }
                        }
                        checked={call !== undefined ? call === 'contesto' : formData.call === 'contesto'}
                    />
                    <Radio
                        label='No contesto'
                        onClick={() => setCall('no contesto')}
                        onChange={(event, { checked = call }) => {
                            checked && editAssistant(firebase, { ...formData, call: 'no contesto' }, eventId)
                        }
                        }
                        checked={call !== undefined ? call === 'no contesto' : formData.call === 'no contesto'}
                    />
                    <Radio
                        label='Numero equivocado'
                        onClick={() => setCall('equivocado')}
                        onChange={(event, { checked = call }) => {
                            checked && editAssistant(firebase, { ...formData, call: 'equivocado' }, eventId)
                        }
                        }
                        checked={call !== undefined ? call === 'equivocado' : formData.call === 'equivocado'}
                    />
                </Table.Cell>
                <Table.Cell><button className="ui button" onClick={() => setIsEditable(true)}>Editar</button></Table.Cell>
            </Table.Row>
        ) : (
                <Table.Row>
                    <Table.Cell collapsing>
                        <Checkbox slider />
                    </Table.Cell>
                    <Table.Cell><Input name="firstName" defaultValue={formData.firstName} onChange={handleChange} /></Table.Cell>
                    <Table.Cell><Input name="lastName" value={formData.lastName} onChange={handleChange} /></Table.Cell>
                    <Table.Cell><Input name="curp" value={formData.curp} onChange={handleChange} /></Table.Cell>
                    <Table.Cell><Input name="phone" value={formData.phone} onChange={handleChange} /></Table.Cell>
                    <Table.Cell><Input name="cellphone" value={formData.cellphone} onChange={handleChange} /></Table.Cell>
                    <Table.Cell><Input name="email" value={formData.email} onChange={handleChange} /></Table.Cell>
                    <Table.Cell>
                        <Radio label='Contesto' defaultChecked={formData.call === 'no contesto'} readOnly />
                        <Radio label='No contesto' defaultChecked={formData.call === 'no contesto'} readOnly />
                        <Radio label='Numero equivocado' defaultChecked={formData.call === 'equivocado'} readOnly />
                    </Table.Cell>
                    <Table.Cell>
                        <button type="submit" className="ui button" onClick={() => { editAssistant(firebase, formData, eventId); setIsEditable(false) }}>
                            Guardar
                        </button>
                        <button className="ui button" onClick={() => setIsEditable(false)}>
                            Cancelar
                         </button>
                    </Table.Cell>
                </Table.Row>
            )
    )
}

const DataTable = (props) => {
    const [assistants, setAssistants] = React.useState([])
    const { id: eventId } = useParams();
    return (
        <Segment>
            <Container textAlign="center">
                <Search
                    firebaseApp={props.firebaseApp}
                    setAssistants={setAssistants}
                    eventId={eventId}
                />
            </Container>
            <Table compact celled definition className="ui editable table">
                <Table.Header fullWidth>
                    <Table.Row>
                        <Table.HeaderCell> Asistencia </Table.HeaderCell>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellidos</Table.HeaderCell>
                        <Table.HeaderCell>CURP</Table.HeaderCell>
                        <Table.HeaderCell>Teléfono</Table.HeaderCell>
                        <Table.HeaderCell>Celular</Table.HeaderCell>
                        <Table.HeaderCell>Correo electrónico</Table.HeaderCell>
                        <Table.HeaderCell>Llamada</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {!!assistants.length &&
                    <>
                        <Table.Body>
                            {
                                assistants.map((assistant, index) => {
                                    return (
                                        <TableRow
                                            key={assistant.id + index}
                                            assistant={assistant}
                                            eventId={eventId}
                                            firebase={props.firebaseApp} />
                                    )
                                })
                            }

                        </Table.Body>
                    </>
                }
            </Table>
            {!assistants.length &&
                <Container>
                    <AddAssistants 
                        firebaseApp={props.firebaseApp}
                        eventId={eventId}
                        setAssistants={setAssistants}
                    />
                </Container>
            }
        </Segment>
    )
}

export default DataTable;
