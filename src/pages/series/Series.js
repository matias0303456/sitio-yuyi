import { Helmet } from "react-helmet"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SeriesAccordion from "./components/SeriesAccordion"

export default function Series() {
    return (
        <>
            <Header />

            <Helmet>
                <title>Amelia Yuyi Flores | Series</title>
            </Helmet>

            <main className="mainContent">

                <section id="galleryContainer">

                    <h2>Series</h2>

                    <SeriesAccordion />

                </section>

                <p className="backName">
                    Fondo: "Células" de Y.F.
                </p>

            </main>

            <Footer />
        </>
    )
}