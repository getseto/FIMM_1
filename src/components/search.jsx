import React from 'react';
import { Icon, Input, Container } from "semantic-ui-react";
import { getAssistantsForEvent} from '../firebase';

const Search = (props) => {
    React.useEffect(() => {
        (async () => {
            const results = await getAssistantsForEvent(props.firebaseApp)
            props.setAssistants(results);
        })()
    }, [props.firebaseApp])

    return (
        <Container textAlign="center">
            <Icon.Group as="h3" size='large'>
                <Icon name="search" /> Buscar
                <Input size="mini" placeholder='Busca aquí' onChange={async (event) => {
                    const results = await getAssistantsForEvent(props.firebaseApp, event.target.value)
                    props.setAssistants(results);
                }} />
            </Icon.Group>
        </Container>
    );
}
export default Search;
