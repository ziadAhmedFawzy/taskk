import { Link } from "react-router-dom";
import Advantage from "../components/advantage";
import Collaboration from "../components/collaboration";
import Crew from "../components/crew";
import Explanation from "../components/explanation";
import Footer from "../components/footer";
import Header from "../components/header";
import Introduction from "../components/introduction";
import Package from "../components/package";
import Services from "../components/services";
import Table from "../components/table_package";
import { useContext } from "react";
import { Auth } from "../context/context";
import '../style/landing_page.css'
import Logo from "../components/logo";

export default function LandingPage() {
    const {navbar,setNavBar} = useContext(Auth)
    return (
        <div className="landing_page">
            {navbar ? 
                <div className="nav-bar-items">
                <div className="box">
                    <div className="header">
                        <Logo size="50" />
                        <button onClick={() => setNavBar(false)}>X</button>
                        </div>
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
                </div>
                </div>
            :null
        }
            <Header />
            <Introduction />
            <Collaboration />
            <Services />
            <Advantage />
            <Explanation />
            <Crew />
            <Package />
            <Table />
            <Footer />
        </div>
    )
}