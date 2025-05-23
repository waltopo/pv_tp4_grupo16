import { useEffect, useState } from "react";


const crearProducto ={
    id: 0,
    descripcion: '',
    precioUnitario: 0,
    descuento: 0,
    stock: 0
};

const ProductForm = ({editarProducto, onAct, onAgregar})=>{

    const [producto, setProducto] = useState(crearProducto);        
    
    useEffect(()=>{
        if(editarProducto){
            setProducto(editarProducto);
        }else{
            setProducto(crearProducto);
        }
    });
    
    const handelChange = (e)=>{
        const {name, value} = e.target;
        setProducto(productos => ({
            ...productos,[name]:name === 'descripcion' ? value : Number(value)
        }));
    };
    
    
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
            <label>ID: <input name="id" type="number" value={producto.id} onChange={handelChange} required/></label>
            <label>Descripcion: <input name="descripcion" type="text" value={producto.descripcion} onChange={handelChange} required/></label>
            <label>Precio: <input name="precioUnitario" type="number" value={producto.precioUnitario} onChange={handelChange} required/></label>
            <label>Descuento %: <input name="descuento" type="number" value={producto.descuento} onChange={handelChange} required/></label>
            <label>Stock: <input name="stock" type="number" value={producto.stock} onChange={handelChange} required/></label>
            <button type="submit">{editarProducto ? 'Actualizar':'Agregar'}</button>
        </form>
    );
    
}

export default ProductForm;