import { useState } from "react";


const crearProducto ={
    id: 0,
    descripcion: '',
    precioUnitario: 0,
    descuento: 0,
    stock: 0
};

const ProductForm = ()=>{

    const [producto, setProducto] = useState(crearProducto);        
   
    return(
        <>
        
        </>
    );
    
}

export default ProductForm;