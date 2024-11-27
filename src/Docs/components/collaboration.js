import '../style/component_style/collaboration.css'

export default function Collaboration() {
    return (
        <div className="collaborative-compaines">
            <h2>شركات ومحلات يثقون في نظام POS الخاص بنا</h2>
            <p>
            نظام POS الخاص بنا ليس مجرد برنامج كاشير عادي؛ إنه النظام المفضل للشركات والمتاجر الرائدة في السوق. لقد ساعدنا عشرات العملاء من مختلف القطاعات على تحسين أدائهم، إدارة مبيعاتهم بسهولة، وتحقيق نمو ملحوظ في الأرباح.
            </p>
            <div className='companies'>
                <div><i className="fa-brands fa-dyalog"></i>Luke Restaurant</div>
                <div><span className='logo-curacans'>C</span> Curacans</div>
                <div><i className="fa-brands fa-digg"></i>SAVORY</div>
                <div><i className="fa-brands fa-slack"></i> maze</div>
                <div><i className="fa-brands fa-square-pied-piper"></i>Casa de Tapas</div>
                <div><i className="fa-brands fa-stumbleupon"></i>Appetito</div>
                <div><i className="fa-brands fa-pied-piper"></i> Gusto</div>
            </div>
        </div>
    )
}