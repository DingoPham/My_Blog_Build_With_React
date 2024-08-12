import { Link } from "react-router-dom"

const HeadTitle = () =>{
    return(
            <div className="flex w-p-100 custom-bg-1 h-60 items-center justify-center">
                <Link to='/'>
                    <p className="f-30">DINGOPHAM</p>
                </Link>
            </div>
    )
}

export default HeadTitle