import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AvailableAssets from '../components/assets/availableassets';
import Deposit from '../components/assets/deposit';
import WithDraw from '../components/assets/withdraw';

export default function AssetsPage() {
    return(
        <Container fluid className="darkbg assetpage">
            <Container>
                <Card className="deposit_withdraw">
                    <Row>
                        <Col md={6}>
                            <Deposit/>
                         </Col>
                         <Col md={6}>
                            <WithDraw/>
                         </Col>                       
                    </Row>

                </Card>
                <AvailableAssets/>
            </Container>
        </Container>
    )

}