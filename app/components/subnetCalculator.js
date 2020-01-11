/*
 * Created by @tranphuquy19 on 11/01/2020
 * @author: tranphuquy19@gmail.com
 */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Slider } from 'antd';

const SubnetCalculator = () => {

  return (
    <div className="mt-3">
      <Card bg="light">
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <Card.Title>IPv4 network address</Card.Title>
          <Form>
            <Form.Row style={{ maxWidth: '25em' }}>
              <Col>
                <Form.Control size="sm" placeholder="192."/>
              </Col>
              <Col>
                <Form.Control size="sm" placeholder="168."/>
              </Col>
              <Col>
                <Form.Control size="sm" placeholder="1."/>
              </Col>
              <Col>
                <Form.Control size="sm" placeholder="0"/>
              </Col>
              <Col className="pl-5">
                <Form.Control size="sm" placeholder="/24"/>
              </Col>
            </Form.Row>
            <Slider min={1} max={31} defaultValue={24}/>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubnetCalculator;

