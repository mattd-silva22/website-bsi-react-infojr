import StaffImg from "../../assets/defaultPhoto.png"
import "./styles.scss"
export function StaffCard(props) {

    const formatEmail = (name)=>{   
        
        let email = name.split(" ")[1].toLowerCase()+"321@ufba.com"

        return email
    }
    return (
        <div className="staff-card">
            <img src={StaffImg} alt="" />
            <p className="staff-name"> {props.name? props.name : "Nome"} </p>
            <div className="text-area-staff">
                <p>{props.ocupation}</p>
                <p>{props.name? formatEmail(props.name): "email@ufba.br"}</p>
            </div>
        </div>
    )
}