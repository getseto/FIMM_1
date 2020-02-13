import React from 'react';
import { Grid, Segment, Image,Icon, Input, Container} from "semantic-ui-react";
import coloreszap from '../img/coloreszap.jpg';

const Search = () => {
    return (
<Container textAlign="center">
        <Icon.Group as="h3" size='large'>
              <Icon name="search" /> Buscar <Input size="mini" placeholder='Busca aquí' />
  </Icon.Group>
  </Container>
        
    );
}
export default Search;
