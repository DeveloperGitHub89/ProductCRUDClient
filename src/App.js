import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { AddProduct } from './components/AddProduct';

function App() {
  return (
    <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add-product' element={<AddProduct/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
