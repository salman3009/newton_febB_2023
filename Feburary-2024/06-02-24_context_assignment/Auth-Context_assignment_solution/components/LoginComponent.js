"use client"
import { useAuth } from '../contexts/AuthContext';

const LoginComponent = () => {
    const { isLoggedIn, login, logout } = useAuth();

    return (
        <div>
            {isLoggedIn ? (
                <>
                    <p>You are logged in!</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>You are not logged in.</p>
                    {/* Ideally, you'd have a login form and use the `login` function with the token from the server. */}
                    <button onClick={() => login("sampleToken")}>Login</button>
                </>
            )}
        </div>
    );
};

export default LoginComponent;
