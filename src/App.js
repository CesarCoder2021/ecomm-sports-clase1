import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className='navbar'>
      <h2>MENDO-SPORT</h2>
        <ul className='navbar__lista'>
          <li><a className='navbar__lista__cat' href='#'>Balones</a></li>
          <li><a className='navbar__lista__cat' href='#'>Calzado</a></li>
          <li><a className='navbar__lista__cat' href='#'>Accesorios</a></li>
        </ul>
      <button className='navbar__boton'>REGISTER</button>
    </header>

  );
}

export default App;
