import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import en from "../../images/en.png";
import { Link } from "react-router-dom";
import './Navbar.scss'
import Cart from "../Cart/Cart";



const Navbar = () => {
  const [open, setOpen] = useState(false)
  
  return (

    <div className="navbar">
      <div className="wrapper">


        {/* left */}
        <div className="left">
          <div className="item">
            <img src={en} />
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Child</Link>
          </div>
        </div>

        {/* center */}
        <div className="center">
          <div className="center">
            <Link className="link" to="/">LAMASTORE</Link>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={()=> setOpen(!open) } >
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}

    </div>
  );
};

export default Navbar;
