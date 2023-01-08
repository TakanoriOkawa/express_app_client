import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

export const App = () =>  {

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://localhost:8000/api_shops/1");
      console.log(res);
    }
    fetch();
  },[])


  return (
    <div className="App">
    </div>
  );
}

export default App;
