import { PieChart } from '@mui/x-charts/PieChart';
import { useState, useEffect } from 'react';
import axios from 'axios';
const  BasicPie=()=> {
  const [mydata, setMydata]= useState([]);
  const [mydata1, setMydata1]= useState([]);
  const [uid, setUid]=useState();

    useEffect(()=>{
         let usrid=window.localStorage.getItem("userid");
         setUid(usrid);
    }, []);

    useEffect(()=>{
       loadData();
    }, [uid])

  const loadData=()=>{
    let api="http://localhost:8000/transactions/usertotalexpenses";
    axios.post(api, {id:uid}).then((res)=>{
        setMydata(res.data.expData);
        setMydata1(res.data.ernData);
        console.log(res.data);
    })
  }
  let totExp=0;
  let totErn=0;
  mydata.map((key)=>{     
           totExp+=key.amount;
  })

  mydata1.map((key)=>{  
    totErn+=key.amount;
})

return (
   <>
    <h1> Your Expense/Earnings Graphical Analysis</h1>
    <h3> Total Earning : {totErn} </h3>
    <h3> Total Expenses : {totExp} </h3>
    <h3> Differences : {totErn-totExp<=0? <span style={{color:"red"}}> {totErn-totExp} </span> : 
     <span  style={{color:"green"}}> {totErn-totExp} </span> }</h3>
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: totExp, label: 'Expenses' },
          { id: 1, value: totErn, label: 'Earnings' },
        ],
      },
    ]}
    width={400}
    height={200}
  />
  </>
  );
}
export default BasicPie;