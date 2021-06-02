import { useState } from 'react';
// import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";
// import { IoIosSearch } from "react-icons/io";
// import Usercontext from '../contexts/UserContext';
import ClickAwayListener from 'react-click-away-listener';
import SearchBox from './SearchBox';

export default function Navbar() {

    // const { user } = useContext(Usercontext);
    // const [search, setSearch] = useState("");
    const [showMenu, setShowMenu] = useState(0);
    const localstorage = JSON.parse(localStorage.user);
    const token = localstorage.token;
    const image = localstorage.user.avatar;

    function toggleMenu() {
        showMenu === 0 ? setShowMenu(1) : setShowMenu(0);
    }
    function deleteLocalStorage(){
        localStorage.removeItem('user');
    }
    return (
        <>
            <Header >
                <Link to='/timeline'>
                    <h1>linkr</h1>
                </Link>
                {/* <SearchBox /> */}
                {/* <Form>
                    <input 
                        type="search" placeholder="Search for people and friends"
                        value={search} onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">
                    <IoIosSearch className="search"/>  
                    </button>            
                </Form> */}
                <div></div>
            </Header>
            <SearchBox />
            <ClickAwayListener onClickAway={() => setShowMenu(0)}>                
                <NavMenu >
                    <Menu direction={showMenu} avatar={image}>
                        <IoIosArrowDown className="arrow" onClick={toggleMenu}/>
                        <div onClick={toggleMenu}></div>
                    </Menu>
                    {showMenu === 1 && 
                    <Links >
                        <Link to='/my-posts'>
                            <h2>My posts</h2>
                        </Link>
                        <Link to='/my-likes'>
                            <h2>My likes</h2>
                        </Link>
                        <Link to='/' onClick={deleteLocalStorage}>
                            <h3>Logout</h3>
                        </Link>
                    </Links>
                    }
                </NavMenu>
            </ClickAwayListener>
        </>
    )
}

const Header = styled.div`
    width: 100%;
    height: 72px;
    padding: 10px 26px 10px 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #151515;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    h1 {
        font-family: 'Passion One', sans-serif;
        font-size: 49px;
        letter-spacing: 2px;
        line-height: 54px;
        color: #fff;
    }

    > div {
        width: 110px;
        height: 53px;
    }

    @media (max-width: 611px){
        padding-left: 17px;

        h1{
            font-size: 45px;
        }
    }
`;

const NavMenu = styled.div`
    width: 132px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
`;

const Menu = styled.div`
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 18px;
    padding-right: 26px;

    .arrow {
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        transform: ${props => props.direction ? "rotateZ(180deg)" : "none"};
        transition: 0.2s;  	
    }

    > div {
        width: 53px;
        height: 53px;
        margin-left: 12px;
        border-radius: 26.5px;
        background-image: url("${props => props.avatar}");
        background-size: cover;
        background-position: center;
        cursor: pointer;
    }
    @media (max-width: 611px){
        > div{
            width: 44px;
            height: 44px;
        }
    }
`;

const Links = styled.div`
    width: 132px;
    height: 109px;
    padding: 17px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 0px 0px 20px;
    background: #171717;
    position: fixed;
    top: 72px;
    right: 0;
    z-index: 10;

    h1, h2, h3 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 2px;
        color: #fff;
    }

    @media (max-width: 611px){
        height: 80px;
        padding: 10px 15px;
        h1,h2,h3{
            font-size: 14px;
            line-height: 18px;
        }
    }
`;

// const Form = styled.form`    
//     position: relative;
//     input {
//         width: 563px;
//         height: 45px;
//         padding: 12px 0px 10px 17px;
//         border: none;
//         border-radius: 8px;
//         background: #FFFFFF;
//         font-size: 19px;
//         line-height: 23px;
//         color: #666;
//         cursor: pointer;
//     }
//     button {
//         height: 43px;
//         border: none;
//         border-radius: 8px;
//         padding: 10px;
//         position: absolute;
//         top: 1px;
//         right: 0;
//         background: #fff;
//     }
//     .search {
//         font-size: 26px;
//         color: #C6C6C6
//     }
//     input::placeholder {
//         color: #C6C6C6;
//     }
//     input:focus, button:focus {
//         border: 0px solid #333;
//         box-shadow: 0 0 0 0;
//         outline: 0;
//     }
// `;




