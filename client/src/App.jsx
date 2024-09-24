import {  BrowserRouter,  Routes,  Route} from 'react-router-dom';  
import Home from "./Components/Home";
import UserDashBoard from './Components/UserDashBoard';
import Earning from './Components/Earning';
import Expense from './Components/Expense';
import DisplayEarning from './Components/DisplayEarning';
import BasicPie from './Components/PieChart';
import DisplayExpenses from './Components/DisplayExpenses';
import UserReport from './Components/UserReport';
const App=()=>{
  return(
    <>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}  />
         </Routes>
          <Routes>
             <Route path='/dashboard' element={<UserDashBoard/>}>
                 <Route path='earning' element={<Earning/>}/>
                 <Route path='expense' element={<Expense/>}/>
                 <Route path='displayern' element={<DisplayEarning/>}/>
                 <Route path='displayexpe' element={<DisplayExpenses/>}/>
                 <Route path="userreport" element={<UserReport/>}/>
                <Route path='basicpie' element={<BasicPie/>}/> 
             </Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;