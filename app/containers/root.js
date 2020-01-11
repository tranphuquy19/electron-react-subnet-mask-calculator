// @flow
import React from 'react';
import { hot } from 'react-hot-loader/root';
import Store from '../store';
import HomeComponent from '../components/homeComponent';

const Root = () => {
  return (
    <div>
      <Store>
        <HomeComponent />
      </Store>
    </div>
  );
};

export default hot(Root);
