import { Link } from 'react-router-dom'
import '../style/component_style/footer.css'
import Logo from './logo'

export default function Footer() {
    return (
        <>
        <footer>
            <div className="left">
                <ul>
                    <h5>customers</h5>
                    <li>sign in</li>
                    <li>system status</li>
                    <li>refer a restauronet</li>
                </ul>
                <ul>
                    <h5>Products</h5>
                    <li>point of state</li>
                    <li>software</li>
                    <li>Hardware</li>
                    <li>Intergrations</li>
                    <li>Product Policy</li>
                </ul>
                <ul>
                    <h5>Company</h5>
                    <li>About Us</li>
                    <li>News</li>
                    <li>Community</li>
                    <li>Careers</li>
                    <li>Licenses</li>
                </ul>
            </div>
            <div className="right">
                <Logo size="150" />
            </div>
        </footer>
        <div className='social'>
            <Link to='#'>instagram</Link>
            <Link to='#'>twitter</Link>
            <Link to='#'>facebook</Link>
            <Link to='#'>linkedin</Link>
        </div>
        </>
    )
}