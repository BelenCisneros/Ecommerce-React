import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const styleApp = { padding: '10px 20px', marginTop : 10}
  return (
    //JSX
    <div className="container" style={styleApp} >
      <NavBar />
      <div className='main-container'>
        <ItemListContainer section="Productos en oferta"/>
      </div>
    </div>
  );
}
export default App;
