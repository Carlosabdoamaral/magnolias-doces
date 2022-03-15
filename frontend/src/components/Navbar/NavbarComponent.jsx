import './NavbarStyle.scss'

export default function NavbarComponent() {
    return (
        <nav>
            <a href={"/"}>Doces Magnolia</a>

            <div className={"links"}>
                <a href={'/#about'}>Sobre</a>
                <a href={'/#products'}>Produtos</a>
                <a href={'/#contact'}>Contato</a>
                <a href={'/#about'}>Pedir</a>
            </div>
        </nav>
    )
}
