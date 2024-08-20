import '../../assets/Style/Body.css';
import Assessment from './Assessment';
import BgPicture from './BgPicture';
import AnimatedContent from '../other-function/AnimatedContent';

import { useTranslation } from '../other-function/TranslationList';

import React from 'react';

const EveryDes = () => {
    const {translations, language} = useTranslation();

    return(
        <div>
            <BgPicture />
            <div className='flex flex-column p-6 m-3'>
                    <section id='aboutMe' className='m-b'>
                        <AnimatedContent>
                            <div className='flex flex-reverse'>
                                <p className='f-30 m-2 tx-center'>
                                    {translations[language].aboutMe}
                                </p>
                                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718737294/catYes_vafisx.gif' alt=''/>
                            </div>
                        </AnimatedContent>
                    </section>
                    <section id='thisWebsite' className='m-b'>
                        <AnimatedContent>
                            <div className='flex'>
                                <p className='f-30 m-1 tx-center'>
                                    {translations[language].thisWebsite}
                                </p>
                                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735928/catNo_hdsqiy.gif' alt=''/>
                            </div>
                        </AnimatedContent>
                    </section>
                    <section id='desire' className='m-b'>
                        <AnimatedContent>
                            <div className='flex flex-reverse'>
                                <p className='f-30 m-2 tx-center'>
                                    {translations[language].desire}
                                </p>
                                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735919/catYawn_tbpywt.gif' alt=''/>
                            </div>
                        </AnimatedContent>
                    </section>
                    <section id='mySkills' className='m-b'>
                        <AnimatedContent>
                            <div className='flex'>
                                <Assessment />
                                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735953/catLearn_cyklvf.gif' alt=''/>
                            </div>
                        </AnimatedContent>
                    </section>
                    <section id='otherThings' className='m-b'>
                        <AnimatedContent>
                            <div className='flex flex-column items-center gap'>
                                <p className='f-30 tx-center'>
                                    {translations[language].otherThings}
                                </p>
                                <div className='flex gap'>
                                    <a href='https://github.com/DingoPham'>
                                        <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718737427/github-icon_cw4l1f.png' alt=''/>
                                    </a>
                                    <a href='https://www.facebook.com/dingopham.3'>
                                        <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735889/facebook-icon_d1adza.webp' alt=''/>
                                    </a>
                                    <a href='https://twitter.com/DingoPham'>
                                        <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735900/x-icon_r2t7p0.png' alt=''/>
                                    </a>
                                    <a href='https://discord.gg/JKqGQPTN4f'>
                                        <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735887/discord-icon_afyadp.png' alt=''/>
                                    </a>
                                </div>
                                <p className='f-30 tx-center'>
                                    {translations[language].artworkSite}
                                </p>
                                    <a href='/'>
                                        <button className='bg-btn-color btn-color f-17'>
                                            Artwork Site
                                        </button>
                                    </a>
                            </div>
                        </AnimatedContent>
                    </section>
            </div>
        </div>
    )
}

export default EveryDes;