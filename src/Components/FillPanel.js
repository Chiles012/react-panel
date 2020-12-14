import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from './Content Fill-Panel/Products';
import Dashboard from './Content Fill-Panel/Dashboard';
import Table from './Content Fill-Panel/Table';

const FillPanel = () => {
  
    return (
        <main className="fill-panel">
            <Switch>
                <Route path='/Usuario'>
                    <Table />
                </Route>
                <Route path='/Productos'>
                    <Products />
                </Route>
                <Route path='/Dashboard'>
                    <Dashboard/>
                </Route>                    
                <Route path='/Ventas'>
                    <Table />
                </Route>
            </Switch>
        </main>

    );
    

}
 
export default FillPanel;