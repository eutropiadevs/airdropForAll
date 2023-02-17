import './App.scss';
import Index from './pages/airdrop/Index';
import List from './pages/list/Index';
import Item from './pages/item/Index';
import Menu from './Components/Navbar/Index';
import Footer from './Components/Footer/Index';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AirdropForm from './pages/Airdrop_2';

function App() {
  return (
    <>
      <Menu />
      {/* <List /> */}
      {/* <Index /> */}
      <Routes>
        <Route path="/" element={<List />} />
        {/* <Route path ="/createdrop" element={<Index/>} /> */}
        <Route path="/createdrop" element={<AirdropForm />} />
        <Route path="/showItem" element={<Item />} />

      </Routes>
      {/* <Footer /> */}
    </>


  );
}

export default App;
