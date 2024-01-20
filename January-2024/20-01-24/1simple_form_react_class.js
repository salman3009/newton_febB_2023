import React, { useState } from 'react'
import '../styles/App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      allEntry: [],
      password: '',

    }
  }
  render() {

    const submitForm = (e) => {
      e.preventDefault();
      let flag =true;
      for(let obj of this.state.allEntry){
         if(obj.userName == this.state.userName){
                    flag = false;
                    break;
         }
      }
         if(this.state.userName && this.state.password && flag){
          this.setState({allEntry:[...this.state.allEntry,{userName:this.state.userName,password:this.state.password}]})
         }
      
    }
    return (
      <div id="main">

        REACT FORMS
        <form id='form' action="" onSubmit={submitForm}>
          <div><label htmlFor='userName'>userName</label>
            <input type="text" name="userName" id="userName" autoComplete='off'
              value={this.state.userName} onChange={(e) => this.setState({ userName: e.target.value })} />
          </div>
          <div><label htmlFor='password'>Password</label>
            <input type="password" name="password" id="password"
              autoComplete='off' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          </div>
          <button type="submit" id='submit'>Submit</button>
        </form>
        {this.state.allEntry.map((curElem) => {
          return (
            <div className='list'>
              <p><b>USER NAME</b> :{curElem.userName}  |  <b>PASSDWORD:</b> {curElem.password}</p>

            </div>
          )
        })}
      </div>)
  }
}

export default App;
