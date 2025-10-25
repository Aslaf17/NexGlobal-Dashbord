import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Employees from "./pages/employees/Employees"
import LeaveRequest from "./pages/leave_request/LeaveRequest"
import Login from "./pages/login/Login"
import Payroll from "./pages/payroll/Payroll"
import Reports from "./pages/reports/Reports"
import Requirement from "./pages/requirement/Requirement"
import Navbar from "./components/Navbar"


function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/Leaverequest" element={<LeaveRequest />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/payroll" element={<Payroll />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/requirement" element={<Requirement />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
