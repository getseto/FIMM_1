import React from 'react';
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { logIn } from '../firebase';
import '../App.css';

function LogIn() {
  const history = useHistory();
  return <Button className="button-login" size="large" icon="google" basic color="pink" content="Haz login con Google" onClick={() => logIn(history)}></Button>
}

export default LogIn;