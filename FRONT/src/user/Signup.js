import React, { useState} from "react"
import Base from "../core/Base"
import {Link} from "react-router-dom"
import { signup } from "../auth/helper"

const Signup = () => {

    const [values, setValues] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password : "",
        phone : "",
        address : "",
        error : "",
        success : false
    });
    
    const { first_name, address,  last_name, email, password, phone, error, success} = values;

    const handleChange = first_name => event => {
        setValues({ ...values, error : false, [first_name] : event.target.value});
    } 

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error : false});
        signup({ first_name, address, last_name, email, password, phone })
        .then(data => {
            if(data.error) {
                setValues({ ...values, error : data.error, success : false});
            } else {
                setValues({
                    ...values,
                    first_name : "",
                    address : "",
                    last_name : "",
                    email : "",
                    password : "",
                    phone : "",
                    error : "",
                    success : true
                });
            }
        })
        .catch(err => {
            console.log(err)
        })
    };


    const signUpForm = () => {
    return (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                        <label className="text-light">First Name</label>
                        <input className="form-control" onChange={handleChange("first_name")} type="text"  value={ first_name }/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">Last Name</label>
                        <input className="form-control" onChange={handleChange("last_name")} type="text"  value={ last_name }/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">Mobile no.</label>
                        <input className="form-control" onChange={handleChange("phone")} type="tel" value={ phone }/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">Email</label>
                        <input className="form-control" onChange={handleChange("email")} type="email" value={ email }/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">Password</label>
                        <input className="form-control" onChange={handleChange("password")} type="password" value={ password }/>
                    </div>
                    <div className="form-group">
                        <label className="text-light">Address</label>
                        <input className="form-control" onChange={handleChange("address")} type="text"  value={ address }/>
                    </div>
                    <button onClick={onSubmit} className="btn btn-success btn-block">Sign Up</button>
                </form> 
            </div>
        </div>
    )
    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{display : success ? "" : "none"}}>
                        New account is creted. <Link to="/signin">Login here</Link>
                    </div>
                </div>
            </div>
        );    
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

    return (
        <Base title="Sign Up page" description="user sign up page">
            { successMessage()}
            { errorMessage()}
            {signUpForm()}
            {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
        </Base>
    )
}

export default Signup;
