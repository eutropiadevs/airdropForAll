import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QrCode from '../QR Code';
import './claimAirdropModal.scss';

const ClaimAirdropModal = ({ showClaimModal, handleClose, handleClaimShow }) => {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleClaimShow} className=" claim_airdrop_btn">
                Claim
            </Button>

            <Modal show={showClaimModal} onHide={handleClose} centered>
                <Modal.Body className='d-flex justify-content-center flex-column align-items-center'>
                    <QrCode />
                    <p>Please use ur polygon_id scanner to fetch the claim</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ClaimAirdropModal