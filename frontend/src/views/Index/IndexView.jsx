import './IndexStyle.scss'
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import BannerComponent from "../../components/Banner/BannerComponent";
import IndexProductsComponent from "../../components/Products/IndexProductsComponent";

export default function IndexView() {
    return (
        <main className={"index"}>
            <NavbarComponent/>
            <BannerComponent/>
            <IndexProductsComponent/>
        </main>
    )
}
