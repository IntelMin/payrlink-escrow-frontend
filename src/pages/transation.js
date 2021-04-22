import React from 'react';
import { Container } from 'react-bootstrap';
import ActiveEscrows from '../components/transation/activeescrows';
import TransactionHistory from '../components/transation/transactionhistory';

export default function Transation(){
    return(
        <Container fluid className="darkbg tarnstionpage">
            <Container>
            <ActiveEscrows/>
            <TransactionHistory/>
            </Container>

        </Container>
    )
}