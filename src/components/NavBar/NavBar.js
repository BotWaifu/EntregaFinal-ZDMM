
import { Link, NavLink } from "react-router-dom"
import CardWidget from "../CartWidget/CartWidget"
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>DiseñArte</h3>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/tomatodo'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tomatodos</NavLink>
                <NavLink to={'/category/polo'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Polos</NavLink>
                <NavLink to={'/category/recuerdo'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Recuerdos</NavLink>
                <NavLink to={'/category/taza'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tazas</NavLink>
            </div>
            <CardWidget/>
        </nav>
    )
}
export default NavBar;
