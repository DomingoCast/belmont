import React from 'react'

import classes from './Layout.module.sass'

const layout = (props) => {
    return (
        <div className={classes.container}>
            <nav className={classes.nav}>
                <h2 className={classes.h2}>Belmont</h2>
            </nav>
            {props.children}
        </div>

    )
}

export default layout
