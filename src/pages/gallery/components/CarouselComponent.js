import Carousel from "react-bootstrap/Carousel"

import pieces from "../../../utilities/pieces"

export default function CarouselComponent() {
    return (
        <Carousel id="piecesCarousel" interval={null}>
            {pieces.map(piece => {
                return (
                    <Carousel.Item key={piece.id} className="carItem">
                        <img
                            className="carouselImage"
                            src={piece.image}
                            alt={piece.title}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}