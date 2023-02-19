import { Button, Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Airdrop Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="/createdrop">Create Airdrop</Nav.Link>
            <Nav.Link href="/existing_airdrop">Existing Airdrop</Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Connect Wallet
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1">MetaMask</Dropdown.Item> */}
                <div className="wallet_container">
                  Matamask
                </div>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Button variant='primary'> Connect Wallet</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;