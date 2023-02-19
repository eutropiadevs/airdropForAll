import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import circleLogo from '../public/images/bitcoin.webp'; 
import  './Style.css';

function Item() {
    const [show, setShow] = useState(false);
  return (
    <>
      <Container>
        <Row className="mx-auto">
        <Col md={3}></Col>
          <Col md={6}>
            <Card className="mx-auto mt-5 main">
              <Card.Body className="rounded">
                
                <Card.Text className="card_text">
                    
                    <Row>
                        <Col md={4}>
                        <img src={`${process.env.PUBLIC_URL}/images/bitcoin.webp`} className="rounded w-200" alt="my Circle" />
                        </Col>
                        <Col md={8}>
                        <span className="title-1">Title </span>- Bitcoin
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                            
                        </Col>
                        <Col md={8}>
                            <p className="title-1">Description</p>
                            <p>lorem ipsum</p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                          <span className="title-1">
                            Expire in
                          </span>
                        </Col>
                        <Col md={8}>
                            <p>2 Days</p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                        <span className="title-1">
                            Claimable Amount
                        </span>
                        </Col>
                        <Col md={8}>
                            <p>$500</p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4}>
                        <span className="title-1">
                            Token Contract
                        </span>
                        </Col>
                        <Col md={8}>
                            <p>2 Years</p>
                        </Col>
                    </Row>
                    <p className="text-center">

                    <Button variant="primary" className="mt-3 mx-auto center btn-new" onClick={() => setShow(true)}>Claim</Button>
                    </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          
        </Row>
      </Container>

      {/* Modal Starts */}
      <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Claim
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="mx-auto justify-content-center">

          <img className="img-pro" src="https://fragrant.mobiletransaction.org/wp-content/uploads/2019/09/qr-code-for-wikipedia.png" alt="React Image" />
          </div>
          <p>Please use ur polygon_id scanner to fetch the claim</p>
          </Modal.Body>
        </Modal>
    </>
  );
}

export default Item;
