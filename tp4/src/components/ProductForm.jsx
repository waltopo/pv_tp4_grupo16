import { useState } from "react";


const crearProducto ={
    id: 0,
    descripcion: '',
    precioUnitario: 0,
    descuento: 0,
    stock: 0
};

const ProductForm = (editarProducto)=>{

    const [producto, setProducto] = useState(crearProducto);        
    
    const handelSubmit = (e)=>{
        e.preventDefault();
        const precioConDescuento = producto.precioUnitario * (1-producto.descuento/100);
        const product = { ...producto, precioConDescuento};
        
        if(editarProducto){
            onAct(product);
        }else{
            onAgregar(product);
        };
        setProducto(crearProducto);
    };

    return(
        <form onSubmit={handelSubmit}>
            <label>ID: <input name="id" type="number" value={producto.id}/></label>
            <label>Descripcion: <input name="descripcion" type="text" value={producto.descripcion}/></label>
            <label>Precio: <input name="precioUnitario" type="number" value={producto.precioUnitario}/></label>
            <label>Descuento %: <input name="descuento" type="number" value={producto.descuento}/></label>
            <label>Stock: <input name="stock" type="number" value={producto.stock}/></label>
            <button type="submit">{editarProducto ? 'Actualizar':'Agregar'}</button>
        </form>
    );
    
}

export default ProductForm;