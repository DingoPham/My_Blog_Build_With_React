import '../assets/for-index/Header.css';
import '../assets/StyleMain.css';

const Navbar = () => {
    return (
        <div className="navbar p-1">
            <div className='flex space-around navbar-container tx-c'>
                <a href='index.html' className=''>DINGOPHAM</a>
                <div className='flex gap'>
                    <a href="#aboutMe">ABOUT ME</a>
                    <a href="#thisWebsite">THIS WEBSITE</a>
                    <a href="#desire">DESRIRE</a>
                    <a href="#mySkills">MY SKILLS</a>
                    <a href="#otherThings">OTHER THINGS</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;