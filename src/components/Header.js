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
                        <Link to="/">
                            Series
                        </Link>
                    </li>
                    <li>
                        <Link to="/obras">
                            Obras
                        </Link>
                    </li>
                    <li>
                        <Link to="/acerca-de">
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}