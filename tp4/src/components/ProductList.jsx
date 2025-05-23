import ProductItem from './ProductItem';

const ProductList = ({ productos, onEliminar, onEditar }) => (
  <div>
    {productos.map(producto => (
      <ProductItem
        key={producto.id}
        producto={producto}
        onEliminar={onEliminar}
        onEditar={onEditar}
      />
    ))}
  </div>
);

export default ProductList;