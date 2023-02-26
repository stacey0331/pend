import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function PaymentMethodsPage() {
    const [showWarning, setShowWarning] = useState(false);


    const handleCloseWarning = () => setShowWarning(false);
    const handleShowWarning = () => setShowWarning(true);
    return (
        <>
        <div className="Page-title">Banks Connected</div>
        <Button variant="success" style={{ margin: 20}}>Add a Bank or Card</Button>
        <Card style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title>JPMORGAN CHASE Personal Checking</Card.Title>
            <Card.Text> Bank  **0597 </Card.Text>
            <Card.Link onClick={handleShowWarning}>Remove</Card.Link>
        </Card.Body>
        </Card>

        {/* Remove warning */}
        <Modal show={showWarning} onHide={handleCloseWarning}>
            <Modal.Header closeButton>
            <Modal.Title>Remove Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to remove?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseWarning}>
                Nevermind
            </Button>
            <Button variant="danger" onClick={handleCloseWarning}>
                Remove
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default PaymentMethodsPage;