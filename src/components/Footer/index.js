import './styles.scss'
import facebookIcon from "../../assets/icons/face.svg";
import instagramIcon from "../../assets/icons/insta.svg";
import youtubeIcon from "../../assets/icons/yb.svg";
import logo from "../../assets/logo-white.png";
import {Link} from "react-router-dom";

export function Footer(){
    const today = new Date();

    return(
        <>
            <footer>
                <div className="list">
                    <ul>
                        <h4>Reserva de Espaço</h4>
                        <li><a href="#0">Reserva de Sala</a></li>
                        <li><a href="#0">Público UFBA</a></li>
                        <li><a href="#0">Público Externo</a></li>
                        <li><a href="#0">Normas e regimentos</a></li>
                    </ul>
                    <ul>
                        <h4>Website</h4>
                        <li><a href="#0">Acessibilidade</a></li>
                        <li><a href="#0">Sobre nós</a></li>
                        <li><a href="#0">Privacidade</a></li>
                    </ul>
                    <ul>
                        <h4>IC-UFBA</h4>
                        <li><a href="#0">Localização e mapa</a></li>
                        <li><a href="#0">Editais</a></li>
                        <li><a href="#0">Normas e Regimentos</a></li>
                        <li><a href="#0">Gestão</a></li>
                    </ul>
                </div>
                <div className="copy">
                    <div className="logo">
                        <Link to="/"> 
                            <img src={logo}/>
                        </Link>
                        <p>Sistemas da<br></br> Informação</p>
                    </div>
                    <p>Todos os direitos reservados, {today.getFullYear()}</p>
                    <div className="social">
                        <a href="https://www.facebook.com/computacaoufba/"><img src={facebookIcon} alt="" /></a>
                        <a href="https://www.instagram.com/computacaoufba/"><img src={instagramIcon} alt="" /></a>
                        <a href="https://www.youtube.com/channel/UCU6wWvDsc1FaXJRGoaNHwow"><img src={youtubeIcon} alt="" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}