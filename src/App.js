//import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

function App({name, age}) {
//const Hello = ({name})=> "Hello "+name;
  return <div>
    Updated by OSME in APP <strong>{name}</strong> age = {age - 10}
    <br/>
    <Hello fname = {name} ></Hello>

  </div>
}

export default App;
