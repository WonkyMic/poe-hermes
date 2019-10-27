import React from 'react';
import SingleSelect from './SingleSelect';
import SellerSlider from './SellerSlider';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const options = [
  { value: 'alt', label: 'Orb of Alteration' },
  { value: 'fuse', label: 'Orb of Fusing' },
  { value: 'alch', label: 'Orb of Alchemy' },
  { value: 'chaos', label: 'Chaos Orb'},
];

export default class MarketSelect extends React.Component {
   render() {
     return (
       <Form>
         <Form.Row>
             <Form.Group as={Col} controlId="formHaveItem">
               <Form.Label>You have</Form.Label>
               <SingleSelect options={options} />
             </Form.Group>
             <Form.Group as={Col} controlId="formWantItem">
               <Form.Label>You want</Form.Label>
               <SingleSelect options={options} />
             </Form.Group>
         </Form.Row>
         <Form.Row>
             <Form.Group as={Col} controlId="formHaveItem">
               <SellerSlider />
             </Form.Group>
             <Form.Group as={Col} controlId="formWantItem">
               <Button variant="primary" type="submit">
                Submit
               </Button>
             </Form.Group>
          </Form.Row>
       </Form>
     );
   }
 }