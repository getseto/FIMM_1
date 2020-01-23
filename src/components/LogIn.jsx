import React from 'react';
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { logIn } from '../firebase';

function LogIn() {
  const history = useHistory();
  return <Button size="large" icon="google" basic color="pink" content="Haz login con Google" onClick={() => logIn(history)}></Button>
}

export default LogIn;