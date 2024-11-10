import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const emailRef = useRef()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        setErrorMessage("")
        //   log in user
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
                if (!res.user.emailVerified) {
                    console.log("please verified your email")
                    setErrorMessage("please verified your email")
                }
                else {

                    setSuccessMessage(true)
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleResetEmail=()=>{
        const email = emailRef.current.value
        if(!email){
            console.log("send valid email")
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(()=>{
                alert("check you email")
            })
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label  onClick={handleResetEmail} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            {
                                successMessage && <p className='text text-green-500'>successfully Login</p>
                            }
                            {
                                errorMessage && <p className='text-red-500 py-1'>{errorMessage}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div><NavLink className="bg-red-200" to="/signUp">New to the website please SignUp?</NavLink></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;