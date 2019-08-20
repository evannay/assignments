// import React from 'react'

// import {withTheme} from './ThemeProvider'


// const App = (props) => {
//     return(
//         <div className={props.on ? 'dark-header' : 'light-header'}>
//             <h1>{props.name}</h1>
//             <button onClick={props.toggle}>Change Theme</button>
//         </div>
//     )
// }

// export default withTheme(App)


import React from 'react'

import {withTheme} from './ThemeProvider'

const App = (props) => {
    return (
        <div className={props.on ? 'dark-header' : 'light-header'}>
            <h1>{props.name}</h1>
            <button onClick={props.toggle}>Theme Change</button>
        </div>
    )
}

export default withTheme(App)