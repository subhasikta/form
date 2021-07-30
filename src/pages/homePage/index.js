import React, { Fragment } from "react";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const history = useHistory();
    let token = window.localStorage.getItem('AuthToken');

    const handeleDeleteAccount = async () => {
        let userId = window.localStorage.getItem('id');
        try {
            const response = await axios.delete(`http://localhost:5000/api/deleteaccount/${userId}`);
            window.localStorage.removeItem('id');
            window.localStorage.removeItem("AuthToken");
            history.push('/');
            console.log("resDeleteId", response);
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const handleLogOut = () => {
        window.localStorage.removeItem('AuthToken');
        window.location.reload();
    }

    return (
        <Fragment>
            Hello Home
            {!token
                ? <NavLink to="/login">
                    <span>
                        Login
                    </span>
                </NavLink>
                : <div>
                    <div onClick={handleLogOut}>Logout</div>
                    <div onClick={handeleDeleteAccount}>Delete Account</div>
                </div>}
        </Fragment>
    )
};

export default Home;