import EveryDes from "./home-page/EveryDes"
import Foot from "./home-page/Foot"
import Navbar from "./home-page/Navbar"
import FunctionContainer from "./other-function/FunctionContainer"

function Home() {
    return(
        <main>
            <header>
                <Navbar />
            </header>
            <section>
                <EveryDes />
                <FunctionContainer />
            </section>
            <footer>
                <Foot />
            </footer>
        </main>
    )
}

export default Home;