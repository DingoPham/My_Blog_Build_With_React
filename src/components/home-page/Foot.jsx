import '../../assets/Style/Footer.css';
import AnimatedContent from '../other-function/AnimatedContent';
import { useTranslation } from '../other-function/TranslationList';

const Foot = () =>{
    const {translations, language} = useTranslation();
    return(
        <div className="flex foot tx-c flex-column">
            <AnimatedContent>
            <div className='p-2 flex flex-column'>
                <p>{translations[language].footer}</p>
                <p className="f-30 flex space-between">pencibambo@gmail.com
                </p>
            </div>
            </AnimatedContent>
        </div>
    )
}

export default Foot;