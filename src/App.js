import Child from "./Child"
import SignIn from './SignIn'
import './App.css';

function App() {
  const user={
    name:"hassen",
    age:20
  }
  const handleAlert=()=>{
    alert("Hello world")
  }
  return (
    <div className="App">
   
      <h1 style={{color:"blue"}} >Hello world!</h1>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <button onClick={handleAlert} >alert</button>
        <Child />
        <SignIn />
    </div>
  );
}

export default App;
