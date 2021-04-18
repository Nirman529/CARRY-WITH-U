import React, { useState} from "react"
import Base from "../core/Base"
import {Redirect} from "react-router-dom"
import { signin, isAuthenticated, authentication } from "../auth/helper"

const Signin = () => {
    
    const [values, setValues] = useState({
        email : "admin@gmail.com",
        password : "1234",
        error : "",
        loading : false,
        didRedirect : false
    });

    const { email, password, error, loading, didRedirect} = values;

    const { user } = isAuthenticated();

    const handleChange = first_name => event => {
        setValues({ ...values, error : false, [first_name] : event.target.value});
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error : false, loading: true})
        signin({ email, password})
        .then(data => {
            if(data.error) {
                setValues({ ...values, error : data.error, loading : false})
            } else {
                authentication(data, () => {
                    setValues({
                        ...values,
                        didRedirect : true
                    })
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const performRedirect = () => {
        if (didRedirect) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if( isAuthenticated()) {
            return <Redirect to="/" />
        }
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger" style={{display : error ? "" : "none"}}>
                        { error }    
                    </div>
                </div>
            </div>
        );
    }

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" onChange={handleChange("email")} type="email" value={ email }/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control" onChange={handleChange("password")} type="password" value={ password }/>
                        </div>
                        <button  onClick={onSubmit} className="btn btn-success btn-block">Sign In</button>
                    </form> 
                </div>
            </div>
        )
    }
    return (
        <Base title="Sign In page" description="user sign in page">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
        </Base>
    )
}

export default Signin;