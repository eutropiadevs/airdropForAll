import React,{ useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

import './Index.css';
function Index(){
    const [show, setShow] = useState(false);
    return (
      <>
        {" "}
        <Container className="mb-5">
        <div className='outer_border mx-auto'>
          <Card className="main mx-auto mt-5">
            <Card.Body className="bg-color rounded">
              <Card.Title className="text-center mb-5">Create Airdrop</Card.Title>
              <Card.Text className="card_text">
                <Form>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    
                    <Col sm="12">
                    <div className="inputBox">
                    <Form.Label className='font-weight-bold'>
                      Airdrop Title
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                    <span className='line'></span>
                    </div>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    
                    <Col sm="12">
                    <div className="inputBox">
                    <Form.Label>
                      Description
                    </Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Enter Description"
                        style={{ height: "100px" }}
                      />
                      </div>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    
                    <Col sm="12">
                    <div className="inputBox">
                    <Form.Label>
                      Token Amount Per user
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" />
                    </div>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                    
                    <Col sm="12">
                    <div className="inputBox">
                      <Form.Label>
                        Token Contract
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter Title" />
                    </div>
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextPassword"
                  >
                    
                    <Col sm="12">
                    <div className="inputBox">
                      <Form.Label>
                        Logo
                      </Form.Label>
                      <p>
                      <Button className='ml-5 btn-new' variant="success" onClick={() => setShow(true)}>
                        Upload Image
                      </Button>
                      </p>
                      </div>
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Text>
              <p className="text-center">

              <Button variant="primary" className="btn-submit mt-3">Create airdrop</Button>
              </p>
            </Card.Body>
          </Card>
        </div>
        </Container>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Upload File
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Select file</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary">Upload</Button>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default Index