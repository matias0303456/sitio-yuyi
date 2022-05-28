import { close } from "../utilities/modalMethods"

export default function Modal({
    id,
    data
}) {

    const { piece, images } = data

    return (
        <dialog id={id} className="pieceModal">
            <div className="dialogContainer">
                <h3>
                    {piece.title}
                </h3>
                <section>
                    {images.map(img => (
                        <img
                            key={img.id}
                            alt={'Foto de ' + piece.title}
                        />
                    ))}
                </section>
                <section className="pieceDescription">
                    <p>Técnica: {piece.technique}</p>
                    <p>Medidas: {piece.measures}</p>
                    <p>Año: {piece.year}</p>
                    <p>Precio: {piece.price}</p>
                </section>
                <button
                    type="button"
                    onClick={e => {
                        console.log(images)
                        close(e, id)}}
                >
                    Cerrar
                </button>
            </div>
        </dialog>

    )
}