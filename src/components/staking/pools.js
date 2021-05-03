import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import listicon from '../../images/listicon.png';
import gridicon from '../../images/gridicon.png';
import PoolsGrid from './poolsgrid';
import PoolsList from './poolslist';

export default function Pools(){
    const [showGrid, setShowGrid] = useState(true);
    // const [ActivePools,setActivePools]=useState(1)
    const showhide = (ev, value) =>{
        console.log(value);
        if(value == 1){
            setShowGrid(true)
            // setActivePools(0)
        } else {
            setShowGrid(false)
            // setActivePools(1)
        }
    }
    
    const [stacks,setStacks]= useState({
        Eth:"Stake",
        Usdt:"Stake",
        Payr:"Stake",
        Btc:'Stake'
      })
      // set Stack of Eth
      const SetStackEth=(e)=>{
        setStacks({...stacks,Eth:e})
      }
    
      const SetStackUsdt=(e)=>{
        setStacks({...stacks,Usdt:e})
      }
    
      const SetStackPayr=(e)=>{
        setStacks({...stacks,Payr:e})
      }
    
      const SetStackBtc=(e)=>{
        setStacks({...stacks,Btc:e})
      }

return (
    <Card className="myassets pools_main">
        <Row className="pools_header">
        <Col md={6}>
            <h2>Pools</h2>
        </Col>
        <Col md={6}>
        <Card className="pool_style_btn" >
            <a href="javascript:void(0)" onClick={(ev => showhide(ev, 2))} className={showGrid===false?"gridactive":""}><img src={listicon}/></a>
            <a href="javascript:void(0)" onClick={(ev => showhide(ev, 1))} className={showGrid===true?"gridactive":""}><img src={gridicon}/></a>
        </Card>
         </Col>   
        </Row>    
        { showGrid ? 
        <PoolsGrid 
            stacks={stacks} 
            setStacks={setStacks} 
            SetStackEth={SetStackEth}
            SetStackUsdt={SetStackUsdt}
            SetStackBtc={SetStackBtc}
            SetStackPayr={SetStackPayr}
        />
        : 
        <PoolsList
            stacks={stacks} 
            setStacks={setStacks} 
            SetStackEth={SetStackEth}
            SetStackUsdt={SetStackUsdt}
            SetStackBtc={SetStackBtc}
            SetStackPayr={SetStackPayr}
        />}
    </Card>
)

}