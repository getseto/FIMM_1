import React from 'react';
import { Button, Divider, Grid, Container, Input, Form, Checkbox } from 'semantic-ui-react';
import BannerComponent from "./components/Banner";
import Subbanner from './components/subbanner';
import ButtonsGrid from './components/buttons_grid';

function adminhome() {
  return (
    <div className="admin">
      <BannerComponent></BannerComponent>
      <Subbanner></Subbanner>
      <ButtonsGrid></ButtonsGrid>
      <h1> Esta es la pagina del administrador
      </h1>
    </div>


  );
}
export default adminhome;
  n