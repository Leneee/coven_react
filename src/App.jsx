import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';

function App() {
  return (
    <>
      < NavBar />
      < ItemListContainer greeting="Aqui andamos" />
      < ItemCount />
      < Vista />
      < Mensaje />
    </> 
  );
}

export default App;

//los componentes en react tienen tres caractereisticas principales 
// 1 solo renderizan un solo elemento 
// 2 pueden recibir propiedades
// 3 pueden tener un estado

//traduccion 1: no puedes poner dos etiquetas dentro del mismo componente 
//traduccion 2: props 
//traduccion 3: el estado es un objeto que ocntiene info del componente que puede cambiar dependiendo la ejecucion de la app
//usamos "hooks" que son funciones de react que permiten mantener y trabajar con ese estado
