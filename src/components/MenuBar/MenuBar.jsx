import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo/aquariana-logo.png";
import "./Menubar.scss";
import { Link, NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div>
      <Navbar fixed="top" expand="xl" className="navbar bg-body-tertiary">
        <Container className="menuBar">
          <Navbar.Brand>
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink className="link_navigate" to="seguros">
                  Seguros
                </NavLink>
              </Nav.Link>
              <NavDropdown
                className="link_navigate"
                title="Imóveis"
                id="basic-nav-dropdown"
                active
              >
                <NavDropdown.Item>
                  <Nav.Link>
                    <NavLink className="link_navigate" to="imoveis-aluguel">
                      Aluguel
                    </NavLink>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link>
                    <NavLink className="link_navigate" to="imoveis-vendas">
                      Vendas
                    </NavLink>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <NavLink className="link_navigate" to="condominios">
                  Comdomínios
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="link_navigate" to="consorcios">
                  Consórcios
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="link_navigate" to="commodities">
                  Commodities
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
/*

<div>
      <Navbar expand="xl" className="bg-body-tertiary">
        <Container className="menuBar">
          <Navbar.Brand>
            <Nav.Link>
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink className="link_navigate" to="seguros">
                  Seguros
                </NavLink>
              </Nav.Link>
              <NavDropdown
                className="link_navigate"
                title="Imóveis"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="actin">Vendas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="acton">Aluguel</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link active href="condominios">
                Condomínios
              </Nav.Link>
              <Nav.Link href="consorcios">Consórcios</Nav.Link>
              <Nav.Link href="commodities">Commodities</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

      */
