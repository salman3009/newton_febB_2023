import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';
import useToggle from './useToggle';

function App() {
   
  const {data,loading,error} = useFetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=1");
  const [state,toggle] = useToggle();
  
  if(loading){
    return <h1>Loading..</h1>
  }

  if(error){
    return <h1>Error: {error}</h1>
  }

  return (
    <div className="App">
      <button onClick={toggle}>Toggle</button>
      <h1>Toggle State:{state?"yes":"no"}</h1>
      <ul>
      {data && data.map((obj,index)=>{
        return (<li key={index}>
             {obj.title}
        </li>)
      })}
      </ul>  
    </div>
  );
}

export default App;
