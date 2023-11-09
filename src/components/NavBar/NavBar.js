import CardWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>DiseñArte</h3>
            <div>
                <button>Mousepads</button>
                <button>Polos</button>
                <button>Recuerdos</button>
                <button>Tazas</button>
                <button>Tomatodos</button>
            </div>
            <CardWidget/>
        </nav>
    )
}
export default NavBar