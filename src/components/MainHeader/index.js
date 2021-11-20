
import logoImg from "../../assets/logo_dcc_1 1.svg"
import searchIcon from "../../assets/coolicon.svg"
import { useState } from "react";
import "./styles.scss"
import {Link} from "react-router-dom";
import { MainNavbar } from "../MainNavbar";
import {RespNavbar} from "../RespNavbar";
import {RespSearchBar} from "../RespSearchBar";

export function MainHeader(props) {

    const [ isbtnActive , setIsBtnState] = useState(false)
    const [ isSearchBarActive , setIsSearchBarActive] = useState(false)

    let handleBtnClick= ()=> {
        if(!isbtnActive) {
            setIsBtnState(true)
            document.body.classList.add('scrollock');
        } else {
            setIsBtnState(false)
            document.body.classList.remove('scrollock');
        }
    }

    let handleSearchClick= ()=> {
        if(!isSearchBarActive) {
            setIsSearchBarActive(true)
        } else {
            setIsSearchBarActive(false)
        }
        
    }
    
    return (
        <>
            <header id="main-header">
                <div id="main-header-container">
                    <div id="logo-area"> 
                        <Link to="/"> 
                            <img src={logoImg}/>
                        </Link>
                        
                        <p>
                            Sistemas da <br/>Informação  
                        </p>
                    </div>

                    <div id="search-bar-area">
                        <input
                            placeholder="Buscar"
                        />
                        <img src={searchIcon}/>
                        
                        
                    </div>

                    <div id="resp-btns"> 

                        <img src={searchIcon} id="resp-search-btn" onClick={handleSearchClick}/>

                        <div id="ham-btn" className={`${isbtnActive ? "active" : ""}`} onClick={handleBtnClick}>
                            <div className="ham-btn-bar"></div>
                            <div className="ham-btn-bar"></div>
                            <div className="ham-btn-bar"></div>
                        </div>
                    </div>


                    


                </div>
            </header>
            <RespSearchBar isActive={isSearchBarActive}/>
            <MainNavbar selectedPage={props.selectedPage}/>
            <RespNavbar isActive={isbtnActive} selectedPage={props.selectedPage}/>
            
        </>
    )
    
}