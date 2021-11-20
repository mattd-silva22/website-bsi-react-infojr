import "./styles.scss";

import facebookIcon from "../../assets/icons/face.svg";
import instagramIcon from "../../assets/icons/insta.svg";
import youtubeIcon from "../../assets/icons/yb.svg";
import {Link} from "react-router-dom";
import {useState} from "react";

export  function RespNavbar(props){
    const [isSelected , setIsSelected] = useState(props.selectedPage)

    function onlockScroll(page) {
        if (isSelected !== page) {
            document.body.classList.remove('scrollock');
        }
    }

    return (
        <nav id="resp-navbar" className={ props.isActive ? "active" : ""}>
            <div id="resp-navbar-container">

                <ul>

                    <li className={isSelected === "inicio" ? "selected" : ""}>
                        <Link 
                            
                            to="/"
                            onClick={() => onlockScroll("inicio")}
                        >
                            Inicio
                            <hr/>
                        </Link>
                    </li>

                    <li className={isSelected === "institucional" ? "selected" : ""}>
                        <Link
                            
                            to="/institucional"
                            onClick={() => onlockScroll("institucional")}
                        > 
                            Institucional
                            <hr/>
                        </Link>
                    </li>

                    <li className={isSelected === "colegiado" ? "selected" : ""}>
                        <Link
                            to="/colegiado"
                            onClick={() => onlockScroll("colegiado")}
                        
                        >
                            Colegiado
                            <hr/>
                        </Link>
                    </li>

                    <li className={isSelected === "regulamento" ? "selected" : ""}>
                        <Link
                            to="/generic"
                            onClick={() => onlockScroll("regulamento")}
                        >
                            Regulamento
                            <hr/>
                        </Link>
                    </li>

                    <li className={isSelected === "contato" ? "selected" : ""}>
                        <Link
                            to="/contato"
                            onClick={() => onlockScroll("contato")}
                            
                        >
                            Contato
                            <hr/>
                        
                        </Link>
                    </li>

                </ul>

                <div id="social-midia-bar">

                    <a  href="https://www.facebook.com/computacaoufba/">
                        <img src={facebookIcon}/>
                    </a>

                    <a href="https://www.instagram.com/computacaoufba/">
                        <img src={instagramIcon}/>
                    </a>

                    <a href="https://www.youtube.com/channel/UCU6wWvDsc1FaXJRGoaNHwow">
                        <img src={youtubeIcon}/>
                    </a>
                </div>
            </div>
        </nav>
    )
}