import './styles.scss'
import event1 from "../../assets/event1.png"
import event2 from "../../assets/event2.png"
import event3 from "../../assets/event3.png"
import new1 from "../../assets/new1.png"
import new2 from "../../assets/new2.png"
import new3 from "../../assets/new3.png"

export function News(){


    return(
        <>
            <section id="news">
                <div className="events">
                    <div className="title">
                        <div>
                            <h3>Eventos</h3>
                            <div className="line"></div>
                        </div>
                        <a href="#0">Ver mais</a>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img src={event1} alt="" />
                            <div>
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                                <h5>xx/xx/xx</h5>
                                <h5><span>xxh - xxh</span></h5>
                            </div>
                        </div>
                        <div className="card">
                            <img src={event2} alt="" />
                            <div>
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                                <h5>xx/xx/xx</h5>
                                <h5><span>xxh - xxh</span></h5>
                            </div>
                        </div>
                        <div className="card">
                            <img src={event3} alt="" />
                            <div>
                                <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                                <h5>xx/xx/xx</h5>
                                <h5><span>xxh - xxh</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="title">
                        <div>
                            <h3>Notícias</h3>
                            <div className="line"></div>
                        </div>
                        <a href="#0">Ver mais</a>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <img src={new1} alt="" />
                            <div>
                                <h5>xx/xx/xx</h5>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium volutpat iaculis. Duis sit amet nisi condimentum lacus ultricies cursus. Sed mollis ultricies erat vitae consequat.</h4>
                                <button>Ler mais</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={new2} alt="" />
                            <div>
                                <h5>xx/xx/xx</h5>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium volutpat iaculis. Duis sit amet nisi condimentum lacus ultricies cursus. Sed mollis ultricies erat vitae consequat.</h4>
                                <button>Ler mais</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={new3} alt="" />
                            <div>
                                <h5>xx/xx/xx</h5>
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium volutpat iaculis. Duis sit amet nisi condimentum lacus ultricies cursus. Sed mollis ultricies erat vitae consequat.</h4>
                                <button>Ler mais</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}