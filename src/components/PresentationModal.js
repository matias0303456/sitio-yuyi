import Modal from "react-bootstrap/Modal"

export default function PresentationModal({
    show,
    setShow
}) {

    const handleClose = () => setShow(false)

    return (
        <Modal
            id="presModal"
            show={show}
            backdrop="static"
            keyboard={false}
            backdropClassName="presentationModalBackdrop"
            size="lg"
        >
            <Modal.Body>
                <h3>
                    GALERÍA ARTÍSTICA VIRTUAL
                </h3>
                <h4>
                    De Yuyi Flores
                </h4>
                <p>
                    Una mañana, una tarde o una noche tal vez,
                    paseabas por un pueblo, o una ciudad o por algún lugar del mundo
                    y viste una vidriera. Solo por el gusto de ver, tal vez comprar algo,
                    preguntar o simplemente admirar lo que en ella hay. ¿Cuántas vidrieras vimos en la vida?
                    El paseo de hoy es muy especial. Es el paseo por una página para ver una vidriera particular.
                </p>
                <p>
                    Pero recuerda:
                    El valor de un objeto no es el objeto,
                    El valor de un relato, no es el relato.
                    El valor de una obra de arte no es la obra en sí.
                </p>
                <p>
                    El valor está en el tiempo.
                    El tiempo que alguien usó para hacer cada cosa de esta vidriera tan especial.
                    Ese fue mi tiempo, querido amigo, querida amiga.
                    El tiempo de tantos años de trabajo.
                    Un tiempo de disfrute,
                    Un tiempo de música, canto, oración y encuentros.
                    Un tiempo en soledad, un tiempo en compañía.
                    Un tiempo de hacer y de no hacer.
                    ¡Tanto tiempo! Y tan poco a la vez.
                </p>
                <p>
                    Pero también es tu tiempo, el que dedicas a ver esta vidriera.
                    Disfruta, admira, compra, pregunta o solo mira,
                    porque ese tiempo se suma al mío.
                </p>
                <p>
                    ¡Gracias!
                </p>
                <p className="cursor-pointer clickable" onClick={handleClose}>
                    Continuar al sitio {'>>'}
                </p>
            </Modal.Body>
        </Modal>
    )
}