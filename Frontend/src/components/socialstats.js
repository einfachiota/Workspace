import React, { Component } from 'react'

import '../css/dashboard.css'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

class Socialstats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            followers: [],
            discordusers: [],
            telegramusers: [],
            isLoading: false,
            isError: false
        }
    }


    async componentDidMount() {
        this.FetchTwitter()
        this.FetchDiscord()
        this.FetchTelegram()
    }

    async FetchTwitter() {
        this.setState({ isLoading: true })
        const response = await fetch(`${API_ENDPOINT}/api/twitter`)
        if (response.ok) {
            const followers = await response.json()
            this.setState({ followers, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }
    }
    async FetchDiscord() {
        this.setState({ isLoading: true })
        const response = await fetch(`${API_ENDPOINT}/api/discord`)
        if (response.ok) {
            const discordusers = await response.json()
            this.setState({ discordusers, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }
    }

    async FetchTelegram() {
        this.setState({ isLoading: true })
        const response = await fetch(`${API_ENDPOINT}/api/telegram`)
        if (response.ok) {
            const telegramusers = await response.json()
            this.setState({ telegramusers, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }
    }

    render() {
        return (
            <div className="socialStatsContainer">
            <div className="subContainerDiscord">{this.renderDiscordUsers()}</div>
            <div className="subContainerTwitter">{this.renderTwitterFollowers()}</div>
            <div className="subContainerTelegram">{this.renderTelegramFollowers()}</div>
            </div>
        )
    }


    renderTwitterFollowers = () => {
        return this.state.followers.map(follower => {
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
                  <h3 style={{paddingLeft: "15px", color: "black"}}>Twitter:</h3>
                    {follower} follower
                  </div>

                ) : (
                    <div>
                        No users.
                    </div>
                )
        })
        
    }
    renderDiscordUsers = () => {
        return this.state.discordusers.map(discorduser => {

            const { discordusers, isLoading, isError } = this.state


            if (isLoading) {
                return <div>Loading...</div>
            }
    
            if (isError) {
                return <div>Error</div>
            }
    
            return discordusers.length > 0
                ? (
                  <div>
                  <h3 style={{paddingLeft: "15px", color: "black"}}>Discord:</h3>
                    {discorduser} user
                  </div>

                ) : (
                    <div>
                        No users.
                    </div>
                )
        })
        
    }

    renderTelegramFollowers = () => {
        return this.state.telegramusers.map(telegramuser => {

            const { telegramusers, isLoading, isError } = this.state


            if (isLoading) {
                return <div>Loading...</div>
            }
    
            if (isError) {
                return <div>Error</div>
            }
    
            return telegramusers.length > 0
                ? (
                  <div>
                  <h3 style={{paddingLeft: "15px", color: "black"}}>Telegram:</h3>
                    {telegramusers} user
                  </div>

                ) : (
                    <div>
                        No users.
                    </div>
                )
        })
        
    }


}
export default Socialstats