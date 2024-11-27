import { Link } from "react-router-dom";
import Logo from "./logo";
import '../style/component_style/header.css'
import { Auth } from "../context/context";
import { useContext } from "react";

export default function Header() {
    const {setNavBar} = useContext(Auth)
    return (
        <header>
            <Logo size={"50"} />
            <button onClick={() => setNavBar(true)} className="hidden nav-btn"><i className="fa-solid fa-bars"></i></button>
            <ul>
                <li>عروض</li>
                <li>منتجات</li>
                <li>قائمة اسعار</li>
                <li className="main">رئيسية</li>
            </ul>
            <div className="btns">
                <Link className="login" to='/login'>تسجيل دخول</Link>
                <Link className="demo" to='/demo'>تجربة مجانية</Link>
            </div>
        </header>
    )
}