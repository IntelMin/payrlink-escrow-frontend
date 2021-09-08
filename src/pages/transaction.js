import React from 'react';
import { Container } from 'react-bootstrap';
import ActiveEscrows from '../components/transaction/activeescrows';
import TransactionHistory from '../components/transaction/transactionhistory';
import useActiveTrans from '../hooks/useActiveTrans';
import PageLoading from '../components/common/PageLoading';
//import usePastTrans from '../hooks/usePastTrans';

const Transaction = () => {
  const activeTrans = useActiveTrans();
  //const pastTrans = usePastTrans();
  return (
    <Container fluid className="darkbg transaction-page">
      {
        activeTrans ?
          <Container>
            <ActiveEscrows actives={activeTrans} />
            <TransactionHistory />
          </Container>
        :
          <PageLoading />
      }
      
    </Container>
  )
}

export default Transaction;