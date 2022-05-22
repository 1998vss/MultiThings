import "./App.css"
import Navbar from "./components/Navbar/navbar index";
import WalletNinja from "./components/WalletNinja/wallet";
import Initial from "./components/Initial/initial";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Initial/>}/>
        <Route path="/wallet" element={<WalletNinja/>}/>
      </Routes>
    </Router>
  );
}

export default App;
