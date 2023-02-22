import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage'


export default function Router () {

    return(

        <BrowserRouter>
            <Routes>
                 <Route index element={<HomePage/>} />        

            </Routes>

        </BrowserRouter>
)
}