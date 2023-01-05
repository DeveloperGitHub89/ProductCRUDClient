import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { AddProduct } from './components/AddProduct';
import { ProductsList } from './components/ProductsList';

function App() {
  return (
    <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add-product' element={<AddProduct/>}></Route>
          <Route path='/products-list' element={<ProductsList/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
