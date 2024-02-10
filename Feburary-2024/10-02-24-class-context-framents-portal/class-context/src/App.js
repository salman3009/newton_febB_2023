import {Component} from 'react';
import { UserLanguage } from './LanguageContext';

class App extends Component{

     static contextType = UserLanguage;
     constructor(){
        super();
     }


     render(){
        return (<>
         <h1>welcome to class component</h1>
         <h2>{this.context.getLanguage}</h2>
        </>)
     }
}

export default App;