import React from "react";

import "./styles/style.css";
import "./styles/navibar.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Navibar extends React.Component {
  state = {};

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="navibar-logo"
              src="./images/JoinEvents-logo-3.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Buscar Evento / Categoria"
                  className="mr-2"
                  aria-label="Buscar"
                />
                <Button className="theme-btn btn-style-one">
                  <span className="btn-title">Buscar</span>&nbsp;&nbsp;&nbsp;
                </Button>
              </Form>
            </Nav>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  Usuario &nbsp;▾
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1">Mi Perfil</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-2">Cerrar Sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

// {/* <div className="auto-container clearfix">
//     <div className="logo-box">
//       <div className="logo">
//         <a href="index-2.html">
//           <img src="images/JoinEvents-logo-3.png" alt="" title=""></img>
//         </a>
//       </div>
//     </div>

//     <div className="nav-outer clearfix">
//       <div className="mobile-nav-toggler">
//         <span className="icon flaticon-menu"></span>
//       </div>

//       <nav className="main-menu navbar-expand-md navbar-light">
//         <div className="navbar-header">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="icon flaticon-menu-button"></span>
//           </button>
//         </div>

//         <div
//           className="collapse navbar-collapse clearfix"
//           id="navbarSupportedContent"
//         >
//           <ul className="navigation clearfix">
//             {this.state.items.map((item) => {
//               return <Itmnavbar itm={item} />;
//             })}
//           </ul>
//         </div>
//       </nav>

//       <div className="outer-box">
//         <div className="search-box-outer">
//           <div className="search-box-btn">
//             <span className="flaticon-search"></span>
//           </div>
//         </div>

//         <div className="btn-box">
//           <a href="buy-ticket.html" className="theme-btn btn-style-one">
//             <span className="btn-title">Get Tickets</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div> */}

export default Navibar;