import '../../assets/Style/Body.css';
import Assessment from './Assessment';
import BgPicture from './BgPicture';
import AnimatedContent from '../other-function/AnimatedContent';

import React from 'react';
import { Link } from 'react-router-dom';

const EveryDes = () => {
    return(
        <div>
            <BgPicture />
            <div className='flex flex-column p-6 m-3'>
                    <section id='aboutMe' className='m-b'>
                        <AnimatedContent>
                            <div className='flex flex-reverse'>
                                <p className='f-30 m-2 tx-center'>
                                    My name is Dingo, I'm so glad you came here and discovered the wonders of my website.
                                    My hobbies are programming, 2D painting. 
                                    I've planned a lot of things since I started learning programming, 
                                    and the first thing you see is this website which is also my first achievement!
                                </p>
                                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718737294/catYes_vafisx.gif' />
                            </div>
                        </AnimatedContent>
                    </section>
                    <section id='thisWebsite' className='m-b'>
                        <AnimatedContent>
                            <div className='flex'>
                                <p className='f-30 m-1 tx-center'>
                                    This website is basically just a static website, 
                                    not a commercial website or any other kind of e-commerce website.
                                </p>
                                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735928/catNo_hdsqiy.gif' />
                            </div>
                        </AnimatedContent>
                    </section>
                    <section id='desire' className='m-b'>
                        <AnimatedContent>
                            <div className='flex flex-reverse'>
                                <p className='f-30 m-2 tx-center'>
                                    In the future, I will have more projects for myself or maybe with a group. 
                                    But no matter what, 
                                    I really want to make the most of what I have to achieve it.
                                </p>
                                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735919/catYawn_tbpywt.gif' />
                            </div>
                        </AnimatedContent>
                    </section>
                    <section id='mySkills' className='m-b'>
                        <AnimatedContent>
                            <div className='flex'>
                                <Assessment />
                                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735953/catLearn_cyklvf.gif' />
                            </div>
                        </AnimatedContent>
                    </section>
                    <section id='otherThings' className='m-b'>
                        <AnimatedContent>
                            <div className='flex flex-column items-center gap'>
                                <p className='f-30 tx-center'>
                                    - If you are interested, please join me via social networks below -
                                </p>
                                <div className='flex gap'>
                                    <a href='https://github.com/DingoPham'>
                                        <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718737427/github-icon_cw4l1f.png' />
                                    </a>
                                    <a href='https://www.facebook.com/dingopham.3'>
                                        <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735889/facebook-icon_d1adza.webp' />
                                    </a>
                                    <a href='https://twitter.com/DingoPham'>
                                        <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735900/x-icon_r2t7p0.png' />
                                    </a>
                                    <a href='https://discord.gg/JKqGQPTN4f'>
                                        <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735887/discord-icon_afyadp.png' />
                                    </a>
                                </div>
                                <p className='f-30 tx-center'>
                                    - My artwork site -
                                </p>
                                <Link to='/artwork'>
                                    <button className='bg-btn-color btn-color f-17'>
                                        Artwork Site
                                    </button>
                                </Link>
                            </div>
                        </AnimatedContent>
                    </section>
            </div>
        </div>
    )
}

export default EveryDes;