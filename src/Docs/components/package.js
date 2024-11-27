import { Link } from "react-router-dom";
import '../style/component_style/package.css'

export default function Package() {
    return (
        <div className="package">
            <div className="header">
                <div className="title">
                    <h2>
                        جدول المميزات
                    </h2>
                    <p>اختر الخطة المثالية لاحتياجات عملك</p>
                </div>
                <div className="yearly-monthly">
                    <button className="active">yearly</button>
                    <button>monthly</button>
                    <Link to='/'>وفر 15% على الخطة السنوية!</Link>
                </div>
            </div>
            <div className="plans">
                <div className="card">
                    <h4>مجانا</h4>
                    <p>0$<sub>/month</sub></p>
                    <button>ابدا الأن</button>
                </div>
                <div className="card">
                    <h4>بداية</h4>
                    <p>10$<sub>/month</sub></p>
                    <button>ابدا الأن</button>
                </div>
                <div className="card">
                    <h4>أعمال</h4>
                    <p>50$<sub>/month</sub></p>
                    <button>ابدا الأن</button>
                </div>
                <div className="card">
                    <h4>مشروع</h4>
                    <p>custom</p>
                    <button className="custom unique">ابدا الأن</button>
                </div>
            </div>
        </div>
    )
}