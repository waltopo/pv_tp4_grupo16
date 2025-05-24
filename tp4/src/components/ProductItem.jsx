const ProductItem = ({ producto, onEliminar, onEditar }) => (
  <div className="product-item">
    <p><strong>{producto.descripcion || 'Sin descripción'}</strong></p>
    <p><strong>ID:{producto.id}</strong></p>
    <p>Precio: ${Number(producto.precioUnitario).toFixed(2)}</p>
    <p>Descuento: {producto.descuento}% </p>
    <p>Precio Final: ${Number(producto.precioConDescuento).toFixed(2)}</p>
    <p>Stock: {producto.stock}</p>
    <button onClick={() => onEditar(producto)}>Editar</button>
    <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
  </div>
);

export default ProductItem;