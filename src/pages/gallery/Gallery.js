import { Helmet } from "react-helmet";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CarouselComponent from "./components/CarouselComponent";

export default function Gallery() {


    return (
        <>
            <Header />

            <Helmet>
                <title>Amelia Yuyi Flores | Galería</title>
            </Helmet>

            <main className="mainContent">

                <section id="galleryContainer">

                    <h2>Galería</h2>

                    <CarouselComponent />

                </section>

            </main>

            <Footer />
        </>
    )
}