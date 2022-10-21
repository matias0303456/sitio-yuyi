import Accordion from 'react-bootstrap/Accordion';

import series from '../../../utilities/series'
import pieces from '../../../utilities/pieces'

export default function SeriesAccordion() {
    return (
        <Accordion style={{ width: "90%", margin: "0 auto" }}>
            {series.map(serie => {
                return (
                    <Accordion.Item key={serie.id} eventKey={serie.id}>
                        <Accordion.Header>{serie.name}</Accordion.Header>
                        <Accordion.Body>
                            <ul className='accordion-list'>
                                {pieces.filter(piece => piece.series === serie.id).map(piece => {
                                    return (
                                        <li key={piece.id} className="accordion-item">
                                            <img src={piece.image} alt={piece.title} />
                                            <div className='accordion-piece-data'>
                                                <p>
                                                    Título: {piece.title}
                                                </p>
                                                <p>
                                                    Medidas: {piece.measures}
                                                </p>
                                                <p>
                                                    Técnica: {piece.technique}
                                                </p>
                                                <p>
                                                    Año: {piece.year}
                                                </p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    )
}