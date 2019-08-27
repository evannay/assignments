import React from 'react'
import { withProvider } from './ContextProvider';

const Header = (props) => {
    return (
        <div className={props.darkTheme ? 'header-container' : 'header-container-dark'}> 
            Dad Jokes
        </div>
    )
}

export default withProvider(Header)