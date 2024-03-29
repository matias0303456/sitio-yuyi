import { Helmet } from "react-helmet";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CarouselComponent from "./components/CarouselComponent";

export default function Gallery() {


    return (
        <>
            <Header />

            <Helmet>
                <title>Amelia Yuyi Flores | Obras</title>
            </Helmet>

            <main className="mainContent">

                <section id="galleryContainer">

                    <h2>Galería</h2>

                    <CarouselComponent />

                </section>

                <p className="backName">
                    Fondo: "Células" de Y.F.
                </p>

            </main>

            <Footer />
        </>
    )
}