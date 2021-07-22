import React, { Component } from 'react'

import '../css/table.css'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

class Socialstats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            followers: [],
            isLoading: false,
            isError: false
        }
    }


    async componentDidMount() {
        this.setState({ isLoading: true })
        const response = await fetch(`${API_ENDPOINT}/api/twitter`)
        if (response.ok) {
            const followers = await response.json()
            this.setState({ followers, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }
    }

    render() {
        const { followers, isLoading, isError } = this.state

        if (isLoading) {
            return <div>Loading...</div>
        }

        if (isError) {
            return <div>Error</div>
        }

        return followers.length > 0
            ? (
                <div>  

                    {this.renderFollowers()}
    
                </div>
            ) : (
                <div>
                    No users.
                </div>
            )
    }


    renderFollowers = () => {
        return this.state.followers.map(follower => {
            return (
                <div>Stats</div>
            )
        })
    }

}

export default Socialstats