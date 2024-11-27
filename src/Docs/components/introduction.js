import { Link } from "react-router-dom";
import '../style/component_style/intro.css'

export default function Introduction() {
    return (
        <div className="introduction">
            <p className="intro"><span className="hint">New</span> ابدأ الآن وحقق أفضل تجربة لإدارة المبيعات والكاشير</p>
            <div className="whoami">
                <h2>نظام POS متكامل </h2>
                <h3>لجميع أنواع المحلات والصيدليات والسوبر ماركت</h3>
            </div>
            <div className="about-me">
                <p>
                    حل مثالي لإدارة عمليات الكاشير وتحقيق أعلى مستويات الكفاءة
                    مع نظام POS المتطور، يمكنك التحكم في كل تفاصيل العمل من مكان واحد، مهما كان نوع نشاطك. سواء كنت تدير صيدلية، متجر ملابس، أو سوبر ماركت، سيضمن لك النظام تجربة سلسة وأكثر تنظيمًا.
                </p>
            </div>
            <Link to='/login'>ابداء الان </Link>
            <div className="posImg"></div>
            <div className="starts">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            </div>
        </div>
    )
}