import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.init';

const Register = () => {

        const handleRegister = (event) => {
            event.preventDefault()
            const email = event.target.email.value
            const password = event.target.password.value
            console.log(email, password)
            createUserWithEmailAndPassword(auth, email, password)
            .then((user)=> {
                console.log(user)
            })
            .catch(error=>{
                console.log("ERROR", error)
            })
        }

    return (
        <div className='mx-auto text-center'>
            <h1 className="text-5xl">Register</h1>
            <form onSubmit={handleRegister} className="card-body max-w-lg mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Register;