import React, {useState} from 'react';
import './App.css';
import Signin from './components/signin/Signin';
import Mainpage from './components/mainpage/Mainpage';
function App() {
  const [login, setlogin] = useState(false);
  return (
    <div className="App">
      {login? <Mainpage/> : <Signin setlog={setlogin}/>}
    </div>
  );
}

export default App;
