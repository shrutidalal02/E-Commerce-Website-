import React from "react";
import './CSS/LoginSignUp.css'


const LoginSignUp = () => {


    return ( 
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Enter Your Name"></input>
                    <input type="email" placeholder="Enter Email Address"></input>
                    <input type="password" placeholder="Enter Password"/>

                </div>

                <button>Continue</button>
                <p className="loginsignup-login">Already have an account ? <span>Login Here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""></input>
                    <p>By continuing, I agree to the Terms and Conditions</p>
                </div>

            </div>
        </div>
    )
}

export default LoginSignUp;

