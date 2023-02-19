import React, { useState } from 'react'
import { Col, Modal, ModalTitle, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.scss';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';

import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { contracts } from '../../utils';


const AirdropForm = () => {
    const [uploadLogoModal, setUploadModal] = useState(false);
    const [qrModal, setQrModal] = useState(false);
    const [value, setValue] = React.useState('2022-04-07');

    const onImageUploadChange = (e) => {
        var src = URL.createObjectURL(e.target.files[0])
        document.getElementById('image').src = src
    }



    const createNFT = async () => {

        // ips(username, trait, selectedUser);
        let ipfsUrl=""

        const web3Modal = new web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        const NFTContract = new ethers.Contract(
            contracts.FACTORY?.address,
            contracts.FACTORY.abi,
            signer
        );
        const transaction = await NFTContract.safeMint(ipfsUrl);
        // setRedirectPath(true)
        console.log(transaction);
        let tx = await transaction.wait();
        console.log(tx)
        let event = tx.events[0];
        let value = event.args[2];

        if (tx['transactionIndex'] != null) {
           
            // setRedirectPath(false)
            // navigate("/selectProfile", { replace: true })

        }
    };



    return (
        <>
            <div className="airdrop_form_main_container ">
                <div className="airdrop_form_container ">
                    <Form>
                        <ModalTitle className='mb-1' style={{ textAlign: "center", textDecoration: "underline", fontWeight: "700" }}>Create Airdrop</ModalTitle>
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

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Col sm="12">
                                <Form.Group className="" controlId="formBasicLogo">
                                    <Form.Label>Airdrop Logo</Form.Label>
                                    <div>
                                        <Form.Text className="text-muted">
                                            IPFS URL:
                                        </Form.Text>
                                    </div>
                                    <Button className='ml-5 btn-new w-100 mt-2' variant="success" onClick={() => setUploadModal(true)}>
                                        Upload Image
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Date">
                            <Form.Label>Expiration Time</Form.Label>
                            <div className='w-100'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="DateTimePicker"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        className="w-100"
                                    />
                                </LocalizationProvider>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Description" />
                        </Form.Group>


                        <Button variant="primary" onClick={() => setQrModal(true)}>
                            Create Airdrop
                        </Button>
                    </Form>


                    {/* Bar Code Generator Modal  */}
                    <Modal
                        show={qrModal}
                        onHide={() => setQrModal(false)}
                        centered={true}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Body>
                            <Form.Group controlId="formFile" className="mb-3">
                                <img className="card-img-top" />
                                <div>
                                    <Form.Text className="text-muted">
                                        Please use ur polygon_id scanner to fetch the claim
                                    </Form.Text>
                                </div>
                            </Form.Group>
                        </Modal.Body>
                    </Modal>


                    {/*  Upload Image Modal   */}

                    <Modal
                        show={uploadLogoModal}
                        onHide={() => setUploadModal(false)}
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
                                <Form.Control type="file" id='files' onChange={(e) => onImageUploadChange(e)} />
                                <img className="card-img-top" id="image" />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" className='w-100'>Upload</Button>
                            </div>
                        </Modal.Body>
                    </Modal>

                </div>
            </div>
        </>
    )
}

export default AirdropForm;