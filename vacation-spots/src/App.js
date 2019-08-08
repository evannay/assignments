// import React from 'react'
// import CardContainer from './CardContainer.js'

// const App = () => {
//     return (
//         <div>
//             <CardContainer />
//         </div>
//     )
// }

// export default App

// import React from 'react'
// import CardContainer from './CardContainer'
// import './App.css'

// const App = () => {
//     return (
//         <div>
//             <CardContainer />
//         </div>
//     )
// }

// export default App

import React from 'react'
import CardContainer from './CardContainer'
import Header from './Header'
import './App.css'
import Footer from './Footer.js'


const App = () => {
    return (
        <div>
            <Header />
            <CardContainer />
            <Footer />
        </div>
    )
}

export default App