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
                    paseabas por un pueblo, por una ciudad o por algún lugar del mundo
                    y viste una galería artística. Te detuviste, entraste, miraste, sólo por el gusto de mirar,
                    tal vez comprar algo, preguntar o simplemente admirar lo que en ella hay.
                    Hoy te invito a un paseo muy especial. Es el paseo por una página web de una
                    galería artística virtual. Una página que está en construcción y estará en
                    permanente cambio: diferentes obras, diferentes propuestas, diferentes artistas
                    e invitados. En definitiva, un arte activo y en movimiento.
                </p>
                <p>
                    Pero recuerda:
                    el valor de un objeto no es el objeto,
                    el valor de un relato no es el relato,
                    el valor de una obra de arte no es la obra en sí.
                </p>
                <p>
                    El valor está en el tiempo.
                    El tiempo que alguien usó para hacer cada cosa de esta galería tan especial.
                    Ese fue mi tiempo, querido amigo, querida amiga.
                    El tiempo de tantos años de trabajo.
                    Un tiempo de disfrute,
                    un tiempo de música, canto, oración y encuentros,
                    un tiempo en soledad, un tiempo en compañía,
                    un tiempo de hacer y de no hacer.
                    ¡Tanto tiempo, y tan poco a la vez!
                </p>
                <p>
                    Pero también el valor lo da el espectador que valida la obra artística.
                    Es tu tiempo, el que dedicas al ver esta galería.
                    Por todo esto, disfruta, admira, compra, pregunta o solo mira.
                    Porque ese tiempo se suma al mío.
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