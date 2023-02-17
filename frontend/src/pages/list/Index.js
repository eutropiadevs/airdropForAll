import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import  './Style.css';

function List() {
    const [show, setShow] = useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="mx-auto mt-5 main">
              <Card.Body className="rounded">
                <Card.Title className="mb-4"><a href="/showItem" className="text-deco">Item 1</a></Card.Title>
                <Card.Text className="card_text">
                    <Button variant="primary" onClick={() => setShow(true)}>Claim</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mx-auto mt-5 main">
              <Card.Body className="rounded">
                <Card.Title className="mb-4"><a href="/showItem" className="text-deco">Item 2</a></Card.Title>
                <Card.Text className="card_text">
                    <Button variant="primary" onClick={() => setShow(true)}>Claim</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mx-auto mt-5 main">
              <Card.Body className="rounded">
                <Card.Title className="mb-4"><a href="/showItem" className="text-deco">Item 3</a></Card.Title>
                <Card.Text className="card_text">
                    <Button variant="primary" onClick={() => setShow(true)}>Claim</Button>
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

export default List;
