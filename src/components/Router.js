import { Routes, Route } from "react-router-dom";

import Series from '../pages/series/Series'
import Gallery from '../pages/gallery/Gallery'
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Error from '../pages/error/Error'

export default function Router() {
    return (
        <Routes>
            <Route exact path="/sitio-yuyi/" element={<Series />} />
            <Route exact path="/sitio-yuyi/obras" element={<Gallery />} />
            <Route exact path="/sitio-yuyi/acerca-de" element={<About />} />
            <Route exact path="/sitio-yuyi/contacto" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}