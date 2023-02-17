import React, { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.scss';

const AirdropForm = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="airdrop_form_main_container">
                <div className="airdrop_form_container mt-3">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Airdrop Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter airdrop title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Token Amount Per Eligible User</Form.Label>
                            <Form.Control type="number" placeholder="Enter Token amount " />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicContract">
                            <Form.Label>Token Contract</Form.Label>
                            <Form.Control type="text" placeholder="Enter token contract" />
                        </Form.Group>

                        {/* <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Airdrop Logo</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group> */}

                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextPassword"
                        >

                            <Col sm="12">
                                <Form.Group className="mb-3" controlId="formBasicLogo">
                                    <div className="d-flex">

                                        <Form.Label>Logo</Form.Label>

                                        <Button className='ml-5 btn-new' variant="success" onClick={() => setShow(true)}>
                                            Upload Image
                                        </Button>
                                    </div>


                                </Form.Group>
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Description" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Create Airdrop
                        </Button>
                    </Form>

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
                </div>
            </div>
        </>
    )
}

export default AirdropForm;