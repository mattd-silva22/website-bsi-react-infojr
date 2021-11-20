import "./styles.scss";
import searchIcon from "../../assets/coolicon.svg"
export function RespSearchBar(props) {

    return(
        <div id="resp-search-bar" className={ props.isActive ? "active" : ""}>
            <div id="resp-search-bar-container">
                    <div id="search-bar-area">
                        <input
                            placeholder="Buscar"
                        />
                        <img src={searchIcon}/>
                        
                        
                    </div>
            </div>
        </div>
    )
}