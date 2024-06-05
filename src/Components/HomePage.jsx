import Style from "./homepage.module.css"
import Nav from "./Nav"
import MainPage from "./MainPage"
import Footer from "./Footer"

const HomePage = () => {

    

    return (
        <div className={Style.home}>
            <Nav />
            <MainPage />
            <Footer />
        </div>
    )
}

export default HomePage