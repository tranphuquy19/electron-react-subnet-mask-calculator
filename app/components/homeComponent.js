/*
 * Created by @tranphuquy19 on 09/01/2020
 * @author: tranphuquy19@gmail.com
 */
import React from 'react';
import CalculatorComponent from './calculatorComponent';
import HistorySideBarComponent from './historySidebarComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const HomeComponent = () => {
  return (
    <Layout>
      <Container fluid className="bg-light" style={{fontSize: '0.85em'}}>
        <Row>
          <Col sm={8} md={9}>
            <CalculatorComponent/>
          </Col>
          <Col sm={4} md={3} className="border-left border-dark">
            <HistorySideBarComponent/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default HomeComponent;
