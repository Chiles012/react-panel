import React, { Fragment } from 'react';

const Products = () => {

    return (
        <Fragment>
            <div className="row btns-tienda">
                <button className="btn btn-chlorine col-6 col-md-2">LAVANDERÍA</button>
                <button className="btn btn-chlorine col-6 col-md-2">HOGAR</button>
                <button className="btn btn-chlorine col-6 col-md-2">SOLUCIONES</button>
                <button className="btn btn-chlorine col-6 col-md-2">RECICLAJE</button>
                <span className="col-0 col-md-1"></span>
                <div className="search-div col-12 col-md-3">
                <input className="form-control search-tienda" type="search" placeholder="Buscar Producto" />
                <button className="btn btn-search" type="submit"></button>
                </div>

                <button id="addProduct" type="button" className="btn btn-success col-6 col-md-5" data-toggle="modal" data-target="#addProducto"><i className="fas fa-plus-circle"></i> Agregar Producto</button>

                <div className="dropdown col-6 col-md-1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ordenar por:
                    </button>   
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">ID: Menor a Mayor</a>
                    <a className="dropdown-item" href="#">ID: Mayor a Menor</a>
                    <a className="dropdown-item" href="#">Más Vendidos</a>
                    <a className="dropdown-item" href="#">Menos Vendidos</a>
                    </div>

                </div>
            </div>

            <div className="contenedor-productos row aniview animate__animated" data-av-animation="animate__bounceInUp">
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>
                        <p>ID:0</p>
                    </div>
                    <div className="btn-producto">
                        <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>                                   
                    </div>
                </div>
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>    
                        <p>ID:0</p>              
                    </div>
                    <div className="btn-producto">
                        <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>
                    </div>
                </div>
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>    
                        <p>ID:0</p>              
                    </div>
                    <div className="btn-producto">
                        <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>
                    </div>
                </div>
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>    
                        <p>ID:0</p>              
                    </div>
                    <div className="btn-producto">
                        <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>
                    </div>
                </div>
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>    
                        <p>ID:0</p>              
                    </div>
                    <div className="btn-producto">
                        <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>                
                    </div>
                </div>
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>    
                        <p>ID:0</p>              
                    </div>
                    <div className="btn-producto">
                        <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>
                    </div>
                </div>
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>    
                        <p>ID:0</p>              
                    </div>
                    <div className="btn-producto">
                        <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>
                    </div>
                </div>
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>    
                        <p>ID:0</p>              
                    </div>
                    <div className="btn-producto">
                    <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>
                    </div>
                </div>
                <div className="producto col-6 col-md-4 col-lg-3">
                    <div className="info-producto">
                        <div>
                            <img className="img-shop" src="../public/img/btl-prueba.png" alt=""/>
                            <p className="name-product">Kit Limpia Carros</p>
                            <p>$60/kit</p>
                        </div>    
                        <p>ID:0</p>              
                    </div>
                    <div className="btn-producto">
                        <div className="agregar">
                            <input type="number" className="form-control input-agregar" min="1" max="100"/>
                            <button className="btn btn-agregar">AGREGAR</button>
                        </div>               
                        <div className="eliminar">
                            <button className="btn btn-eliminar"> ELIMINAR</button>  
                        </div>                
                    </div>
                </div>
            </div>     
        </Fragment>

    );
    

}
 
export default Products;