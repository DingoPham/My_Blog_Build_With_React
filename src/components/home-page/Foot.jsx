import '../../assets/Style/Footer.css';
import AnimatedContent from '../other-function/AnimatedContent';
import ThemeSwitch from '../other-function/ThemeSwitch';

const Foot = () =>{
    return(
        <div className="flex foot tx-c flex-column">
            <AnimatedContent>
            <div className='p-2 flex flex-column'>
                <p>If you have any questions, write to me via my gmail:</p>
                <p className="f-30 flex space-between">pencibambo@gmail.com
                <div className='p-1'>
                    <ThemeSwitch />
                </div>
                </p>
            </div>
            </AnimatedContent>
        </div>
    )
}

export default Foot;