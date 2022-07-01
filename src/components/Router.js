import { Routes, Route } from "react-router-dom";

import Gallery from '../pages/gallery/Gallery'
import Error from '../pages/error/Error'

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}