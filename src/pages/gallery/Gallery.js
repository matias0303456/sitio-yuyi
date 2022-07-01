import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CarouselComponent from "./components/CarouselComponent";

export default function Gallery() {


    return (
        <>
            <Header />

            <main className="mainContent">

                <section id="galleryContainer">

                    <CarouselComponent />

                </section>

            </main>

            <Footer />
        </>
    )
}