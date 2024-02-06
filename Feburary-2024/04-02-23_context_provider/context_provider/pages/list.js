
import { useConsumer } from "../AuthContext";

const list =()=>{
     
    const {getName} = useConsumer();
  

     
     return (<>
        <h1>List Component</h1>
        <h1>The given name is: {getName}</h1>
       </>)
}

export default list;