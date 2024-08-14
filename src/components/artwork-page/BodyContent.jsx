import React from "react";
import Pagination from "../other-function/Pagination";


function BodyContent() {
    const images = [
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731012/LuverSummer_lu2zbu.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731014/beReal_cqgat8.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731013/beach_o32ttt.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/jobs_kvhpbj.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731013/shave_htlgxp.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718782954/Luver_rp2by5.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718782932/Itsumi_x_Opheebop_funi1u.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731015/birthday_duij44.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/broodMother_xftfbj.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731011/mySkyKid_p5mnfv.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731013/skyGA2_pgimog.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731012/skyGA1_jwhpsj.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731021/skyTogether2_ivjssc.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731015/skyTogether1_tgwnzc.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731019/hairCut_pmk8ml.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/Gaffie_ydw0zs.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731014/roadToRostok_vw7tet.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731009/commission_cqckpo.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/commission2_cvltlg.jpg",
        "https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718731010/dingo_xxdoj9.jpg"
    ];

    return(
        <div>
            <div className="p-3 m-3 flex over-hidden flex-wrap gap-41">
                <Pagination images={images} itemsPerPage={5}/>
            </div>
        </div>
    );
}

export default BodyContent;