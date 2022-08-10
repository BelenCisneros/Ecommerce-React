import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

export default function App() {
  return (   
    <>    
      <NavBar />
      
      {/*      <ItemListContainer /> */}
      <ItemDetailContainer id={3} />
    </>
  );
}

