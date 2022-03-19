import './TopnavStyle.scss'
import backSVG from '../../static/images/icons/circle-arrow-left-solid.svg'

export default function TopnavComponent(props) {

    function goBack() {
        window.location.href = "/"
        sessionStorage.removeItem("current_product")
    }

    return (
        <div className={"topnav"}>
            <div className={"line"}/>

            <div className={"content"}>
                <div className={"back"}>
                    <img src={backSVG} alt={"Button back"} onClick={goBack}/>
                </div>

                <div className={"text"}>
                    <h1>{props.product.name}</h1>
                    <h3>R${props.product.value}</h3>
                </div>

                <div className={"spacer"}>
                    <button>Pedir</button>
                </div>
            </div>
        </div>
    )
}
