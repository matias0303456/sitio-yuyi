import { useNavigate } from "react-router-dom"

export default function Header() {

    const navigate = useNavigate()

    return (
        <header>
            <h1>
                Amelia Yuyi Flores
            </h1>
            <nav>
                <ul>
                    <li onClick={() => navigate('/')}>Series</li>
                    <li onClick={() => navigate('/obras')}>Obras</li>
                    <li onClick={() => navigate('/acerca-de')}>Acerca de</li>
                    <li onClick={() => navigate('/contacto')}>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}