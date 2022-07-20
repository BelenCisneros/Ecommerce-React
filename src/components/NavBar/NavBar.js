import './NavBar.css'
const NavBar=()=>{
    return(
        <div className="navBar">
            <img src="../../assets/img/logoLargo.png" alt="zerequete" className="logo"/>
            <ul className="menu">
                <a href="../../index.html"><li>HOME</li></a>
                <a href="../../index.html"><li>EQUIPO</li></a>
                <a href="../../index.html"><li>COMBOS</li></a>
                <a href="../../index.html"><li>GALERIA</li></a>
                <a href="../../index.html"><li>CONTACTO</li></a>
            </ul>
        </div>
    );
}

export default NavBar;