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
              <Nav.Link as={NavLink} className="link_navigate" to="seguros">
                Seguros
              </Nav.Link>
              <NavDropdown
                className="link_navigate"
                title="Imóveis"
                id="basic-nav-dropdown"
                active
              >
                <NavDropdown.Item>
                  <Nav.Link
                    as={NavLink}
                    className="link_navigate"
                    to="imoveis-aluguel"
                  >
                    Aluguel
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link
                    as={NavLink}
                    className="link_navigate"
                    to="imoveis-vendas"
                  >
                    Vendas
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} className="link_navigate" to="condominios">
                Comdomínios
              </Nav.Link>
              <Nav.Link as={NavLink} className="link_navigate" to="consorcios">
                Consórcios
              </Nav.Link>
              <Nav.Link as={NavLink} className="link_navigate" to="commodities">
                Commodities
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
