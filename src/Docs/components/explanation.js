import '../style/component_style/explantion.css'

export default function Explanation() {
    return (
        <div className="explanation">
            <div className="imgs">
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/1.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/2.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/3.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/4.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/5.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/6.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/7.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/8.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/9.png')})`
                }}></div>
                <div className='img' style={{
                    backgroundImage: `url(${require('../resources/About_img/10.png')})`
                }}></div>
            </div>
            <div className='infos'>
                <h2>
                نظام POS الخاص بنا مصمم ليكون سهل الاستخدام وفعالاً، مع واجهة بسيطة تُسهل العمل حتى للمبتدئين.
                </h2>
                <ul>
                    <li>
                        واجهة رئيسية بديهية توضح الواجهة الرئيسية جميع الأقسام الأساسية مثل المبيعات، المخزون، والتقارير بشكل منظم وسهل الوصول، ما يجعل إدارة العمل أكثر سلاسة.
                    </li>
                    <li>
                        شاشة مبيعات سريعة وسهلة شاشة الكاشير تسهل إضافة المنتجات وتسجيل المعاملات بسرعة، مع خيارات اختصار للوصول الفوري للمنتجات المفضلة وتطبيق الخصومات مباشرة.
                    </li>
                    <li>
                        إدارة المخزون بشكل مبسط تتيح لك واجهة إدارة المخزون عرض المنتجات حسب الفئات، إضافة كميات جديدة بسهولة، واستعراض مستوى المخزون الحالي بشكل واضح.
                    </li>
                    <li>
                        تقارير شاملة بنقرة واحدة تتوفر تقارير يومية وشهرية توضح الأرباح، المخزون، ومبيعات كل منتج بسهولة، ما يتيح لك فهم أداء متجرك واتخاذ قرارات أسرع.
                    </li>
                    <li>     
                        إشعارات وتنبيهات في الوقت الحقيقي تُظهر شاشة الإشعارات كل التحديثات المهمة مثل انخفاض المخزون أو التنبيهات المالية لتبقى على اطلاع على كل جديد.
                    </li>
                </ul>
            </div>
        </div>
    )
}