import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Employees from "./pages/employees/Employees"
import LeaveRequest from "./pages/leave_request/LeaveRequest"
import Login from "./pages/login/Login"
import Payroll from "./pages/payroll/Payroll"
import Reports from "./pages/reports/Reports"
import Requirement from "./pages/requirement/Requirement"
import { useContext } from "react"
import { AuthContext, AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./routes/Routes"


const AppRoutes = () =>  {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={ isAuthenticated ?  <Navigate to = "/"/> : <Login/> } /> 
                    <Route element = {<ProtectedRoute/>} >
                        <Route path="/" element={<Home />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/leaverequest" element={<LeaveRequest />} />
                        <Route path="/payroll" element={<Payroll />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/requirement" element={<Requirement />} />
                    </Route >
                </Routes>
            </BrowserRouter>
        </>
    );
};

const App = () =>{
    return(
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    )
}

export default App;
