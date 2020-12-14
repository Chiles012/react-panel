import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header';
import Aside from './Components/Aside';
import FillPanel from './Components/FillPanel';

const App = () => {

  return ( 
    <Fragment>
      <Router>
        <Header/>
        <Aside 
          page1='Usuarios'
          page2='Productos'
          page3='Dashboard'
          page4='Ventas'
        />
        <FillPanel />
      </Router>
    </Fragment>
  );
}

export default App;