/*
 * Created by @tranphuquy19 on 09/01/2020
 * @author: tranphuquy19@gmail.com
 */
import React, { useState } from 'react';
import { HistoryContext } from './contexts/historyContext';

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
  const [history, setHistory] = useState([]);

  return (
    <div>
      <HistoryContext.Provider value={{ history, setHistory }}>
        {children}
      </HistoryContext.Provider>
    </div>
  );
};

export default Store;
