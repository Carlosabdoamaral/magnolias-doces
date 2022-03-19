import {Route, Routes} from "react-router-dom";
import IndexView from '../src/views/Index/IndexView'
import ProductDetailsView from "./views/ProductDetails/ProductDetailsView";

export default function Urls() {
    return (
        <Routes>
            <Route path="/" element={<IndexView/>}/>
            <Route path="/details" element={<ProductDetailsView/>}/>
        </Routes>
    )
}
