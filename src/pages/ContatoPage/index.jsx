import {MainHeader} from "../../components/MainHeader";
import {Footer} from "../../components/Footer";
import "./styles.scss";
import icontel from "../../assets/icon-tel.svg";
import iconemail from "../../assets/icon-email.svg";
import iconlocal from "../../assets/icon-local.svg";
import map from "../../assets/map.png";
import mapmobile from "../../assets/map-mobile.png";
import {api} from "../../services/axios";
import React, {useState} from "react";

export function ContatoPage() {

    const [ userName , setUserName] = useState('')
    const [ userEmail , setUserEmail] = useState('')
    const [ userPhone , setUserPhone] = useState('')
    const [ userMessage , setUserMessage] = useState('')

    function handleInputChanges(e) {
        if (e.target.name === 'name') {
            setUserName(e.target.value);
        } else if (e.target.name === 'email') {
            setUserEmail(e.target.value);
        } else if (e.target.name === 'phone') {
            setUserPhone(e.target.value);
        } else if (e.target.name === 'message') {
            setUserMessage(e.target.value);
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();

        const userData = {
            name: userName,
            email: userEmail,
            phone: userPhone,
            message: userMessage
        };


        api.post('/send', userData).then( res => {
            if(res.statusCode = 200) {
            alert('Menssagem recebida pelo nosso servidor ! obrigado pelo contato')
            }
        })
        .catch(err => {
            alert(err);
        })

        setUserName("");
        setUserEmail("");
        setUserPhone("");
        setUserMessage("");
    }

    return(
        <>
        <MainHeader selectedPage="contato"></MainHeader>
        <div id="contato-page">
            <div className="form-content">
                <div className="title">
                    <h1>Entre em contato,</h1>
                    <h3>Como podemos te ajudar?</h3>
                </div>
                <div className="form">
                    <form action="" onSubmit={(e) => handleFormSubmit(e)}>
                        <label for="text">Nome</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={handleInputChanges} minlength="3" pattern="[a-zA-Z ]*"  value={userName} required></input>

                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Ex:nome@email.com" onChange={handleInputChanges} minlength="5"value={userEmail} required></input>

                        <label for="phone">Telefone</label>
                        <input type="phone" id="phone" name="phone" placeholder="Ex:(xx)xxxxx-xxxx" onChange={handleInputChanges} value={userPhone} pattern="[0-9]{11}" required></input>

                        <label for="message">Mensagem</label>
                        <textarea id="message" name="message" placeholder="Digite sua mensagem" onChange={handleInputChanges} value={userMessage} required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <div className="form-info">
                <div className="info">
                    <img src={icontel} alt="" />
                    <h5>(71)3283-6164</h5>
                </div>
                <div className="info">
                    <img src={iconemail} alt="" />
                    <h5>Ic@ufba.br</h5>
                </div>
                <div className="info">
                    <img src={iconlocal} alt="" />
                    <h5>Avenida Adhemar de Barros,<br></br> s/n - Campus de Ondina</h5>
                </div>
                <div className="map">
                    <h4>Nossa localização:</h4>
                    <picture>
                        <source media="(max-width:840px)" srcSet={mapmobile} />
                        <img src={map} alt=""></img>
                    </picture>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}
