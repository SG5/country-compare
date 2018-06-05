import React from 'react';

import 'antd/dist/antd.css';
import './App.css';
import Countries from '../countries/Countries';
import Filters from '../filters/Filters';


function App(){
  return (
    <div className="App">
      <Filters/>
      <Countries/>
    </div>
  );
}

export default App;
