import { Link } from "react-router-dom"

function HeadTitle(){
    return(
        <header>
            <div className="flex w-p-100 custom-bg-1 h-60 items-center justify-center">
                <Link to='/'>
                    <p className="f-30">DINGOPHAM</p>
                </Link>
            </div>
        </header>
    )
}

export default HeadTitle