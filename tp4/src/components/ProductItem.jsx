const ProductItem = ({ producto, onEliminar, onEditar }) => (
  <div className="product-item">
    <p><strong>{producto.descripcion}</strong></p>
    <p><strong>ID:{producto.id}</strong></p>
    <p>Precio: ${producto.precioUnitario} </p>
    <p>Descuento: {producto.descuento}% </p>
    <p>Precio Final: ${producto.precioConDescuento}</p>
    <p>Stock: {producto.stock}</p>
    <button onClick={() => onEditar(producto)}>Editar</button>
    <button onClick={() => onEliminar(producto.id)}>Eliminar</button>
  </div>
);

export default ProductItem;