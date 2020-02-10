import React from 'react';
import { Button, Checkbox, Icon, Table, Segment, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { getAssistantsForEvent, editAssistant } from '../firebase';

const TableRow = ({ assistant, eventId, firebase }) => {
  const [isEditable, setIsEditable] = React.useState(false);
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
          <Checkbox slider onChange={(event, {checked}) => { editAssistant(firebase, {...formData, attended:checked}, eventId)}} />
        </Table.Cell>
        <Table.Cell>{formData.firstName}</Table.Cell>
        <Table.Cell>{formData.lastName}</Table.Cell>
        <Table.Cell>{formData.curp}</Table.Cell>
        <Table.Cell>{formData.phone}</Table.Cell>
        <Table.Cell>{formData.cellphone}</Table.Cell>
        <Table.Cell>{formData.email}</Table.Cell>
        <Table.Cell><button className="ui button" onClick={() => setIsEditable(true)}>Editar</button></Table.Cell>
      </Table.Row>
    ) : (
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell><Input name="firstName" defaultValue={formData.firstName} onChange={handleChange}/></Table.Cell>
        <Table.Cell><Input name="lastName" value={formData.lastName} onChange={handleChange}/></Table.Cell>
        <Table.Cell><Input name="curp" value={formData.curp} onChange={handleChange}/></Table.Cell>
        <Table.Cell><Input name="phone" value={formData.phone} onChange={handleChange}/></Table.Cell>
        <Table.Cell><Input name="cellphone" value={formData.cellphone} onChange={handleChange}/></Table.Cell>
        <Table.Cell><Input name="email" value={formData.email} onChange={handleChange}/></Table.Cell>
        <Table.Cell>
          <button type="submit" className="ui button" onClick={() => {editAssistant(firebase, formData, eventId); setIsEditable(false)}}>Guardar</button><button className="ui button" onClick={() => setIsEditable(false)}>Cancelar</button>
        </Table.Cell>
      </Table.Row>
    )
    )
}

const DataTable = (props) => {
  const [assistants, setAssistants] = React.useState([])
  React.useEffect(() => {
    (async () => {
      const results = await getAssistantsForEvent(props.firebaseApp)
      setAssistants(results);
    })()
  }, [props.firebaseApp])

  return (
    <Segment>
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
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            assistants.map((assistant, index) => {
              // mandar eventID como prop a este componente (DataTable)
              return (
                <TableRow key={assistant.id+index} assistant={assistant} eventId={'E92jBGTqn1DhuT26w2Qj'} firebase={props.firebaseApp}/>
              )
            })
          }

        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='7'>
              <Button
                floated='right'
                icon
                labelPosition='left'
                primary
                size='small'
              >
                <Icon name='save' /> Guardar
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  )

}

export default DataTable;