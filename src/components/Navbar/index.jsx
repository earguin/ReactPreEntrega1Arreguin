
import CartWidget from "./CartWidget";
import "./styles.css";

function Navbar() {

    return (
        <nav className="navbar">
            <div className="logo">
                paletería <span>el deleite</span>
            </div>
            <div>
                <button>Inicio</button>
                <button>Paletas</button>
                <button>Helados</button>
                <button>Aguas de sabor</button>
                <button>Botanas</button>
            </div>
            <CartWidget />
        </nav>
    );
}

//exportaciones por fefecto, no hay diferencia entre una y otra
export default Navbar;

//los componentes siempre los exportamos por defecto
//crear un componente para footer se crea carpeta para cada uno