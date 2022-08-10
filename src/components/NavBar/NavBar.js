import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar=()=>{
    return(
        <div className="navBar">
            <img src="/assets/img/logoBelu.png" alt="BeluC" className="logo"/>
            <ul className="menu">
                <a href="/"><li>HOME</li></a>
                <a href="/"><li>PRODUCTOS</li></a>
                <a href="/"><li>COMBOS</li></a>
                <a href="/"><li>GALERIA</li></a>
                <a href="/"><li>CONTACTO</li></a>
            </ul>
            <CartWidget/>
        </div>
    );
}
export default NavBar 
