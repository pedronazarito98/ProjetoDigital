import { Burguer } from "./Burguer";
import { Nav } from "./styles";
import logo from '../../../Assets/LandingPage/logoZelo.png'
export function Navbar() {
    return (
      <Nav>
        <div className="logo">
          <img src={logo} alt="Logo Zelo" />
        </div>
        <Burguer />
      </Nav>
    )
  }