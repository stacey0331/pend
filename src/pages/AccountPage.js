import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function AccountPage() {
    return (
        <>
            <div className="Page-title ">Your Account Info</div>
            Total: $31,000 &nbsp; Earnings: $6000
            <table>
                <tr>
                    <td style={{ padding: 50}}>
                        Lend Info <br/>
                        Lend Total: $25,000 &nbsp; Owed Total: $5,000
                        <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Lent $300, Earn $3</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Status: Not paid</Card.Subtitle>
                            <Card.Text>
                            Interest rate: 12% (yearly) <br/>
                            Pay back by: March 24, 2023 <br/>
                            How to pay back: pay check next monthpay 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </td>
                    <td style={{padding: 50}}>
                        Borrow Info <br/>
                        Borrowed Total: $25,000 &nbsp; Owed Total: $5,000
                        <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Borrowed $300, Pay $3</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><Button variant="warning">Pay</Button></Card.Subtitle>
                            <Card.Text>
                            Interest rate: 12% (yearly) <br/>
                            Pay back by: March 24, 2023 <br/>
                            How to pay back: pay check next monthpay 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </td>
                </tr> 
            </table>
        </>
    );
}

export default AccountPage;