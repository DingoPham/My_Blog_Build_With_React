import '../assets/Style/Footer.css';
import ToTopFunc from './other-function/ToTopFunction';

const Foot = () =>{
    return(
        <main className="flex foot tx-c flex-column foot-a-c">
            <div className='p-2'>
                <p>If you have any questions, write to me via my gmail:</p>
                <p className="f-30 ">pencibambo@gmail.com</p>
            </div>
            <ToTopFunc />
        </main>
    )
}

export default Foot;