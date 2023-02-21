
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Box from "./pages/Box.js"
import DashboardLayout from "./layout/DashboardLayout.js";
import Bill from "./pages/Bill";
import Customers from "./pages/Customer.js"
import Statistics from "./pages/Statistics";
function App() {
  return (
    <>

      <HashRouter >
        <Routes>
        <Route path="/" element={<DashboardLayout />} > 
          <Route index element={<HomePage/>} />

          <Route path="/box" element={<Box/>} />
          <Route path="/invoice" element={<Bill/>} />
          <Route path="/customers" element = {<Customers />}  />
          <Route path="/statistics" element = {<Statistics />} />
          </Route>

        </Routes>

      </HashRouter>
     
    </>

  );
}

export default App;
