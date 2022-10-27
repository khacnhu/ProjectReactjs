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
import {Verifyemail} from "./components/Verifyemail/Verifyemail";
import { Notfound } from './components/NotFound/Notfound';
import {Resetpassword} from "./components/ResetPassword/Resetpassword";
import {ChangePassword} from "./components/ChangePassword.jsx/ChangPassword";
import {Set} from "./components/Set/Set";

//change background dark light
import "./style/dark.scss";

//redux
import {useSelector} from "react-redux";
import {Notification} from "./pages/Notification/Notification";


function App() {

  // const dispatch = useDispatch()
  const {theme} = useSelector((state) => state.theme) 
  console.log(theme)


  return (
    <div className= {theme ? "appTheme" : "app"} >
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HOME/>}/>
            
            <Route path = "login" element={<Login/>} />
            <Route path = "register" element = {<Register/>} />
            <Route path = "verifyEmail" element = {<Verifyemail/>} />
            <Route path = "resetpassword" element = {<Resetpassword/>} />
            <Route path = "changepassword" element = {<ChangePassword/>} />
            <Route path = "settings" element = {<Set/>} />
            <Route path = "notification" element = {<Notification/>}  />
            
            <Route path ="users" >
              <Route index element={<List/>}/>
              <Route path = "userId" element={<Single/>} />
              <Route path = "new" element={<New/>} />
            </Route>

            <Route path ="products" >
              <Route index element={<Product/>}/>
              <Route path = ":productId" element={<InforProduct/>} />
            </Route>

          </Route>
          <Route path = "*" element = {<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
