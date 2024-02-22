import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';

function App() {
   
  const {data,loading,error} = useFetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=1");

  if(loading){
    return <h1>Loading</h1>
  }

  if(error){
    return <h1>Please try after sometime</h1>
  }

  return (
    <div className="App">
      {data.map((obj,index)=>{
        return (<p key={index}>
             {obj.title}
        </p>)
      })}
    </div>
  );
}

export default App;
