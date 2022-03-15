import {Route, Routes} from "react-router-dom";
import IndexView from '../src/views/Index/IndexView'

export default function Urls() {
    return (
        <Routes>
            <Route path="/" element={<IndexView/>}/>
        </Routes>
    )
}
