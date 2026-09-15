import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './CustomNavBar.css'
import { Form } from 'react-bootstrap';
import { Search, House, Users, BriefcaseBusiness, MessageCircleMore, Bell, Grip, } from 'lucide-react';


const CustomNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex align-items-center justify-content-between">

        {/* LOGO + SEARCH */}
        <div className="d-flex align-items-center">

          <Navbar.Brand href="#home" className="m-0 me-3">
            <img
              className="main-icon"
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png"
              alt=""
            />
          </Navbar.Brand>

          <div className="search-container">
            <Search className="search-icon" />

            <Form.Control
              type="search"
              placeholder="Cerca"
              className="search-input"
              aria-label="Search"
            />
          </div>

        </div>


        {/* NAV DESTRA */}
        <Nav className="navbar-links">

          <Nav.Link href="#home" className="nav-item-custom">
            <House size={20} color="#7a7a7a" strokeWidth={2.5} />
            <span>Home</span>
          </Nav.Link>

          <Nav.Link href="#" className="nav-item-custom">
            <Users size={20} color="#7a7a7a" strokeWidth={2.5} />
            <span>La Mia Rete</span>
          </Nav.Link>

          <Nav.Link href="#" className="nav-item-custom">
            <BriefcaseBusiness size={20} color="#7a7a7a" strokeWidth={2.5} />
            <span>Lavoro</span>
          </Nav.Link>

          <Nav.Link href="#" className="nav-item-custom">
            <MessageCircleMore size={20} color="#7a7a7a" strokeWidth={2.5} />
            <span>Messaggistica</span>
          </Nav.Link>

          <Nav.Link href="#" className="nav-item-custom">
            <Bell size={20} color="#7a7a7a" strokeWidth={2.5} />
            <span>Notifiche</span>
          </Nav.Link>



           <NavDropdown
            title={
              <div className="company-dropdown-title">
               
                <span>Tu</span>
              </div>
            }
            id="profile-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Action
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.3">
              Something
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>


          {/* DIVISORE */}
          <div className="nav-divider"></div>

          {/* AZIENDE */}
          <NavDropdown
            title={
              <div className="company-dropdown-title">
                <Grip
                  size={20}
                  color="#7a7a7a"
                  strokeWidth={2.5}
                />
                <span>Per le aziende</span>
              </div>
            }
            id="company-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Action
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.3">
              Something
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

        </Nav>

      </Container>
    </Navbar >





  )

}

export default CustomNavBar