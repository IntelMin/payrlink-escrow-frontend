import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AvailableAssets from '../components/assets/availableassets';
import Deposit from '../components/assets/deposit';
import WithDraw from '../components/assets/withdraw';
import useAssets from '../hooks/useAssets';
import PageLoading from '../components/common/PageLoading';

const AssetsPage = () => {
  const assets = useAssets();

  return(
    <Container fluid className="darkbg assetpage">
      {
        assets?
          <Container>
            <Card className="deposit_withdraw">
              <Row>
                <Col md={6}>
                  <Deposit assets={assets}/>
                </Col>
                <Col md={6}>
                  <WithDraw assets={assets}/>
                </Col>
              </Row>
            </Card>
            <AvailableAssets assets={assets}/>
          </Container>
        :
          <PageLoading />
      }
      
    </Container>
  )
}

export default AssetsPage;