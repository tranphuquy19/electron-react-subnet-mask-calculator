/*
 * Created by @tranphuquy19 on 11/01/2020
 * @author: tranphuquy19@gmail.com
 */
import React from 'react';
import { Slider } from "antd";

const MaskConverter = () => {
  return (
    <div>
      MaskConverter
      <Slider min={1} max={31} defaultValue={24}/>
    </div>
  );
};

export default MaskConverter;

