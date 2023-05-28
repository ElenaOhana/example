import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ClientType, CredentialsModel } from "../../../Models/CredentialsModel";
import loginService from "../../../Services/LoginService";
import "./Login.css";
import notificationService from "../../../Services/NotificationService";
import { authStore } from "../../../Redux/AuthState";
import { useEffect, useState } from "react";
import BaseModalWrapper from "../ModalPopup/BaseModalWrapper";
import { UserModel } from "../../../Models/UserModel";
import Home from "../Home/Home";

function Login(): JSX.Element {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(wasModalVisible => !wasModalVisible)
    }

    return (
        <div className="Login">
                    <div>
                        <button onClick={toggleModal}>Login here</button>
                        <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
                    </div>
                    <div>
                        <Link to="/home"><button>Back to Coupons</button></Link>
                    </div>
        </div>
    );
}

export default Login;
