import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Mobile from './components/Mobile/Mobile';

function App() {
  return (
    <div className="App">
      <h1>Hello World! app.js</h1>
      <div className='product-container'>
        <Cosmetics></Cosmetics>
        <Mobile></Mobile>
      </div>
    </div>
  );
}

export default App;
