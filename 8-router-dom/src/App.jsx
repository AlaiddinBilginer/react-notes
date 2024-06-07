import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Header from './Components/Header';
import EmployeesAbout from './Components/EmployeesAbout';
import CompanyAbout from './Components/CompanyAbout';
import ProductDetail from './Pages/ProductDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />}>
          <Route path="employees" element={<EmployeesAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
