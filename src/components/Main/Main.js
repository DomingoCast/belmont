import React from 'react'

import classes from './Main.module.sass'

import Title from '../Title/Title'
import About from '../About/About'
import Photography from '../Photography/Photography'
import Video from '../Videos/Videos'
import Contact from '../Contact/Contact'
//Contact/

const main = (props) => {
    return(
        <>
            <Title />
            <About />
            <Photography />
            <Video />
            <Contact />
        </>
    )
}

export default main
