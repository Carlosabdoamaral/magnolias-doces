import './IndexproductsStyle.scss';
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
            <img src={props.image} alt={"Produto foto"}/>
            <h3>{props.name}</h3>
        </div>
    )
}
