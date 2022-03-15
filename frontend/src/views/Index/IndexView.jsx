import './IndexStyle.scss'
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import BannerComponent from "../../components/Banner/BannerComponent";

export default function IndexView() {
    return (
        <main className={"index"}>
            <NavbarComponent/>
            <BannerComponent/>
        </main>
    )
}
