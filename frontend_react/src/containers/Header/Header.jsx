import React from 'react'

import './Header.scss'
import images from '../../constants/images.js'
import Wave from './Wave/Wave.jsx'

const Header = () => {
    
    return (
        <section id='home' className='home'>
            <div className='app__header app__flex'>
                <div className='app__header-content'>
                    <span>
                    &nbsp; Hi There!<span>👋🏻</span>
                    </span>
                    <span>
                    I'm
                    <strong className="main-name"> Yash Oswal</strong>
                    </span>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, enim! Beatae, quisquam. At ex, deserunt architecto iste dignissimos nesciunt laboriosam accusantium nostrum quod culpa quos dolor unde facere explicabo dolorum!
                    </p>
                </div>
                <div className='app__header-img'>
                    <img src={images.profile} alt=""/>
                </div>
            </div>
            <Wave fill={'#edf2f8'}></Wave>
        </section>
        ) 
    }
    
    export default Header