import {useState} from 'react';



function Register() {
    
    const [getData,setData] = useState({
        name:'',
        email:'',
        password:'',
        appType:'music'
    });

    const onChangeHandler=(event)=>{
      setData({...getData,[event.target.name]:event.target.value})
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(getData);
    }



    return (<>
        <div className="container">
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                    <form onSubmit={onSubmitHandler}>
                        <div class="form-group">
                            <label htmlFor="name">UserName</label>
                            <input type="text" className="form-control" value={getData.name} onChange={onChangeHandler} name="name" automcomplete="off" />

                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" value={getData.email} onChange={onChangeHandler} name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" value={getData.password} onChange={onChangeHandler} name="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="appType">appType</label>
                            <select className="form-control" value={getData.appType} onChange={onChangeHandler} name="appType">
                                <option value="music">music</option>
                                <option value="amazon">amazon</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </form>
                </div>
                <div className="col-4">

                </div>
            </div>
        </div>
    </>)
}
export default Register;