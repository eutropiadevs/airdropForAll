import React, { useState } from 'react'
import { Alert, Col, Modal, ModalTitle, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.scss';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import dayjs from 'dayjs';

import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { contracts } from '../../utils';
import QrCode from '../../Components/QR Code';
import moment from 'moment';


const AirdropForm = () => {
    const [uploadLogoModal, setUploadModal] = useState(false);
    const [qrModal, setQrModal] = useState(false);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false)
    const [airdropData, setAirdropData] = useState({
        title: "",
        amount_per_user: "",
        total_airdrop_amount: "",
        token_contract_address: "",
        ipfs_url: "",
        expiry_time: "",
        description: ""
    })

    const onImageUploadChange = (e) => {
        var src = URL.createObjectURL(e.target.files[0])
        document.getElementById('image').src = src
    }

    const approveTx = async () => {
        setLoading(true)
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        const DropToken = new ethers.Contract(
            contracts.DROP_TOKEN?.address,
            contracts.DROP_TOKEN?.abi,
            signer
        );

        const transaction = await DropToken.approve(contracts.FACTORY?.address, 10000000000000000000000000n);
        // setRedirectPath(true)
        console.log(transaction);
        let tx = await transaction.wait();
        setLoading(false)
        if (tx['transactionIndex'] != null) {
            // setRedirectPath(false)
            // navigate("/liveMatches", { replace: true })

        }
        return transaction;
    };

    const createAirdrop = async () => {
        // ips(username, trait, selectedUser);

        let approvedData = await approveTx()
        console.log(approvedData, "approvedData");
        setLoading(true)
        if (approvedData?.hash) {
            setLoading(true)
            let ipfsUrl = ""

            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();

            const Factory = new ethers.Contract(
                contracts.FACTORY?.address,
                contracts.FACTORY.abi,
                signer
            );
            const transaction = await Factory.create_airdrop(
                airdropData?.title,
                airdropData?.description,
                airdropData?.ipfs_url,
                airdropData?.expiry_time,
                airdropData?.amount_per_user,
                airdropData?.token_contract_address,
                airdropData?.total_airdrop_amount,
            );
            let tx = await transaction.wait();
            setLoading(false)
            setAirdropData({
                title: "",
                amount_per_user: "",
                total_airdrop_amount: "",
                token_contract_address: "",
                ipfs_url: "",
                expiry_time: "",
                description: ""
            })
            window.alert("Transaction Successfull")

            if (tx['transactionIndex'] != null) {
                setLoading(false)
                // setRedirectPath(false)
                // navigate("/selectProfile", { replace: true })
            }
        } else {
            setLoading(false)
            window.alert("Approve Failed")
        }


    };

    const onInputChange = (e) => {
        setAirdropData({ ...airdropData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="airdrop_form_main_container ">
                <div className="airdrop_form_container ">
                    <Form>
                        <ModalTitle className='mb-1' style={{ textAlign: "center", textDecoration: "underline", fontWeight: "700" }}>Create Airdrop</ModalTitle>
                        <Form.Group className="mb-3" controlId="formBasicTitle" >
                            <Form.Label>Airdrop Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter airdrop title" name="title" onChange={(e) => onInputChange(e)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Token Amount Per Eligible User</Form.Label>
                            <Form.Control type="number" placeholder="Enter Token amount " name="amount_per_user" onChange={(e) => onInputChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Total Airdrop Amount </Form.Label>
                            <Form.Control type="number" placeholder="Enter Token amount " name="total_airdrop_amount" onChange={(e) => onInputChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicContract">
                            <Form.Label>Token Contract Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter token contract" name="token_contract_address" onChange={(e) => onInputChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicContract">
                            <Form.Label>Airdrop Logo</Form.Label>
                            <Form.Control type="text" placeholder="Upload token logo" name="ipfs_url" onChange={(e) => onInputChange(e)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Date">
                            <Form.Label>Expiration Time</Form.Label>
                            <div className='w-100'>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="Enter Expiry Time"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                            setAirdropData({ ...airdropData, ["expiry_time"]: moment().unix(newValue) })
                                        }}
                                        className="w-100"
                                    />
                                </LocalizationProvider>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Description" name="description" onChange={(e) => onInputChange(e)} />
                        </Form.Group>


                        <Button variant="primary"
                            disabled={
                                loading ||
                                !airdropData?.amount_per_user ||
                                !airdropData?.description ||
                                !airdropData?.expiry_time ||
                                !airdropData?.ipfs_url ||
                                !airdropData?.title ||
                                !airdropData?.token_contract_address ||
                                !airdropData?.total_airdrop_amount
                            }
                            onClick={() => {
                                // setQrModal(true)
                                createAirdrop()
                            }
                            }>
                            {loading ? "Tx in Process" : "  Create Airdrop"}
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
                                <QrCode />
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