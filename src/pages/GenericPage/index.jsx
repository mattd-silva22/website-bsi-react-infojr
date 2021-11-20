import {MainHeader} from "../../components/MainHeader"
import coneImg from "../../assets/cone.svg"
import Modal from "react-modal"
import "./styles.scss";
import { useState } from "react";
import {Footer} from "../../components/Footer"

export function GenericPage(props) { 

    const [ isRickModalOpen , setIsRickModalOpen] = useState(false)
    
    const uGotRickRolled = ()=>{

        setIsRickModalOpen(true)
    }

    return(
        <>
            <MainHeader selectedPage={props.selectedPage}/>
            <div id="generic-page">
                <div id="generic-page-container">
                   
                   <div id="construction-info">
                        <img src={coneImg} alt="" />

                        <h2>Pagina em construção</h2>

                        <button id="back-brn-test" onClick={uGotRickRolled}>Volta</button>

                        
                   </div>
                </div>

                <Modal
                isOpen={isRickModalOpen} 
                onRequestClose={()=>setIsRickModalOpen(false)}
            >
                            
                <h1 className="rick rainbow-text"> U JUST GOT RICK-ROLLED! </h1>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BT9h5ifR1tY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal>
            

            </div>
            <Footer></Footer>
            

            

            
        </>
    )
}