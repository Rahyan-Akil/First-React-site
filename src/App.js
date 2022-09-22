import './App.css';
const nayoks =["rubel","sakib","sharuk","salman","ananta"];
function App() {
  return (
    <div className="App">
      {
        nayoks.map(nayok=> <li>Nayok-{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      
      {/* <Person name={nayoks[0]}></Person>
      <Person name={nayoks[1]}></Person>
      <Person name={nayoks[2]}></Person> */}

      <h3>Here we have next similar in look different in data.</h3>
      <Employee></Employee>
      <Employee></Employee>
      <Employee></Employee>
    </div>
  );
}


function Person(props){
  return(
    <div className='profile'>
      <h1>{props.name}</h1>
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
