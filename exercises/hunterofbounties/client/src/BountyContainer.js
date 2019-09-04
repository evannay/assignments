import React from 'react'

import axios from 'axios'

import Bounty from './Bounty.js'

class BountyContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            bounties : []
        }
    }

    componentDidMount(){
        axios.get('/bounties').then(res => {
            this.setState({
                bounties : res.data
            })
        })
    }
    render(){
        const mappedBounties = this.state.bounties.map(bounty => {
            return (
                <Bounty 
                key = {bounty._id}
                bounty={bounty}
                />
            )
        })
        return (
            <div>
                { mappedBounties }
            </div>
        )
    }
    
}


export default BountyContainer