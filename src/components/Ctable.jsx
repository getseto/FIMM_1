import React, { useState } from 'react';
import { Button, Checkbox, Icon, Table, Segment, Radio } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function Calltable() {
  const [contesto, setContesto] = useState();
  return (
    <Segment>
      <Table celled>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Apellido paterno</Table.HeaderCell>
            <Table.HeaderCell>Apellido materno</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Teléfono celular</Table.HeaderCell>
            <Table.HeaderCell>Teléfono</Table.HeaderCell>
            <Table.HeaderCell>CURP</Table.HeaderCell>
            <Table.HeaderCell>Llamadas <Icon name='phone' /> </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Perlancio</Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>No</Table.Cell>
            <Table.Cell>
              <Radio label='Contesto' checked={contesto === true} onClick={() => setContesto(true)} />
              <Radio label='No contesto' checked={contesto === false} onClick={() => setContesto(false)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Perlento</Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell><Radio label='Contesto' checked={contesto === true} onClick={() => setContesto(true)} />
              <Radio label='No contesto' checked={contesto === false} onClick={() => setContesto(false)} />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Perluto</Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell><Radio label='Contesto' checked={contesto === true} onClick={() => setContesto(true)} />
              <Radio label='No contesto' checked={contesto === false} onClick={() => setContesto(false)} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='7'>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  )

}

export default Calltable;
