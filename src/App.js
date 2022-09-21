import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h3>Here we have next similar in look different in data.</h3>
      <Employee></Employee>
      <Employee></Employee>
      <Employee></Employee>
    </div>
  );
}


function Person(){
  return(
    <div className='profile'>
      <h1>Rahyan Shamsi</h1>
      <p>Junior Front-End Dev</p>
    </div>
  );
}

function Employee(){
  return(
    <div className='container'>
      <h1>Sakil Ahmed</h1>
      <p>Full stack Dev</p>
    </div>
  );
}


export default App;
