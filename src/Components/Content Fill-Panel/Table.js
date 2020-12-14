import React from 'react';
import Registro from '../Registro';

const Table = () => {
    return (
        <div className="ventastbl table-user">
            <div className="card-header header-titletbl tblTitle ">
                <i className=" fas fa-table"></i>
                    Ventas
            </div>
            <div className="table-responsive usuarios-pd" id="mydatatable-container">
                <table className="records_list table table-striped table-bordered table-hover" id="mydatatable">
                    <thead>
                        <tr className="header-table">
                            <th>ID</th>
                            <th>Fecha</th>                                    
                            <th>Cliente</th>
                            <th>Estado de pago</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Filter..</th>
                            <th>Filter..</th>
                            <th>Filter..</th>
                            <th>Filter..</th>
                            <th></th>
                        </tr>
                    </tfoot>                           

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>10-12-20</td>
                            <td>Freddie Mercury</td>
                            <td class=" alert-success">Pagado</td>
                            <td>
                                <button className="btn btn-verdeChlorine" data-toggle="modal" data-target="#detalleVenta">Detalles</button>
                                <button className="btn btn-rosaChlorine">ELIMINAR</button>
                            </td>
                        </tr>    
                    </tbody>
                </table>
            </div>
        </div>          
        
    );
}

export default Table;