import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductForm from './components/ProductForm';

function App() {

  const[productos, setProductos] = useState([]);
  const[editarProducto, setEditarProducto]=useState(null);


  const handelAgregarProducto = useCallback((product)=>{
    setProductos(productos =>{
      const existe = productos.some(p=> p.id === product.id);
      if(!existe){
        return [...productos, product]
      };
      return productos;
    });
  },[]);

  const handelActProducto = useCallback((productoAct)=>{
    setProductos(productos=>
      productos.map(p => (p.id === productoAct.id ? productoAct: p))
      );
  },[]);

  const handleEditarProducto = useCallback((product) => {
    setEditarProducto(product);
  }, []);

  return (
    <>
      <div className="Contenedor">
        <h1>Gestion de Productos</h1>
        <ProductForm 
        onAgregar={handelAgregarProducto}
        onAct={handelActProducto}     
        editarProducto={handleEditarProducto} 
        />
      </div>
    </>
  )
}

export default App
