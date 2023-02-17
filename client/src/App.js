
import {
  Routes,
  Route,
  HashRouter,
 
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Box from "./pages/Box.js"
function App() {
  return (
    <>

      <HashRouter >
        <Routes>
          <Route index element={<HomePage/>} />

          <Route path="/box" element={<Box/>} />


        </Routes>

      </HashRouter>
     
    </>

  );
}

export default App;
