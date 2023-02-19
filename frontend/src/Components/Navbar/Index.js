import { Button, Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { requestAccount } from '../../utils';
import Logo from '../../asset/images/Logo.png';

function Menu() {

  const metaMaskConnectHandle = async () => {


    const metaMaskAccount = await requestAccount();
    localStorage.setItem("userAddresss", metaMaskAccount);
    let userAccBal = localStorage.getItem("userBal")
    console.log("userbal--->", userAccBal);
    // dispatch(setUserAdd(metaMaskAccount))
    // dispatch(setUserBal(userAccBal));
    let userAccAdd = localStorage.getItem("userAddresss")
    console.log(userAccAdd, "userAccAdd");
    // setUserAddress(userAccAdd);
    // await requestBalance();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <div className="logo_container">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <span> Airdrop For All</span>
          </div>
        </Navbar.Brand>
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

              <Dropdown.Menu >
                {/* <Dropdown.Item href="#/action-1">MetaMask</Dropdown.Item> */}
                <div className="wallet_container" onClick={() => metaMaskConnectHandle()} style={{ marginLeft: "10px", cursor: "pointer" }} >
                  Matamask
                  {/* <ConnectWallet /> */}
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