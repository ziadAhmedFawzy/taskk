import '../style/component_style/advantage.css'

export default function Advantage() {
    return (
        <div className="advantage">
            {/* header has format, so i make class called heaedr */}
            <div className='header'>
                <h2>لدينا؟ POS لماذا تختار نظام</h2>
                <p>
                اكتشف كيف يمكن لنظام POS الخاص بنا أن يجعل إدارة عملك أسهل وأكثر فعالية. احصل على عرض مجاني الآن وابدأ رحلتك نحو تطوير أعمالك!
                </p>
                <img width='700' src={require('../resources/POS_2.png')} alt='photo2'/>
            </div>
            <div className='advantage-card'>
                <div className='card'>
                <i className="fa-solid fa-bolt"></i>
                    <h4>تحديثات دورية</h4>
                    <p>النظام يتطور باستمرار لتلبية احتياجات السوق وتوفير أفضل تجربة.</p>
                </div>
                <div className='card'>
                <i className="fa-solid fa-message"></i>
                    <h4>دعم تقني مستمر:</h4>
                    <p>فريق متخصص متاح على مدار الساعة لمساعدتك.</p>
                </div>
                <div className='card'>
                    <i className="fa-brands fa-joomla"></i>
                    <h4>أمان عالي للبيانات:</h4>
                    <p>جميع المعلومات محمية بأنظمة تشفير متطورة.</p>
                </div>
            </div>
        </div>
    )
}