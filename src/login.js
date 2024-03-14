const LoginApp = () =>{

    return(
        <div className="loginapp-container">
           <div className="loginCard">
            <input type="text" placeholder="Email or phone number"></input>
            <input type="text" placeholder="Password"></input>
            <button className="loginBtn">Log in</button>
            <div className="forgot">
                <a href="#">Forgot password?</a>
            </div>
            
            <hr></hr>
            <button className="CreateBtn">Create new account</button>
           </div>
        </div>
    );
}

export default LoginApp