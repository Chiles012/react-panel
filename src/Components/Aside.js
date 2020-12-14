import React, { Fragment } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Aside = ({ page1, page2, page3, page4 }) => {
    return(
        <Fragment>
            <aside className="bg-dark aside">
                <ul className="nav-aside">
                    <li><Link to="/Usuario">{page1} <i className="fas fa-users"></i></Link></li>
                    <li><Link to="/Productos">{page2} <i className="fas fa-prescription-bottle"></i></Link></li>
                    <li><Link to="/Dashboard">{page3} <i className="fas fa-chart-line"></i></Link></li>
                    <li><Link to="/Ventas">{page4} <i className="fas fa-cash-register"></i></Link></li>
                </ul>
            </aside>
        </Fragment>
    );   
}
 
export default Aside;