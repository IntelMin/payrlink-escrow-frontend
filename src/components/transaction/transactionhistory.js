import React, { useEffect , useState} from 'react';
import { Card, Col, Row, Form, Table, Tab, Nav, Pagination } from 'react-bootstrap';
import plusicon from '../../images/plusicon.png';
import downwhite from '../../images/downwhite.png';
import {HistoryData} from '../../dataset'
export default function TransactionHistory (){
  // Data for Transaction History
  const [Data,setData]=useState([]);
  // Get Length of Data that coming from dataset.js file
  const TotalData=HistoryData.length;
  const ItemPerPage=3
  const CreatePage=TotalData/3;
  const Pages = Math.ceil(CreatePage)// Total Pages
  const [range,setRange]=useState({
    StartPoint:0,
    EndPoint:3
  })

  //Disable Pagination Button when last page active
  const [statepaginationbtn,setStatePaginationBtn]=useState({
    disableNxt:false,
    disablePre:true
  }) 
  useEffect(()=>{
    setData(HistoryData.slice(range.StartPoint,range.EndPoint));
    // setRange({...range, StartPoint: range.EndPoint, EndPoint: range.EndPoint+ItemPerPage })
    console.log(Data)
  },[])
 
  const nextPageData=()=>{
    if(range.EndPoint<=TotalData){
      const strt = range.EndPoint;
      const end = range.EndPoint + ItemPerPage;
      setRange({StartPoint: strt, EndPoint: end})
      console.log(strt,end)
      setData(HistoryData.slice(strt,end));
      // console.log(Data[0])
    }
    else{
      setStatePaginationBtn({...statepaginationbtn, disableNxt:true})
    }
  }
  const previousPageData=()=>{
      const strt = range.StartPoint-ItemPerPage;
      const end = range.EndPoint-ItemPerPage;
      setRange({...range, StartPoint: strt, EndPoint: end})
      setData(HistoryData.slice(strt,end));
      console.log(range)
      if(range.StartPoint <= 0){
        setRange({...range, StartPoint: 0, EndPoint: 3})
      //  setStatePaginationBtn({...statepaginationbtn, disablePre:true, disabelNxt:false})
      }
      else{
      //  setStatePaginationBtn({...statepaginationbtn, disablePre:true, disabelNxt:false})
      }
  }

  const firstPage=()=>{
      setRange({...range, StartPoint: 0, EndPoint: 3})
      setData(HistoryData.slice(0,3));
      console.log(range)
      if(range.StartPoint <= 0){
        setRange({...range, StartPoint: 0, EndPoint: 3})
      }
      else{
      //  setStatePaginationBtn({...statepaginationbtn, disablePre:true, disabelNxt:false})
      }
  }

  const lastPage=()=>{
    setRange({...range, StartPoint: TotalData-3, EndPoint: TotalData})
    setData(HistoryData.slice(TotalData-3,TotalData));
    console.log(range)
    if(range.StartPoint <= 0){
      setRange({...range, StartPoint: TotalData-3, EndPoint: TotalData})
    }
    else{
    //  setStatePaginationBtn({...statepaginationbtn, disablePre:true, disabelNxt:false})
    }
}

return(
  <Card className="myassets transation_history">
    <h2>Transaction History</h2>
    <Tab.Container id="left-tabs-example" defaultActiveKey="all">
      <Row>
        <Col md={5}>
            <span class="buy">BUY</span>
            <span class="sell">SELL</span>
        </Col>  
        <Col md={7}>
          <Nav variant="tabs" defaultActiveKey="all">
            <Nav.Item>
              <Nav.Link eventKey="all">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="active">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pending">Pending</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="dispute">On Dispute</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="canceled">Canceled</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="completed">Completed</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>   
      </Row>
              
      <Tab.Content>
        <Tab.Pane eventKey="all">
          <Card className="transation_history_table">
            <Table>
              <thead>
                  <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th></th>
                  <th>To/From</th>
                  <th>Created At</th>
                  <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                {
                  Data.map(({id,name,amount,tofrom,createdatdate, createdattime},index)=>{
                    // console.log(Data[0]);
                    return(
                      <tr key={index}>
                        <td>{id}</td>    
                        <td>{name}</td>
                        <td>{amount}</td>
                        <td><span class="buy">Buy</span></td>
                        <td>{tofrom}</td>
                        <td><h4>{createdatdate}</h4><small>{createdattime}</small></td>
                        <td><span class="status_active">Active</span></td>
                      </tr>
                    )
                  })
                } 
              </tbody>
            </Table>
          </Card>
        </Tab.Pane>
        <Tab.Pane eventKey="active">
          <Card className="transation_history_table">
            <Table>
              <thead>
                  <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th></th>
                  <th>To/From</th>
                  <th>Created At</th>
                  <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  <td>1</td>    
                  <td>BuyCat</td>
                  <td>80 ETH</td>
                  <td><span class="buy">Buy</span></td>
                  <td>0x178*****35</td>
                  <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                  <td><span class="status_active">Active</span></td>
                  </tr>
                  <tr>
                  <td>2</td>    
                  <td>NeonXero</td>
                  <td>30 ETH</td>
                  <td><span class="buy">Buy</span></td>
                  <td>0x178*****35</td>
                  <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                  <td><span class="status_active">Active</span></td>
                  </tr>  
              </tbody>
            </Table>
          </Card>
        </Tab.Pane>

        <Tab.Pane eventKey="pending">
          <Card className="transation_history_table">
            <Table>
              <thead>
                  <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th></th>
                  <th>To/From</th>
                  <th>Created At</th>
                  <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  <td>1</td>    
                  <td>BuyCat</td>
                  <td>80 ETH</td>
                  <td><span class="buy">Buy</span></td>
                  <td>0x178*****35</td>
                  <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                  <td><span class="status_active">Active</span></td>

                  </tr>

                  <tr>
                  <td>2</td>    
                  <td>NeonXero</td>
                  <td>30 ETH</td>
                  <td><span class="buy">Buy</span></td>
                  <td>0x178*****35</td>
                  <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                  <td><span class="status_dispute">On-Dispute</span></td>

                  </tr>     
              </tbody>
            </Table>
          </Card>
        </Tab.Pane>

          <Tab.Pane eventKey="dispute">
            <Card className="transation_history_table">
              <Table>
                  <thead>

                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Amount</th>
                      <th></th>
                      <th>To/From</th>
                      <th>Created At</th>
                      <th>Status</th>
                    </tr>

                  </thead>
                  <tbody>

                    <tr>
                      <td>1</td>    
                      <td>BuyCat</td>
                      <td>80 ETH</td>
                      <td><span class="buy">Buy</span></td>
                      <td>0x178*****35</td>
                      <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                      <td><span class="status_dispute">On-Dispute</span></td>
    
                    </tr>

                    <tr>
                      <td>2</td>    
                      <td>NeonXero</td>
                      <td>30 ETH</td>
                      <td><span class="buy">Buy</span></td>
                      <td>0x178*****35</td>
                      <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                      <td><span class="status_dispute">On-Dispute</span></td>

                    </tr>

                  </tbody> 

              </Table>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="canceled">
            <Card className="transation_history_table">
              <Table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th>To/From</th>
                    <th>Created At</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>    
                    <td>BuyCat</td>
                    <td>80 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_active">Active</span></td>

                  </tr>

                    <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>

                  </tr>

                    
                    
                </tbody>
              </Table>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="completed">
            <Card className="transation_history_table">
              <Table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th></th>
                    <th>To/From</th>
                    <th>Created At</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td>1</td>    
                    <td>BuyCat</td>
                    <td>80 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_active">Active</span></td>

                  </tr>

                  <tr>
                    <td>2</td>    
                    <td>NeonXero</td>
                    <td>30 ETH</td>
                    <td><span class="buy">Buy</span></td>
                    <td>0x178*****35</td>
                    <td><h4>03/27/2021</h4><small>03:45PM</small></td>
                    <td><span class="status_dispute">On-Dispute</span></td>

                  </tr>    
                </tbody>
              </Table>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      <Pagination>
        <Pagination.First onClick={firstPage} />
        <Pagination.Prev onClick={previousPageData}/>
        <Pagination.Item>{1}</Pagination.Item>
        of
        <Pagination.Item>{Pages}</Pagination.Item>
        <Pagination.Next onClick={nextPageData} />
        <Pagination.Last onClick={lastPage}/>
      </Pagination>
    </Card>            
  )
}