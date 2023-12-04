import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './compo/AddEmployee';
import EmployeeList from './compo/EmployeeList';
import Navbar from './compo/Navbar';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />}></Route>
          <Route path="/addEmployee" element={<AddEmployee />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}


export default App;
