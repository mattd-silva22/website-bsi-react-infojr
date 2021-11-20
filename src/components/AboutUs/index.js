import './styles.scss'
import background from "../../assets/aboutus-background.png"
import backgroundmobile from "../../assets/aboutus-background-mobile.png"
import star from "../../assets/star.svg"

export function AboutUs(){


    return(
        <>
            <section id="aboutus">
                <picture>
                    <source media="(max-width:768px)" srcSet={backgroundmobile} />
                    <img src={background} alt=""></img>
                </picture>
                <div className="content">
                    <div className="line"></div>
                    <div className="text1">
                        <h2>Sobre Nós</h2>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, neque eget volutpat consequat, metus urna varius magna, at feugiat libero lorem ac dolor. Curabitur dictum consequat augue a varius. Pellentesque eu volutpat arcu. Vestibulum vel dignissim augue, dictum volutpat dolor. Maecenas urna eros, placerat in metus at, ullamcorper scelerisque sem. Vivamus ullamcorper convallis magna, eget tincidunt eros blandit ac. Nunc vitae nulla enim.</h4>
                    </div>
                    <div className="line"></div>
                    <div className="text2">
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div>
                            <h3>Curso 5 estrelas, entre os 7 melhores do país.</h3>
                            <h5>de acordo com o Guia da Faculdade 2020 do Estadão</h5>
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
            </section>
        </>
    )
}