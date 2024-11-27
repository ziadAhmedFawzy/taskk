import Logo from "./logo";
import '../style/component_style/sevices.css'

export default function Services() {
    return (
        <div className="services">
            <header>
            <Logo space="50px" size="100" />
            <h2>
                نظام POS الخاص بنا مصمم ليكون سهل الاستخدام وفعالاً، مع واجهة بسيطة تُسهل العمل حتى للمبتدئين.
            </h2>
            <p>تجربة الكاشير أكثر سلاسة، مع شاشة مبيعات تتيح إضافة المنتجات بسرعة وتسجيل العمليات بمرونة عالية. تتيح هذه الشاشة أيضًا تخصيص الخصومات وإضافة المنتجات المفضلة للوصول السريع، ما يجعل عملية البيع أسرع وأكثر فاعلية.
                عند استخدام واجهة إدارة المخزون، تجد سهولة في إضافة المنتجات ومتابعة مستويات المخزون. يسمح لك النظام بتصنيف المنتجات وترتيبها وفقًا للفئات، مما يسهل العثور على أي منتج بنقرة واحدة، مع تنبيهات تلقائية عند انخفاض مستوى أي صنف لضمان عدم نفاد المخزون.</p>
            </header>
            <div className="POS_imgs">
                <div className="sec parmja_dashboard">
                    <div className="ch child1">
                        <img width='500px' src={require('../resources/dashboard2.png')}  alt="photo_POS"/>
                        <br/>
                        <img width='500px' src={require('../resources/dsahboard1.png')} alt="photo_POS" />
                    </div>
                    <div className="ch child2">
                        <img width='600px' height='800px' src={require('../resources/POS_2.png')} alt="photo_POS" />
                    </div>
                </div>
            </div>
        </div>
    )
}