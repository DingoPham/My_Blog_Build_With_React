import React, {useState} from "react";

import '../../assets/Style/Header.css'
import '../../assets/Style/StyleMain.css'
import '../../assets/Style/Body.css'

import Open from "../other-function/OpenBtn";
import Close from "../other-function/CloseBtn";
import HeadTitle from "./HeadTitle";
import BodyContent from "./BodyContent";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
    setIsOpen(!isOpen);
    };

    return(
        <div className={`flex transtion-margin-left ${isOpen ? 'navbar-open' : ''}`}>
            <div className={`navbar custom-bg-2 navbar-size point-to transtion-left ${isOpen ? 'open' : ''}`}>
                <div className="flex flex-column gap m-t p-3">
                <p className="f-30 tx-c">-Support-</p>
                    <a className="f-25 tx-g transition-a" href="https://www.youtube.com/channel/UCtH0_zKVeXOKO2hiqLoHSrg"> Follow my Youtube!</a>
                    <a className="f-25 tx-g transition-a" href="https://buymeacoffee.com/dingopham763/membership"> Buy me a coffee!</a>
                <p className="f-30 tx-c">-More-</p>
                </div>
            </div>
            <div className="flex-1 transtion-margin-left m-l-250">
                <div className="toggle-btn" onClick={toggleNavbar}>
                    {isOpen ? <Close /> : <Open />} 
                </div>
                <HeadTitle />
                <BodyContent />
            </div>
        </div>
    )
}

export default Navbar;