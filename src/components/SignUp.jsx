import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const SignUp = () => {
    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const handleSignUp = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const terms = e.target.terms.checked
        console.log(email, password)
        setErrorMessage("")
        setSuccessMessage(false)

        if(!terms){
            setErrorMessage("please accept our terms and condition")
            return
        }


        if (password.length < 6) {
            setErrorMessage("Password must be 6 characters or longer")
            return
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage('password that contains must at least one uppercase, at least one lower case ate one number and ate least one special character')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccessMessage(true)
            })
            .catch(error => {
                console.log('ERROR', error.message)
                setErrorMessage(error.message)
                setSuccessMessage(false)
            })
    }
    return (
        <div>
            <div className="mx-auto card bg-base-100 p-8 rounded-3xl w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-4xl font-bold'>Sign Up Now!</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                        </label>
                        {
                            errorMessage && <p className='text-red-500 py-1'>{errorMessage}</p>
                        }
                        {
                            successMessage && <p className='text text-green-500'>successfully signUp</p>
                        }
                    </div>
                        <div className="form-control">
                            <label className="cursor-pointer label justify-start ">
                                <input type="checkbox" name="terms" className="checkbox checkbox-warning" />
                                <span className="label-text ml-2">Accept Our Terms and Condition</span>
                            </label>
                        </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;