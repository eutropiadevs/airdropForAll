import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ClaimAirdropModal from '../Claim Airdrop/claimAirdropModal';
import './viewAirdropDetails.scss'

const ViewAirdropDetails = ({
    showViewModal,
    handleClose,
    handleViewShow,
    showClaimModal,
    handleClaimShow
}) => {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleViewShow} className="w-100">
                View Details
            </Button>

            <Modal show={showViewModal} onHide={handleClose} centered>
                <Modal.Body className='d-flex justify-content-center flex-column align-items-center'>
                    <div className="detail_mian_container">
                        <div className="details_container">
                            <div className="top_container">
                                <div className="left_icon_container">
                                    <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,forest" alt="@image" />
                                </div>
                                <div className="right_text_container">
                                    <div className="title_container">
                                        <div className="heading">Title :</div>
                                        <div className="title_text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </div>
                                    </div>
                                    <div className="description_container">
                                        <div className="lable">Description :</div>
                                        <div className="description_text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur recusandae reiciendis ab itaque optio delectus eaque officiis eius odit accusantium.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom_container">
                                <Col>
                                    <Row>
                                        <div className="key">Expires In :</div>
                                        <div className="value">12D 8H 35M 12S</div>
                                    </Row>
                                    <Row>
                                        <div className="key">Claimable Amount :</div>
                                        <div className="value"> 120 XYZ</div>
                                    </Row>
                                    <Row>
                                        <div className="key">Token Contract :</div>
                                        <div className="value">xcdfvsfyn980hsdhujsgsst</div>
                                    </Row>
                                    <div className="view_airdrop_modal_btn_container mt-2">
                                        <ClaimAirdropModal showClaimModal={showClaimModal} handleClose={handleClose} handleClaimShow={handleClaimShow} />
                                    </div>
                                </Col>

                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}

export default ViewAirdropDetails;