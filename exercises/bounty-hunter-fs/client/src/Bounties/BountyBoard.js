import React from 'react'
import { withContext } from '../BountyProvider'
import Bounty from './Bounty'

const BountyBoard = (props) => {
    const bounties = props.bounties.map(bounty => {
        return (
            <Bounty
            key={bounty._id}
            bounty={bounty} 
            />
        )
    })
    return (
        <div>
            {bounties}
        </div>
    )
}

export default withContext(BountyBoard)