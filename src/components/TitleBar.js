import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default class TitleBar extends React.Component {
   render() {
     return (
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="#home">PoE Hermes</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Form inline>
           <FormControl type="text" placeholder="Season" className="mr-sm-2" />
           <Button variant="outline-primary">Refresh</Button>
         </Form>
       </Navbar>
     );
   }
 }