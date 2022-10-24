import React from 'react';
import "./navbar.scss";
// import changetheme from "./"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {changetheme} from "../../featureRedux/slice/Theme/themeSlice"

export const Navbar = () => {
  
  let {theme} = useSelector((state) => state.theme) 

  const dispatch = useDispatch()

  // useEffect(()=>{
  //   // document.documentElement.dataset.theme = theme
  //   let theme = localStorage.setItem("theme", theme)
  // }, [theme])

  const handleChange = () => {
    const next = theme === false ? true : false
    // eslint-disable-next-line no-undef
    dispatch(changetheme(next))

  }

  // const [theme, setTheme] = useState(false)

  // const handleChange = () => {
  //   setTheme(!theme)
  // }

  return (
    <div className = "navbar">
      <div className = "wrapper"> 
          <div className = "search">
              <input type="text" placeholder='SEARCH.....' />
              <SearchOutlinedIcon />

          </div>

          <div className="items">
              <div className="item">
                  <LanguageOutlinedIcon className = "icon" />
                  English
              </div>

              <div className="item">
                <DarkModeOutlinedIcon
                  className="icon"
                  onClick = {()=>handleChange()}
                />
              </div>

            <div className="item">
              <FullscreenExitOutlinedIcon className="icon" />
            </div>

            <Link to = "/notification" style = {{textDecoration: "none"}}>
              <div className="item">
                <NotificationsNoneOutlinedIcon className="icon" />
                <div className="counter">1</div>
              </div>
            
            </Link>

            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <div className="counter">2</div>
            </div>

            <div className="item">
              <ListOutlinedIcon className="icon" />
            </div>

            <div className = "item" >
                <img 
                  src = {"/images/anhsao.jpg"}
                  alt = "avatar"
                  className = "avatar"
                />
            </div>

            <div className = "item" >
              <Link to = "/login" className = "loginNavbar" >Login</Link>
              <Link to = "/register" className = "registerNavbar" >Register</Link>
            </div>

          </div>

      </div>
    </div>
  )
}



export default Navbar