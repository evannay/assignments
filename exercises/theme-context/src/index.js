// import React from 'react'
// import ReactDOM from 'react-dom'

// import ThemeProvider from './ThemeProvider.js'

// import App from './App.js'
// import './App.css'




// ReactDOM.render(
//     <ThemeProvider>
//         <App />
//     </ThemeProvider>,
//     document.getElementById('root')
// )


import React from 'react'
import ReactDOM from 'react-dom'

import ThemeProvider from './ThemeProvider'

import App from './App.js'
import './App.css'

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
)
