import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './LoginPage.css';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userLoggedUid, setUserLoggedUid] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            const userUid = user.uid;
            setUserLoggedUid(userUid);
        } catch (error) {
            // setError(error.message);
            setError('Wrong credentials');

        }
    };

    const handleLogout = async () => {
        const auth = getAuth();
        await signOut(auth);
        setUserLoggedUid(null);

        // Perform any additional logout actions or redirects
    };

   
    return (
        <div className="login-cont">
            {userLoggedUid === null ? (
                <div className="login-container">
                    <h2 className="login-heading">Login</h2>
                    <form className="login-form" onSubmit={handleLogin}>
                        <input
                            className="login-input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="login-input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="login-button" type="submit">Login</button>
                    </form>
                    {error && <p className="login-error">{error}</p>}
                </div>
            ) :
                <div className="profile-container">
                    {/* <h2>Welcome, {userLoggedUid}</h2>
                    <p>Email: {userLoggedUid}</p> */}
                    <button className="login-button" onClick={handleLogout}>Logout</button>
                    <a href={`/Adminpanel`}>
                        <button className="login-button" style={{ marginLeft: '10px' }}
                        // onClick={handleAdminPanel}
                        >

                            Admin Panel
                        </button> </a>

                    {/* <button className="admin-panel-button" onClick={handleAdminPanel}>Admin Panel</button> */}
                </div>
            }


        </div>
    );
};

export default LoginPage;
