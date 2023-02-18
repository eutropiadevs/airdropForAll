import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ClaimAirdropModal from '../../Components/Claim Airdrop/claimAirdropModal';
import ViewAirdropDetails from '../../Components/View Airdrop Details/viewAirdropDetails';
import './index.scss';

function ExistingAirdrop() {

    const [showClaimModal, setShowClaimMpdal] = useState(false);
    const [showViewModal, setShowViewMdal] = useState(false);

    const handleClose = () => {
        setShowViewMdal(false)
        setShowClaimMpdal(false)
    };

    const handleClaimShow = () => {
        setShowViewMdal(false)
        setShowClaimMpdal(true)
    };

    const handleViewShow = () => {
        setShowViewMdal(true)
    };

    return (
        <>
            <Container>
                <Row className="mx-auto mt-3">
                    <div className="existing_airdrop_main_container">
                        <div className="existing_airdrop_container">
                            <Row className='gy-4'>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://source.unsplash.com/random/1920x1080/?wallpaper,forest" style={{ minHeight: "170px", maxHeight: "170px" }} />
                                        <Card.Body>
                                            <div className="d-flex align-items-center justify-content-between smaill_claim_btn">
                                                <Card.Title className='h0'>Card Title</Card.Title>
                                                <ClaimAirdropModal showClaimModal={showClaimModal} handleClose={handleClose} handleClaimShow={handleClaimShow} />
                                            </div>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <div className="card_claim_modal_container">
                                                <ViewAirdropDetails
                                                    showViewModal={showViewModal}
                                                    handleClose={handleClose}
                                                    handleViewShow={handleViewShow}
                                                    showClaimModal={showClaimModal}
                                                    handleClaimShow={handleClaimShow}
                                                />                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://source.unsplash.com/random/1920x1080/?wallpaper,sea" style={{ minHeight: "170px", maxHeight: "170px" }} />
                                        <Card.Body>
                                            <div className="d-flex align-items-center justify-content-between mb-2 smaill_claim_btn">
                                                <Card.Title className='h0'>Card Title</Card.Title>
                                                <ClaimAirdropModal showClaimModal={showClaimModal} handleClose={handleClose} handleClaimShow={handleClaimShow} />
                                            </div>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <div className="card_claim_modal_container">
                                                <ViewAirdropDetails
                                                    showViewModal={showViewModal}
                                                    handleClose={handleClose}
                                                    handleViewShow={handleViewShow}
                                                    showClaimModal={showClaimModal}
                                                    handleClaimShow={handleClaimShow}
                                                />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://source.unsplash.com/random/1920x1080/?wallpaper,animal" style={{ minHeight: "170px", maxHeight: "170px" }} />
                                        <Card.Body>
                                            <div className="d-flex align-items-center justify-content-between smaill_claim_btn">
                                                <Card.Title className='h0'>Card Title</Card.Title>
                                                <ClaimAirdropModal showClaimModal={showClaimModal} handleClose={handleClose} handleClaimShow={handleClaimShow} />
                                            </div>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <div className="card_claim_modal_container">
                                                <ViewAirdropDetails
                                                    showViewModal={showViewModal}
                                                    handleClose={handleClose}
                                                    handleViewShow={handleViewShow}
                                                    showClaimModal={showClaimModal}
                                                    handleClaimShow={handleClaimShow}
                                                />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>

                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default ExistingAirdrop;