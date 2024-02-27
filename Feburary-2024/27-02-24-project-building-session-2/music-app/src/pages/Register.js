import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register() {

    const [getData, setData] = useState({
        name: '',
        email: '',
        password: '',
        appType: 'music'
    });

    const [getError, setError] = useState(null);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setData({ ...getData, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setError(null);
        if (!getData.name) {
            setError('userName is mandatory');
            return;
        }
        else if (!getData.email) {
            setError('email is mandatory');
            return;
        }
        else if (!getData.password) {
            setError('password cannot be empty');
            return;
        }
        axios.post('https://academics.newtonschool.co/api/v1/user/signup',getData, {
            headers: {
                projectID: 'f104bi07c490'
            }
        }).then((result) => {
            console.log(result);
            navigate('/login');
        }).catch((error) => {
            setError("internal server error please try after sometime");
        })
    }



    return (<>
        <div className="container">
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                    {getError && <div class="alert alert-danger" role="alert">
                        {getError}
                    </div>}
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