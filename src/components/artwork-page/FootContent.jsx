const FootContent = () =>{
    return(
        <footer>
            <div className='flex foot tx-c flex-column'>
                <div className='flex flex-column items-center'>
                    <p className='p-2'>
                        - You can find high quality picture of mine via my Art-size below -
                    </p>
                    <div className="flex">
                        <a href="https://www.deviantart.com/foxtall7">
                            <img src="https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735886/devianart_r2ftvu.png" alt=""/>
                        </a>
                        <a href="https://www.pixiv.net/en/users/42395789">
                            <img src="https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735892/PIXIV_Icon_ryep5t.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FootContent;