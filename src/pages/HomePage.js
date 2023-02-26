import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Home() {
    return (
        <table id="layout_table">
            <tr>
                <td id="filters">
                    <table style={{ width: 300, height: '100vh', position: 'absolute', top: 55, backgroundColor: 'white'}}>
                        <tr id="filter_title_row">
                            <td>
                                Filters
                            </td>
                            <td style={{ width: 80}}>
                                Reset all
                            </td>
                        </tr>
                        <tr style={{ height: 100}}>
                            <div>Lend Amount</div>
                            <FloatingLabel label="Minimum" style={{width: 100, fontSize: 15, display: 'inline-block'}}>
                                <Form.Control placeholder="E.g. $300" />
                            </FloatingLabel>
                            --
                            <FloatingLabel label="Maximum" style={{width: 100, fontSize: 15, display: 'inline-block'}}>
                                <Form.Control placeholder="E.g. $1000" />
                            </FloatingLabel>
                        </tr>
                        <tr style={{ height: 100}}>
                            Earn Minimum
                            <FloatingLabel label="Maximum" style={{width: 100, fontSize: 15}}>
                                <Form.Control placeholder="E.g. $1000" />
                            </FloatingLabel>
                        </tr>
                        <tr>
                            Pay Back Within
                            <input type="date"></input>
                        </tr>
                    </table>
                </td>
                <td id="requests_list">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Sort
                        </Dropdown.Toggle>
                    
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Lend Amount</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Earn Amount</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Pay back (most recent)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <ListGroup>
                        <ListGroup.Item style={{ width: 650 }}>
                            <table>
                                <tr>
                                    <td>
                                        <div className="lend_title">
                                            Lend $300 <br/> Earn $3
                                        </div>
                                    </td>
                                    <td>
                                        <div className="lend_info" style={{ width: 400 }}> 
                                            Interest rate: 12% (yearly) <br/>
                                            Pay back by: March 24th, 2023 <br/>
                                            How to pay back: pay check next monthpay check next month pay check 
                                        </div> 
                                    </td>
                                    <td>
                                        <Button variant="warning">Lend</Button>
                                    </td>
                                </tr>
                            </table>
                        </ListGroup.Item>
                    </ListGroup>
                </td>
            </tr>

        </table>


    );
}

export default Home;