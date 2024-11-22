import "./login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="pagelogin">
            <div className="formlogin">
                <div className="tulisanlogin">
                    Log In
                </div>
                <div className="username">
                    Username
                </div>
                <div className="email">
                    Email
                </div>
                <div className="password">
                    Password
                </div>
                <div className="forgotpassword">
                    Forgot Password?
                </div>
                <div className="getstarted">
                    Get Started
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Login