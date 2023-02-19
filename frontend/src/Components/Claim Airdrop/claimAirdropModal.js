import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
                    <div className="mx-auto ">
                        <img className="img-pro" src="https://fragrant.mobiletransaction.org/wp-content/uploads/2019/09/qr-code-for-wikipedia.png" alt="React Image" />
                    </div>

                    <p>Please use ur polygon_id scanner to fetch the claim</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ClaimAirdropModal