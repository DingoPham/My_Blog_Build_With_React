import '../../assets/Style/Footer.css';
import AnimatedContent from '../other-function/AnimatedContent';

const Foot = () =>{
    return(
        <div className="flex foot tx-c flex-column">
            <AnimatedContent>
            <div className='p-2'>
                <p>If you have any questions, write to me via my gmail:</p>
                <p className="f-30 ">pencibambo@gmail.com</p>
            </div>
            </AnimatedContent>
        </div>
    )
}

export default Foot;