/*
 * Created by @tranphuquy19 on 09/01/2020
 * @author: tranphuquy19@gmail.com
 */
import React, {useState} from 'react';
import { HistoryContext } from './contexts/historyContext';

const Store = ({children}) => {
  let [history, setHistory] = useState([]);

  return (
    <div>
      <HistoryContext.Provider value={{history, setHistory}}>
        {children}
      </HistoryContext.Provider>
    </div>
  );
};

export default Store;
