import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modal from "../../components/Modal";

import { open } from "../../utilities/modalMethods";
import pieces from "../../utilities/database/pieces";
import images from "../../utilities/database/images";

export default function Home() {

    const handleClick = (e, id) => {
        let element = document.getElementById(id)
        if (element.getAttribute('open') === null) {
            open(e, id)
        }
    }

    return (
        <>
            <Header />

            <main className="mainContent">

                <section id="piecesContainer">
                    {pieces.map((piece, idx) => {
                        return (
                            <article
                                key={idx}
                                className="pieceCard"
                                onClick={e => handleClick(e, 'piece' + idx)}
                            >
                                <Modal
                                    id={'piece' + idx}
                                    data={{
                                        piece,
                                        images: images.filter(item => item.piece === piece.id)
                                    }}
                                />
                            </article>
                        )
                    })}
                </section>

            </main>

            <Footer />
        </>
    )
}