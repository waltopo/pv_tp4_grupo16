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
        <form>
            <label>ID: <input name="id" type="number"/></label>
            <label>Descripcion: <input name="descripcion" type="text"/></label>
            <label>Precio: <input name="precioUnitario" type="number"/></label>
            <label>Descuento %: <input name="descuento" type="number"/></label>
            <label>Stock: <input name="stock" type="number"/></label>
            <button></button>
        </form>
    );
    
}

export default ProductForm;