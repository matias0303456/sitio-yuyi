import { Routes, Route } from "react-router-dom";

import Series from '../pages/series/Series'
import Gallery from '../pages/gallery/Gallery'
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Error from '../pages/error/Error'

export default function Router() {
    return (
        <Routes>
            <Route path="" element={<Series />} />
            <Route path="/" element={<Series />} />
            <Route path="/obras" element={<Gallery />} />
            <Route path="/acerca-de" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}