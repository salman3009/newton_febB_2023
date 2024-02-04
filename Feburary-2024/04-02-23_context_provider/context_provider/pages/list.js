
import { useConsumer } from "../AuthContext";

const list =()=>{
     
    const name = useConsumer();

     return (<>
        <h1>List Component</h1>
        <h1>The given name is: {name}</h1>
       </>)
}

export default list;