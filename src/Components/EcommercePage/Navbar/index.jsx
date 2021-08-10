import { Container, NavBar } from "./style";
import logo from '../../../Assets/LandingPage/logoZelo.png'
export function Navbar(props) {

    return (
        <Container>
            <NavBar>
                    <img src={logo} alt='logo' />
                <nav>
                    <a href="/">Quem Somos</a>
                    <a href="/"> Planos Funerários</a>
                    <a href="/"> Desconto Ducash</a>
                    <a href="/"> Contato </a>
                    <a href="/"> Blog </a>

                    <button> Área do Cliente</button>
                </nav>
            </NavBar>
        </Container>
    )
}