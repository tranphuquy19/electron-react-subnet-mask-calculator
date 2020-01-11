/*
 * Created by @tranphuquy19 on 09/01/2020
 * @author: tranphuquy19@gmail.com
 */
import React from 'react';
import CalculatorComponent from './calculatorComponent';
import HistorySideBarComponent from './historySidebarComponent';
import { Col, Container, Row } from 'react-bootstrap';

const HomeComponent = () => {
  return (
    <Container fluid className="bg-light">
      <Row>
        <Col md={9}>
          <CalculatorComponent/>
        </Col>
        <Col md={3}>
          <HistorySideBarComponent/>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
