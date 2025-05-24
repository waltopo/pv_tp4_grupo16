import ProductItem from "./ProductItem";

const ProductList = ({ productos = [], onEliminar, onEditar }) => {
  if (!Array.isArray(productos) || productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div>
      {productos.map((producto) => (
        <ProductItem
          key={producto.id}
          producto={producto}
          onEliminar={() => onEliminar(producto.id)}
          onEditar={() => onEditar(producto)}
        />
      ))}
    </div>
  );
};

export default ProductList;
