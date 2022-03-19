import {useState} from "react";
import {ProductData} from "../../static/data/ProductData";
import './ProductDetailsStyle.scss'
import NavbarComponent from "../../components/Navbar/NavbarComponent";

export default function ProductDetailsView() {

    let [productID] = useState(sessionStorage.getItem("current_product"))
    let p = ProductData[productID]

    return(
        <main className={"product-details"}>
            <NavbarComponent/>
            <div className={"main"}>
                <img src={p.image} alt={"Product"}/>

                <div className={"content"}>
                    <div className={"text"}>
                        <h1>{p.name}</h1>
                        <p>{p.description}</p>


                        <div className={"flavor"}>
                            <h4>Sabores</h4>
                            <div className={"flavor-list"}>
                                {
                                    p.flavor.map( (flavor) => (
                                        <Flavor name={flavor}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function Flavor(props) {
    return (
        <div className={"flavor-item"}>
            <p>{props.name}</p>
        </div>
    )
}
