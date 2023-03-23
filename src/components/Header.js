import { Link } from "react-router-dom"

export default function Header() {

    return (
        <header>
            <h1>
                Amelia Yuyi Flores
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/sitio-yuyi/">
                            Series
                        </Link>
                    </li>
                    <li>
                        <Link to="/sitio-yuyi/obras">
                            Obras
                        </Link>
                    </li>
                    <li>
                        <Link to="/sitio-yuyi/acerca-de">
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <Link to="/sitio-yuyi/contacto">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}