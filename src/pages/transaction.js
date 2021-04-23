import React from 'react';
import { Container } from 'react-bootstrap';
import ActiveEscrows from '../components/transaction/activeescrows';
import TransactionHistory from '../components/transaction/transactionhistory';

export default function Transaction(){
    return(
        <Container fluid className="darkbg tarnstionpage">
            <Container>
            <ActiveEscrows/>
            <TransactionHistory/>
            </Container>

        </Container>
    )
}