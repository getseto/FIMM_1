import React from 'react';
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { logOut } from '../firebase';

const LogOut = () => {
  const history = useHistory();
  return (
    <Button size="large" inverted  basic color='facebook' content="LogOut" onClick={() => logOut(history)}></Button>
  )
}
export default LogOut;