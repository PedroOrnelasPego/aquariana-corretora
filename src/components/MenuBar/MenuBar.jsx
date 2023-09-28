import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/aquariana-logo.png";
import "./MenuBar.scss";

const MenuBar = () => {
  return (
    <Navbar fixed="top" expand="xl" className="navbar bg-body-tertiary">
      <Container className="menuBar">
        <Navbar.Brand>
          <Link to="/" className="logo-link">
            <img className="logo" src={logo} alt="Logo da Aquariana" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} className="link_navigate" to="/seguros">
              Seguros
            </Nav.Link>
            <Nav.Link as={NavLink} className="link_navigate" to="/condominios">
              Seguro Condominial
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
                  to="/imoveis-aluguel"
                >
                  Aluguel
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link
                  as={NavLink}
                  className="link_navigate"
                  to="/imoveis-vendas"
                >
                  Vendas
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              hidden
              as={NavLink}
              className="link_navigate"
              to="/consorcios"
            >
              Consórcios
            </Nav.Link>
            <Nav.Link as={NavLink} className="link_navigate" to="/commodities">
              Commodities
            </Nav.Link>
            <Nav.Link as={NavLink} className="link_navigate" to="/contatos">
              Contatos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
