import React,{ useCallback, useState,useMemo, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './App.css'

function App() {

  const[productos, setProductos] = useState([]);
  const[editarProducto, setEditarProducto]=useState(null);
  const[buscar,setBuscar]=useState('');
  
  useEffect(()=>{
    console.log("Productos actualiados: ", productos);
  },[productos]);
  //agregar un producto
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
      setEditarProducto(null);
  },[]);


  const handleEditarProducto = useCallback((product) => {
    setEditarProducto(product);
  }, []);

  const handleBorrarProducto = useCallback((id) => {
    setProductos(productos => productos.filter(p => p.id !== id));
  }, []);

  const buscarProductos = useMemo(() => {
    return productos.filter(p =>
      p.descripcion.toLowerCase().includes(buscar.toLowerCase()) ||
      p.id.toString().includes(buscar)
    );
  }, [productos, buscar]);

  return (

      <div className="Contenedor">

        <h1>Gestion de Productos</h1>
        <SearchBar buscar={buscar} setBuscar={setBuscar} />
        <ProductForm
          onAgregar={handelAgregarProducto}
          onAct={handelActProducto}
          editarProducto={editarProducto}
        />
        <ProductList
          productos={buscarProductos}
          onEliminar={handleBorrarProducto}
          onEditar={handleEditarProducto}
        />

        <footer><h2> Grupo 16  - Trabajo Practico n° 4 </h2></footer>

      </div>

  )
}

export default App
