import EveryDes from "./home-page/EveryDes"
import Foot from "./home-page/Foot"
import Navbar from "./home-page/Navbar"
import ToTopFunc from "./other-function/ToTopFunction"

const Home = () => {
    return(
        <div>
            <header>
                <Navbar />
            </header>
            <section>
                <EveryDes />
            </section>
            <footer>
                <Foot />
                <ToTopFunc />
            </footer>
        </div>
    )
}

export default Home;