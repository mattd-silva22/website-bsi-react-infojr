import {MainHeader} from "../../components/MainHeader"
import {AboutUs} from "../../components/AboutUs"
import {News} from "../../components/News"
import {CourseSection} from "../../components/CourseSection"
import {Footer} from "../../components/Footer"

export function HomePage(){

    return(
        <>
            <MainHeader selectedPage="inicio"/>
            <AboutUs></AboutUs>
            <News></News>
            <CourseSection></CourseSection>
            <Footer></Footer>
        </>
    )
}