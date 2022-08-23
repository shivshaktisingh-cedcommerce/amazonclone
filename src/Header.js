import React,{useEffect} from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UserContext } from './Mycontext';
import {useContext} from "react";
import LogoutIcon from '@mui/icons-material/Logout';
function Header(){
    const obj=useContext(UserContext);
    const logout=()=>{
        obj.setloggedin(false);
    }
    useEffect(()=>{
        return
        obj.setloggedin(false);
    },[obj.loggedin])
    return(
        <>
        <nav className='header'>
            <img className='header_logo' src='https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png' alt='img'/>
            <Link to="/" className="header_link">
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello</span>
                <span className='header_optionLineTwo'><span><i class="fa fa-map-marker" aria-hidden="true"></i> </span>Select Your address</span>
            </div>
            </Link>
            <div className='header_search'>
                <input type="text" className='header_searchInput'/>
                <SearchIcon className='header_searchIcon'/>
            </div>
            <div className='link_div'>
            {obj.loggedin === true ? <Link to="/" className="header_link">
            <div className='header_option'>
                <span className='header_optionLineTwo'>{obj.userDetail.name}</span>
            </div>
            </Link> :
            <Link to="login" className="header_link">
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello, User</span>
                <span className='header_optionLineTwo'>Sign In</span>
            </div>
            </Link>}
            {/*  */}
            {obj.loggedin === true ?<Link to="/checkout" className='header_link'>
                <div className='header_optionBasket'>
                <span className="badge">{obj.product.length}</span>
                    <ShoppingCartIcon sx={{color:"white"}}/>
                </div>
            </Link> :
            <Link to="/" className="header_link">
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            </Link>}
            {/*  */}
        
            {obj.loggedin === true ?<Link to="/" className='header_link'>
                <div className='header_option'>
                <span className='header_optionLineTwo'> <LogoutIcon onClick={logout}/></span> 
                </div>
            </Link> :
            <Link to="/checkout" className='header_link'>
                <div className='header_optionBasket'>
                <span className="badge">{obj.product.length}</span>
                    <ShoppingCartIcon sx={{color:"white"}}/>
                </div>
            </Link>}
            </div>
        </nav>
        <div class="topnav">
            <a class="active" href="#home">&#9776; All</a>
            <a href="#news">Best Sellers</a>
            <a href="#contact">Today's Deals</a>
            <a href="#contact">Mobiles</a>
            <a href="#contact">Customer Service</a>
            <a href="#contact">Books</a>
            <a href="#about" class="split">Shopping made easy | Download the app</a>
        </div>
        </>
    )
}
export default Header;
