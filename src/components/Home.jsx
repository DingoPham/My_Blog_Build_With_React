import EveryDes from "./home-page/EveryDes"
import Foot from "./home-page/Foot"
import Navbar from "./home-page/Navbar"
import ToTopFunc from "./other-function/ToTopFunction"

function Home() {
    return(
        <main>
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
        </main>
    )
}

export default Home;