import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { Table, Segment, Button } from 'semantic-ui-react'
import { getEvents } from '../firebase';

const EventList = ({ firebaseApp }) => {
  const history = useHistory()
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const results = await getEvents(firebaseApp)
      setEvents(results)
    }
    )()
  })

  return (
    <Segment>
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nombre del evento</Table.HeaderCell>
          <Table.HeaderCell>Fecha del evento</Table.HeaderCell>
          <Table.HeaderCell>Creado por</Table.HeaderCell>
          <Table.HeaderCell>Estatus</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {!!events.length && events.map(event => {
          if (!event.date) {
            return
          }
          return (
            <Table.Row key={event.id} >
              <Table.Cell>{event.name}</Table.Cell>
              <Table.Cell>{event.date}</Table.Cell>
              <Table.Cell>{event.created_by}</Table.Cell>
              <Table.Cell>{event.status}</Table.Cell>
              <Table.Cell>
                <Link to={`/events/${event.id}`}>
                  Ir al evento
                </Link>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
   <Button onClick = {() =>history.push('/newevent')} >
      Crear nuevo evento
    </Button>
    </Segment>
  )
}

export default EventList;
