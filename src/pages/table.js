import React from 'react';
import { Button, Checkbox, Icon, Table, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function DataTable() {
  return (
    <Segment>
      <Table compact celled definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell> Asistencia </Table.HeaderCell>
            <Table.HeaderCell>Apellido paterno</Table.HeaderCell>
            <Table.HeaderCell>Apellido materno</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Teléfono celular</Table.HeaderCell>
            <Table.HeaderCell>Teléfono</Table.HeaderCell>
            <Table.HeaderCell>CURP</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell><button class="ui button">Editar</button></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell><button class="ui button">Editar</button></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell><button class="ui button">Editar</button></Table.Cell>
          </Table.Row>
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
              <Button disabled size='small'>
                Approve All
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  )

}

export default DataTable;
