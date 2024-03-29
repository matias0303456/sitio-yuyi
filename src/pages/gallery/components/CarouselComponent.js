import Carousel from "react-bootstrap/Carousel"

import pieces from "../../../utilities/pieces"
import series from "../../../utilities/series"

export default function CarouselComponent() {
    return (
        <Carousel id="piecesCarousel" interval={null}>
            {pieces.filter(piece => piece.series === null).map(piece => {
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
                                    {piece.series !== null &&
                                        <li>Serie: {series.find(serie => serie.id === piece.series)?.name}</li>
                                    }
                                    <li>Técnica: {piece.technique}</li>
                                    {piece.technique === 'Escultura' &&
                                        <li>Materiales: {piece.materials}</li>
                                    }
                                    <li>Medidas: {piece.measures}</li>
                                    <li>Año: {piece.year}</li>
                                    {piece.description &&
                                        <li style={{
                                            marginTop: "20px",
                                            fontStyle: "italic",
                                            fontSize: '1rem',
                                            color: "#000"
                                        }}
                                        >
                                            {piece.description}
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}