import React from 'react';

const Product = ({ id, description, img_url, price, off, category,unit }) => {
    return (
        <div className="producto col-6 col-md-4 col-lg-3">
            <div className="info-producto">
                <div>
                    <div className="img-shop" style={{backgroundImage: `url(${img_url})`}}></div>
                    <p className="name-product">{description}</p>
                    <p>${price}/{unit}</p>
                </div>
                <p>ID:{id}</p>
            </div>
            <div className="btn-producto">
                <div className="agregar">
                <button className="btn btn-agregar" data-toggle="modal" data-target="#mdlEditar">ACTUALIZAR</button>
                </div>           
                <div className="eliminar">
                    <button className="btn btn-eliminar">ELIMINAR</button>  
                </div>                                   
            </div>
        </div>

    );
}
 
export default Product;