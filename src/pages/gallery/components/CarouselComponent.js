import Carousel from "react-bootstrap/Carousel"

import pieces from "../../../utilities/pieces"

export default function CarouselComponent() {
    return (
        <Carousel id="piecesCarousel" interval={null}>
            {pieces.map(piece => {
                return (
                    <Carousel.Item key={piece.id} className="carItem">
                        <div className="galleryDisplayer">
                            <div className="carouselImage">
                                <img
                                    src={piece.image}
                                    alt={piece.title}
                                />
                            </div>
                            <div className="carouselData">
                                <h3>
                                    {piece.title}
                                </h3>
                                <ul>
                                    {piece.series !== null && <li>Serie: {piece.series}</li>}
                                    <li>Técnica: {piece.technique}</li>
                                    <li>Medidas: {piece.measures}</li>
                                    <li>Año: {piece.year}</li>
                                </ul>
                            </div>
                        </div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}