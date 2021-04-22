import React from 'react'
import { Container } from 'react-bootstrap'
import LineChart from '../components/staking/linechart'
import Pools from '../components/staking/pools'
import TotalRevenue from '../components/staking/totalrevenue'


export default function StakingPage(){
    return(
        <Container fluid className="darkbg stakingpage">
            <Container>
            <TotalRevenue/>
            <LineChart/>
            <Pools/>
            </Container>
        </Container>
    )

}