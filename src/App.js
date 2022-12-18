import './App.css';
import IndexRouter from './route/indexRouter';
import Tabber from './view/tabber/Tabber';
function App() {
  return (
    <div className="App">
      <IndexRouter tabber={<Tabber/>}/>
    </div>
  );
}

export default App;
