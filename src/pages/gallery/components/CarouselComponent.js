import Carousel from "react-bootstrap/Carousel"

import pieces from "../../../utilities/pieces"
import series from "../../../utilities/series"

export default function CarouselComponent() {
    return (
        <Carousel id="piecesCarousel" interval={null}>
            {series.map(serie => {
                const children = pieces.filter(p => p.series !== null && p.series === serie.id)
                const length = children.length
                return (
                    <Carousel.Item key={serie.id} className="carItem">
                        {children.map(piece => {
                            return (
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
                                            <li>Serie: {serie.name}</li>
                                            <li>Técnica: {piece.technique}</li>
                                            <li>Medidas: {piece.measures}</li>
                                            <li>Año: {piece.year}</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel.Item>
                )
            })}
            {pieces.filter(p => p.series === null).map(piece => {
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
                                    <li>Técnica: {piece.technique}</li>
                                    {piece.technique === 'Escultura' &&
                                        <li>Materiales: {piece.materials}</li>
                                    }
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