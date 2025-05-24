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
    },[editarProducto]);
    
    const handelChange = (e)=>{
        const {name, value} = e.target;
        setProducto(productos => ({
            ...productos,
            [name]:name === 'descripcion' ? value : Math.max(0, Number(value) || 0)
        }));
    };
        
    const handelSubmit = (e)=>{
        e.preventDefault();
        const precioConDescuento = producto.precioUnitario * (1-producto.descuento/100);
        const product = { ...producto, precioConDescuento: +precioConDescuento.toFixed(2)};
        
        if(editarProducto){
            onAct(product);
        }else{
            onAgregar(product);
        };
        setProducto(crearProducto);
    };
    const handleCancel = () => {
        setProducto(crearProducto);
        if (onAct) onAct(null); 
    };
    return(
        <form onSubmit={handelSubmit}>
            <label>ID: <input name="id" type="number" value={producto.id} onChange={handelChange} required  min={0} disabled={!!editarProducto}/></label>
            <label>Descripcion: <input name="descripcion" type="text" value={producto.descripcion} onChange={handelChange} required/></label>
            <label>Precio: <input name="precioUnitario" type="number" value={producto.precioUnitario} onChange={handelChange} required min={0}/></label>
            <label>Descuento %: <input name="descuento" type="number" value={producto.descuento} onChange={handelChange} required min={0}max={100}/></label>
            <label>Stock: <input name="stock" type="number" value={producto.stock} onChange={handelChange} required min={0}/></label>
            <button type="submit">{editarProducto ? 'Actualizar':'Agregar'}</button>
             {editarProducto && (
                <button type="button" onClick={handleCancel} style={{ marginLeft: 8 }}>
                    Cancelar
                </button>
            )}
        </form>
    );
    
}

export default ProductForm;