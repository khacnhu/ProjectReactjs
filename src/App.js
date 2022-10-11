import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HOME from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { List } from './pages/List/List';
import { Single } from './pages/Single/Single';
import { New } from './pages/New/New';
import { Product } from './components/Product/Product';
import { InforProduct } from './components/InforProduct/InforProduct';
import { Register } from './pages/Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HOME/>}/>
            
            <Route path = "login" element={<Login/>} />
            <Route path = "register" element = {<Register/>} />
            
            <Route path ="users" >
              <Route index element={<List/>}/>
              <Route path = "userId" element={<Single/>} />
              <Route path = "new" element={<New/>} />
            </Route>

            <Route path ="products" >
              <Route index element={<Product/>}/>
              <Route path = "inforProduct" element={<InforProduct/>} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
