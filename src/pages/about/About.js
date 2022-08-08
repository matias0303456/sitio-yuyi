import { Helmet } from "react-helmet"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function About() {
    return (
        <>
            <Header />

            <Helmet>
                <title>Amelia Yuyi Flores | Acerca De</title>
            </Helmet>

            <main className="mainContent">

                <section className="about-container">

                    <h2>Acerca de</h2>

                    <h3>
                        AMELIA "YUYI" FLORES
                    </h3>

                    <h4>
                        Lic. en Arte- Profesora de Educación Musical y Profesora de Arte en Teatro
                    </h4>

                    <p>
                        Nací en la ciudad de Salta. Y si tengo que definirme debo decir “soy artista y docente”.
                    </p>
                    <p>
                        Durante 33 años ejercí el cargo de docente en arte en los distintos niveles educativos y me desempeñé como
                        Supervisora de Arte en la Dirección de Educación Secundaria hasta que obtuve el beneficio de la jubilación
                        en el año 2021.
                    </p>
                    <p>
                        A lo largo de mi carrera profesional realicé múltiples producciones teatrales con el elenco del PAMI y
                        el elenco de la Universidad Católica de Salta. Fui convocada por el Ministerio de Educación de la Pcia.
                        para la elaboración de los NAP Nacionales y los Diseños Curriculares de la Pcia de Salta en los lenguajes
                        de Música, Teatro y Folclore. Fui formadora de formadores, capacitadora en Jornada Extendida, asistente
                        técnico en arte y referente de la Coordinación Artística de la Pcia.
                        Participé de exposiciones en artes visuales en Salta y en salones nacionales - presenciales y virtuales
                        tales como, “Primavera”, “Marzo Mujer”, “Museo del Convento San Francisco”, “SAAP”, “Arte y Difusión” entre otros
                        Publiqué un libro en el que cuento las experiencias con el grupo de adultos mayores del PAMI:
                        “Abrí mis alas” en el  año 2016.
                    </p>
                    <p>
                        Recibí con gran honor el Premio de la Paz otorgado por la UNESCO por la dirección del espectáculo interdisciplinario
                        “América en Paz” y el premio a la mejor docente del año.
                    </p>
                    <p>
                        Actualmente me dedico  a la escritura de obras de teatro, poesías y a la producción de obras de artes visuales
                        en el Taller de Adriana Martell.-
                        Disfruto mi jubilación, mi tiempo, mi familia… disfruto la vida.
                    </p>

                    <h3>
                        ARTES VISUALES
                    </h3>
                    <p>
                        Hablar de artes visuales es referirnos a todas aquellas expresiones y manifestaciones de naturaleza visual sean tradicionales o mediante la aplicación de las diferentes tecnologías.
                        Lo que aquí se presenta- en primera instancia -son obras de mi autoría con diferentes técnicas de realización, diferentes soportes y temáticas.
                    </p>

                </section>

            </main>

            <Footer />
        </>
    )
}