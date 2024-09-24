import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import spnimage from "../images/spinner.gif";

const DisplayEarning=()=>{
    const [mydata, setMydata] =useState([]);
    const [uid, setUid]=useState();
    const [isLoading, setIsloading] = useState(true);



    useEffect(()=>{
         let usrid=window.localStorage.getItem("userid");
         setUid(usrid);
    }, []);

    useEffect(()=>{
       loadData();
    }, [uid])

    const loadData=()=>{
        let api="http://localhost:8000/transactions/displayearning";

        axios.post(api, {id:uid}).then((res)=>{
            setMydata(res.data);
            setTimeout(()=>{
              setIsloading(false);
            }, 400);
            
        })
    }

    let sno=0;
    let totalAmount=0;
 const ans=mydata.map((key)=>{
       sno++;
       totalAmount=totalAmount+key.amount;
     return(
        <>
          <tr>
             <td>{sno}</td>
             <td> {key.source} </td>
             <td> {key.date} </td>
             <td> {key.amount} </td>
          </tr>
        </>
     )
 })

    return(
        <>

          

          {isLoading? (
           <center>
           <img src={spnimage} style={{width:"70px", marginTop:"100px"}} />
           </center>

          ) : (
          <>
            <h1> Show Total Earnings</h1>
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Source</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {ans}
  
        <tr>
          <th colspan="3"> <h4> Total Earnings Amount :</h4> </th>
          <th> {totalAmount} </th>
        </tr>
        </tbody>
        </Table>
</>
          )}
          

        </>
    )
}

export default DisplayEarning;