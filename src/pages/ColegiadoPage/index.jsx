import {MainHeader} from "../../components/MainHeader"
import BannerImg from "../../assets/banner-cole.png"
import backgroundmobile from "../../assets/imgbackcol.png"
import okImg from "../../assets/ok.svg"
import "./styles.scss";
import { StaffCard } from "../../components/StaffCard";
import { useState , useEffect} from "react";

import { api } from "../../services/axios";

import {Footer} from "../../components/Footer"

export function ColegiadoPage() {



    const [nameList , setNameList] = useState({})
    const[selectedDepartament , setSelectedDepartament] = useState("two")

    useEffect(() => {
        api
          .get("/name-list/9")
          .then((response) => setNameList(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, [selectedDepartament]);

     const handleChangeDepartament = (dep)=>{
        setNameList({})
        setSelectedDepartament(dep)
      }


      
     


      //let tempName = ["Laryssa Quinaz","José Galindo","Natacha Curado","Josias Mansilha","Oriana Bessa","Melânia Silvestre","Mílton Cavaco","Kayden Mateus","Lourenço Cartaxo"]
      
      let tempName = nameList


      


    return(
        <>
            <MainHeader selectedPage="colegiado"/>

            <picture id="colegiado-banner">
                    <source media="(max-width:880px)" srcSet={backgroundmobile} />
                    <img src={BannerImg} alt=""></img>
            </picture>


            

            <div id="colegiado-page">
                <div id="colegiado-page-container">

                    

                    <h1 id="colegiado-title">Colegiado</h1>

                    
                    <div id="colegiado-info-area">
                        <div id="staff-top-area">
                            <nav>

                                <h1>Filtrar por departamento</h1>
                                <ul>

                                    <li 
                                        className={selectedDepartament === "one"? "selected" : ""} 
                                        onClick={()=> handleChangeDepartament("one")}
                                    > 

                                        <img src={okImg} alt="" /> 
                                        <p>Departamento 1 </p>

                                    </li>

                                    <li 
                                        className={selectedDepartament === "two"? "selected" : ""}  
                                        onClick={()=> handleChangeDepartament("two")}
                                    > 
                                        <img src={okImg} alt=""/> 
                                        <p>Departamento 2 </p>

                                    </li>

                                    <li 
                                        className={selectedDepartament === "three"? "selected" : ""}  
                                        onClick={()=> handleChangeDepartament("three")}
                                    > 

                                        <img src={okImg} alt="" /> 
                                        <p>Departamento 3 </p>

                                    </li>

                                </ul>
                            </nav>

                            <div className="main-staff">
                                
                                <h1 className="staff-title-center">Nossa Equipe</h1>
                                <StaffCard name={tempName[0]} ocupation="Coordenador"/>
                                
                            </div>
                            
                            
                            

                    </div>

                    
                        <h1 className="staff-title-left">Nossos Mestres</h1>

                        <div className="staff-row">
                            <div className="staff-row-section">
                            <StaffCard name={tempName[1]} ocupation="Mestre"/>  <StaffCard name={tempName[2]} ocupation="Mestre"/>
                            </div>

                            <div className="staff-row-section">
                            <StaffCard name={tempName[3]} ocupation="Mestre"/>  <StaffCard name={tempName[4]} ocupation="Mestre"/>
                            </div>
                             
                        </div>

                        <h1 className="staff-title-left">Nossos Professores</h1>

                        <div className="staff-row">

                            <div className="staff-row-section">
                                <StaffCard name={tempName[5]} ocupation="Professor"/>  <StaffCard name={tempName[6]} ocupation="Professor"/>
                            </div>

                            <div className="staff-row-section">
                                <StaffCard name={tempName[7]} ocupation="Professor"/>  <StaffCard name={tempName[8]} ocupation="Professor"/>
                            </div>
                            
                        </div>

                       

                    

                        

                    </div>
                </div>
            </div>

            <Footer></Footer>

            
        </>
    )
}