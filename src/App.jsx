import CardGenerator from './components/CardGenerator';
import Cards from './components/Cards';
import './styles/css/App.css'




function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1 className="title">Lista de Afazeres</h1>
        <h3 className="subtilte">Coloque sua tarefaz do dia</h3>
        <CardGenerator />
      </div>
    </div>
  );
}

export default App;
