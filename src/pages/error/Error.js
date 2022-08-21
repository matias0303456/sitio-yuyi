import { Helmet } from "react-helmet"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Error() {
    return (
        <>
            <Header />

            <Helmet>
                <title>Amelia Yuyi Flores | 404</title>
            </Helmet>

            <main className="mainContent">

                <h2>Página no encontrada</h2>

                <p className="backName">
                    Fondo: "Células" de Y.F.
                </p>

            </main>

            <Footer />
        </>
    )
}