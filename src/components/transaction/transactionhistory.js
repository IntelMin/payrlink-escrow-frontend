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
  const ItemPerPage=3;
  const [currentpage,setCurrentPage]=useState(1);
  const CreatePage=TotalData/3;
  const Pages = Math.ceil(CreatePage)// Total Pages
  const [range,setRange]=useState({
    StartPoint:0,
    EndPoint:3
  })

  const [LastPageState,setLastPageState]=useState(false)
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
    if(range.EndPoint<TotalData){
      const strt = range.EndPoint;
      const end = range.EndPoint + ItemPerPage;
      setRange({StartPoint: strt, EndPoint: end})
      setData(HistoryData.slice(strt,end));
      setCurrentPage(currentpage+1)
    }
    else{
      setRange({...range, StartPoint: TotalData-TotalData%ItemPerPage, EndPoint: TotalData})
      setData(HistoryData.slice(TotalData-TotalData%ItemPerPage,TotalData));
      setCurrentPage(Pages)
    }
  }
  const previousPageData=()=>{
      console.log(range)

      if(LastPageState===true){
        const end = TotalData-TotalData%ItemPerPage;
        const strt = end - ItemPerPage;
        setRange({...range, StartPoint: strt, EndPoint: end})
        setData(HistoryData.slice(strt,end));
        setLastPageState(false);
      
      }else{
        const strt = range.StartPoint-ItemPerPage;
        const end = range.EndPoint-ItemPerPage;;
        if(range.StartPoint <= 0){
          setRange({...range, StartPoint: 0, EndPoint: ItemPerPage})
          setData(HistoryData.slice(0,ItemPerPage));
        }
        else{
          setRange({...range, StartPoint: strt, EndPoint: end})
          setData(HistoryData.slice(strt,end));
          setCurrentPage(currentpage-1)
        }
      }
  }
  const firstPage=()=>{
      setLastPageState(false);
      setRange({...range, StartPoint: 0, EndPoint: ItemPerPage})
      setData(HistoryData.slice(0,ItemPerPage));
      setCurrentPage(1)
  }

  const lastPage=()=>{
    setRange({...range, StartPoint: TotalData-TotalData%ItemPerPage, EndPoint: TotalData})
    setData(HistoryData.slice(TotalData-TotalData%ItemPerPage,TotalData));
    setCurrentPage(Pages)
    setLastPageState(true)
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

        <Tab.Pane eventKey="pending">
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

          <Tab.Pane eventKey="dispute">
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

          <Tab.Pane eventKey="canceled">
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

          <Tab.Pane eventKey="completed">
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
        </Tab.Content>
      </Tab.Container>

      <Pagination>
        <Pagination.First onClick={firstPage} />
        <Pagination.Prev onClick={previousPageData}/>
        <Pagination.Item>{currentpage}</Pagination.Item>
        of
        <Pagination.Item>{Pages}</Pagination.Item>
        <Pagination.Next onClick={nextPageData} />
        <Pagination.Last onClick={lastPage}/>
      </Pagination>
    </Card>            
  )
}