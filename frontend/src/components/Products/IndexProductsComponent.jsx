import './IndexproductsStyle.scss';
import bolos from '../../static/images/bolo.jpeg'
import {ProductData} from "../../static/data/ProductData";
export default function IndexProductsComponent(){
    return (
        <section className={"products"}>
            <h1>Produtos</h1>
            <p>Escolha o seu preferido!</p>

            <div className={"list"}>
                {
                    ProductData.map((p) => (
                        <ProductSquare name={p.name} image={p.image}/>
                    ))
                }
            </div>
        </section>
    )
}

function ProductSquare(props) {

    let url = props.name

    return (
        <div className={"product-square"} onClick={() => { window.location.href = `/${url}` }}>
            <div className={"overlay"}/>
            <img src={props.image}/>
            <h3>{props.name}</h3>
        </div>
    )
}
