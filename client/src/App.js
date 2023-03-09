
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Box from "./pages/Box.js"
import DashboardLayout from "./layout/DashboardLayout.js";
import Bill from "./pages/Bill.js";
import Customers from "./pages/Customer.js"
import Statistics from "./pages/Statistics/Statistics.js"
import AuthLayout from "./layout/AuthLayout.js";
import Login from "./pages/auth/Login.js";
import Register from "./pages/auth/Register.js"
function App() {
  return (
    <>

      <HashRouter >
        <Routes>
          <Route path="/" element={<DashboardLayout />} >
                <Route index element={<HomePage />} />
                <Route path="box" element={<Box />} />
                <Route path="invoice" element={<Bill />} />
                <Route path="customers" element={<Customers />} />
                <Route path="statistics" element={<Statistics />} />
          </Route>


          <Route path="auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
          </Route>

        </Routes>

      </HashRouter>

    </>

  );
}

export default App;
