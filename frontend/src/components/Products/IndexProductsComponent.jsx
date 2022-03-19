import './IndexproductsStyle.scss';
import {ProductData} from "../../static/data/ProductData";
export default function IndexProductsComponent(){
    return (
        <section className={"products"}>
            <h1>Produtos</h1>
            <p>Escolha o seu preferido!</p>

            <div className={"list"}>
                {
                    ProductData.map((p, i) => (
                        <ProductSquare name={p.name} image={p.image} id={i}/>
                    ))
                }
            </div>
        </section>
    )
}

function ProductSquare(props) {
    return (
        <div className={"product-square"} onClick={() => { window.location.href = `/details`; sessionStorage.setItem("current_product", props.id) }}>
            <div className={"overlay"}/>
            <img src={props.image} alt={"Produto foto"}/>
            <h3>{props.name}</h3>
        </div>
    )
}
