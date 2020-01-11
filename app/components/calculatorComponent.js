/*
 * Created by @tranphuquy19 on 09/01/2020
 * @author: tranphuquy19@gmail.com
 */
import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SubnetCalculator from './subnetCalculator';
import VlsmCalculator from './vlsmCalculator';
import MaskConverter from './maskConverter';

const CalculatorComponent = () => {
  return (
    <Tabs defaultActiveKey="subnet" id="calculator" variant="dark">
      <Tab title="SUBNET CALCULATOR" eventKey="subnet">
        <SubnetCalculator />
      </Tab>
      <Tab title="VLSM CALCULATOR" eventKey="vlsm">
        <VlsmCalculator />
      </Tab>
      <Tab title="MASK CONVERTER" eventKey="m-converter">
        <MaskConverter />
      </Tab>
    </Tabs>
  );
};

export default CalculatorComponent;
