import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';


function App() {
  return (
    <div className="App">
      <center>
        <h1>hello
          <Home/>
          <Profile/>
        </h1>
      </center>
    </div>
  );
}

export default App;
