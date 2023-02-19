import './App.scss';
import Index from './pages/airdrop/Index';
import List from './pages/list/Index';
import Item from './pages/item/Index';
import Menu from './Components/Navbar/Index';
import Footer from './Components/Footer/Index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AirdropForm from './pages/Airdrop_2';
import ExistingAirdrop from './pages/Existing Airdrop';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<AirdropForm />} />
        <Route path="/existing_airdrop" element={<ExistingAirdrop />} />
        <Route path="/createdrop" element={<AirdropForm />} />
      </Routes>
    </>


  );
}

export default App;
