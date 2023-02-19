import moment from 'moment';
import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ClaimAirdropModal from '../Claim Airdrop/claimAirdropModal';
import './viewAirdropDetails.scss'

const ViewAirdropDetails = ({
    data,
    showViewModal,
    handleClose,
    handleViewShow,
    showClaimModal,
    handleClaimShow
}) => {

    return (
        <>
            <Button variant="primary" onClick={handleViewShow} className="w-100">
                View Details
            </Button>

            <Modal show={showViewModal} onHide={handleClose} centered >
                <Modal.Body className='d-flex justify-content-center flex-column align-items-center'>
                    <div className="detail_mian_container">
                        <div className="details_container">
                            <div className="top_container">
                                <div className="left_icon_container">
                                    <img src={data?.logo_url} alt="@image" />
                                </div>
                                <div className="right_text_container">
                                    <div className="title_container">
                                        <div className="heading">Title :</div>
                                        <div className="title_text">
                                            {data?.title}
                                        </div>
                                    </div>
                                    <div className="description_container">
                                        <div className="lable">Description :</div>
                                        <div className="description_text">
                                            {data?.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom_container">
                                <Col>
                                    <Row>
                                        <div className="key">Expires In :</div>
                                        <div className="value">{moment.unix((parseInt(data?.expiry?._hex, 16))).format("DD/MM/YYYY")}</div>
                                    </Row>
                                    <Row>
                                        <div className="key">Claimable Amount :</div>
                                        <div className="value"> {parseInt(data?.per_user_amount?._hex, 16)} </div>
                                    </Row>
                                    <Row>
                                        <div className="key">Airdrop Contract :</div>
                                        <div className="value">{data?.contract_address}</div>
                                    </Row>
                                    <div className="view_airdrop_modal_btn_container mt-2">
                                        <ClaimAirdropModal data={data} showClaimModal={showClaimModal} handleClose={handleClose} handleClaimShow={handleClaimShow} />
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