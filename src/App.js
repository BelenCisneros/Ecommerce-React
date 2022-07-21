import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemListContainer/ItemListContainer';
import Modal from './components/ItemProduct/ItemProduct';

function App() {
  const styleApp = { padding: '10px 20px', marginTop : 10}
  return (
    //JSX
    <div className="container" style={styleApp} >
      <NavBar />
      <h1>Hello World</h1>
      <div className='main-container'>
        <ItemContainer section="Productos en oferta"/>
        <ItemContainer section="Productos de temporada"/>
        <ItemContainer section="Productos mas comprados"/>
      </div>
      <Modal title="MODAL DE REGISTRO">
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>enviar</button>
        </form>
      </Modal>
    </div>
  );
}
export default App;
