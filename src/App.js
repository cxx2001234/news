import './App.scss';
import axios from 'axios'
import { useEffect } from 'react';
import IndexRouter from './route/indexRouter';
function App() {
  useEffect(()=>{
    axios.get('/ajax/api/mmdb/movie/v3/list/hot.json?ct=%E6%AD%A6%E6%B1%89&ci=57&channelId=4').then(res=>{
       console.log(res);
    })
  },[])
  return (
    <div className="App">
      <IndexRouter/>
    </div>
  );
}

export default App;
