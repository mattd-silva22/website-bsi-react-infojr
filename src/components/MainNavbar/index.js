import {useState} from "react";
import "./styles.scss"
import {Link} from "react-router-dom";
export function MainNavbar(props) {

    const [isSelected , setIsSelected] = useState(props.selectedPage)
    return (
        <nav id="main-navbar">
            <div id="main-navbar-container">
                <ul>

                    <li className={isSelected === "inicio" ? "selected" : ""}>
                        <Link 
                            
                            to="/"
                          
                        >
                            Inicio
                        </Link>
                    </li>

                    <li className={isSelected === "institucional" ? "selected" : ""}>
                        <Link
                            
                            to="/institucional"
                          
                        > 
                            Institucional
                        </Link>
                    </li>

                    <li className={isSelected === "colegiado" ? "selected" : ""}>
                        <Link
                            to="/colegiado"
                            
                           
                        >
                            Colegiado
                        </Link>
                    </li>

                    <li className={isSelected === "regulamento" ? "selected" : ""}>
                        <Link
                            to="/generic"
                       
                        >
                            Regulamento
                        </Link>
                    </li>

                    <li className={isSelected === "contato" ? "selected" : ""}>
                        <Link
                            to="/contato"

                            
                        >
                            Contato
                        
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}