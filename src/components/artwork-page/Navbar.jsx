import React, {useState} from "react";

import '../../assets/Style/Header.css'
import '../../assets/Style/StyleMain.css'
import '../../assets/Style/Body.css'

import Open from "../other-function/OpenBtn";
import Close from "../other-function/CloseBtn";
import HeadContent from "./HeadContent";
import BodyContent from "./BodyContent";
import FootContent from "./FootContent";

const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () =>{
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('no-scroll');
        }else {
            document.body.classList.remove('no-scroll');
        }
    };


    return (
        <div>
            <div className={`flex transtion-margin-left ${isOpen ? 'navbar-open' : ''}`}>
                <div className="toggle-btn" onClick={toggleNavbar}>
                    {isOpen ? <Close /> : <Open />} 
                </div>
                <div className={`navbar custom-bg-2 navbar-size point-to transtion-left ${isOpen ? 'open' : ''}`}>
                    <div className="flex flex-column gap m-t p-3">
                        <p className="f-30-n tx-c">-Support-</p>
                            <a className="f-25 tx-g transition-a" href="https://www.youtube.com/channel/UCtH0_zKVeXOKO2hiqLoHSrg"> Follow my Youtube!</a>
                            <a className="f-25 tx-g transition-a" href="https://buymeacoffee.com/dingopham763/membership"> Buy me a coffee!</a>
                        <p className="f-30-n tx-c">-More-</p>
                    </div>
                </div>
                <div className="flex-1 transtion-margin-left m-l-250">
                    <HeadContent />
                    <BodyContent />
                    <FootContent />
                </div>
            </div>
        </div>
    )
};

export default Navbar;