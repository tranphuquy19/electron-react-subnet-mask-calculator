/*
 * Created by @tranphuquy19 on 11/01/2020
 * @author: tranphuquy19@gmail.com
 */
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Slider } from 'antd';
import { calculate } from '../utils/subnetCalculator';

const SubnetCalculator = () => {
  const [ipValue, setIpValue] = useState({
    octet1: 192,
    octet2: 168,
    octet3: 1,
    octet4: 0,
    preNumber: 24
  });

  const [result, setResult] = useState({
    bitmask: '??',
    maskLong: 'xxxxxxxx',
    netLong: 'xxxxxxxx',
    size: 'xxx',
    base: '?.?.?.?',
    mask: 'xxx.xxx.xxx.xxx',
    hostmask: 'xxx.xxx.xxx.xxx',
    first: 'xxx.xxx.xxx.xxx',
    last: 'xxx.xxx.xxx.xxx',
    broadcast: 'xxx.xxx.xxx.xxx',
    baseBinay: '?.?.?.?',
    maskBinary: 'x.x.x.x',
    firstBinary: 'x.x.x.x',
    lastBinary: 'x.x.x.x',
    availableHost: 'xxx'
  });

  useEffect(() => {
    setResult(calculate(ipValue));
  }, [ipValue]);

  const handleInputOnChange = e => {
    const { name, value } = e.target;
    const ipValueTemp = {
      ...ipValue,
      [name]: value
    };
    setIpValue(ipValueTemp);
  };

  const onSliderChange = value => {
    const ipValueTemp = {
      ...ipValue,
      preNumber: value
    };
    setIpValue(ipValueTemp);
  };

  return (
    <div className="mt-3">
      <Card bg="dark text-white">
        <Card.Header>IPv4 network address</Card.Header>
        <Card.Body>
          <Form>
            <Form.Row style={{ maxWidth: '33em' }}>
              <Col>
                <Form.Control
                  type="number"
                  min={0}
                  max={255}
                  name="octet1"
                  size="sm"
                  placeholder="192."
                  defaultValue={ipValue.octet1}
                  onChange={e => handleInputOnChange(e)}
                />
              </Col>
              <Col>
                <Form.Control
                  min={0}
                  max={255}
                  type="number"
                  name="octet2"
                  size="sm"
                  placeholder="168."
                  defaultValue={ipValue.octet2}
                  onChange={e => handleInputOnChange(e)}
                />
              </Col>
              <Col>
                <Form.Control
                  min={0}
                  max={255}
                  type="number"
                  name="octet3"
                  size="sm"
                  placeholder="1."
                  defaultValue={ipValue.octet3}
                  onChange={e => handleInputOnChange(e)}
                />
              </Col>
              <Col>
                <Form.Control
                  min={0}
                  max={255}
                  type="number"
                  name="octet4"
                  size="sm"
                  placeholder="0"
                  defaultValue={ipValue.octet4}
                  onChange={e => handleInputOnChange(e)}
                />
              </Col>
              <Col className="pl-5">
                <Form.Control
                  min={1}
                  max={31}
                  type="number"
                  name="preNumber"
                  size="sm"
                  placeholder="/24"
                  value={String(ipValue.preNumber)}
                  onChange={e => handleInputOnChange(e)}
                />
              </Col>
            </Form.Row>
            <Slider
              min={1}
              max={30}
              defaultValue={ipValue.preNumber}
              value={ipValue.preNumber}
              onChange={onSliderChange}
              className="mr-4"
            />
          </Form>
          <p>Network: <b>{`${result.base}`}</b></p>
          <p>Subnet mask: <b>{`${result.mask}`}</b></p>
          <p>Host: <b>{`${result.first} - ${result.last}`}</b></p>
          <p>Broadcast: <b>{`${result.broadcast}`}</b></p>
          <p>Available host: <b>{`${result.availableHost}`}</b></p>
          <hr />
          <p>Network: <b>{`${result.baseBinary}`}</b></p>
          <p>Subnet mask: <b>{`${result.maskBinary}`}</b></p>
          <p>Host: <b>{`${result.firstBinary} - ${result.lastBinary}`}</b></p>
          <p>Broadcast: <b>{`${result.broadcastBinary}`}</b></p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubnetCalculator;
