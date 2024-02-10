import { createContext, Component } from 'react';

export const UserLanguage = createContext();

export class LanguageContext extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getLanguage: "en"
        }
    }

    setLanguageHandler=(event)=>{
        this.setState({
             getLanguage: event.target.value
        })
    }

    render(){

        let obj={
            getLanguage:this.state.getLanguage,
            setLanguageHandler:this.setLanguageHandler
        }

        return (<UserLanguage.Provider value={obj}>
             {this.props.children}
        </UserLanguage.Provider>)
    }
}