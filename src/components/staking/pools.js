import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import listicon from '../../images/listicon.png';
import gridicon from '../../images/gridicon.png';
import PoolsGrid from './poolsgrid';
import PoolsList from './poolslist';

export default function Pools(){
    const [showGrid, setShowGrid] = useState(true);
    const showhide = (ev, value) =>{
        console.log(value);
        if(value === 1){
            setShowGrid(true)
        } else {
            setShowGrid(false)
        }
    }
    
    const [stacks,setStacks]= useState({
        Eth:"",
        Usdt:"",
        Payr:"",
        Btc:''
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
            <span onClick={(ev => showhide(ev, 2))} className={showGrid===false?"gridactive":""}><img src={listicon} alt="" /></span>
            <span onClick={(ev => showhide(ev, 1))} className={showGrid===true?"gridactive":""}><img src={gridicon} alt="" /></span>
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