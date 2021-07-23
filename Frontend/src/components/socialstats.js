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
            isLoadingTwitter: false,
            isLoadingDiscord: false,
            isError: false,
            isErrorTwitter: false,
            isErrorDiscord: false,
        }
    }


    componentDidMount() {
        this.FetchTwitter()
        this.FetchDiscord()
        this.FetchTelegram()
    }

    async FetchTwitter() {
        this.setState({ isLoadingTwitter: true })
        const responseTwitter = await fetch(`${API_ENDPOINT}/api/twitter`)
        if (responseTwitter.ok) {
            const followers = await responseTwitter.json()
            this.setState({ followers, isLoadingTwitter: false })
        } else {
            this.setState({ isErrorTwitter: true, isLoadingTwitter: false })
        }
    }
    async FetchDiscord() {
        this.setState({ isLoadingDiscord: true })
        const responseDiscord = await fetch(`${API_ENDPOINT}/api/discord`)
        if (responseDiscord.ok) {
            const discordusers = await responseDiscord.json()
            this.setState({ discordusers, isLoadingDiscord: false })
        } else {
            this.setState({ isErrorDiscord: true, isLoadingDiscord: false })
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
        const { followers, isLoadingTwitter, isErrorTwitter } = this.state

        return this.state.followers.map(follower => {


            if (isLoadingTwitter) {
                return <div>Loading...</div>
            }
    
            if (isErrorTwitter) {
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
        const { discordusers, isLoadingDiscord, isErrorDiscord } = this.state

        return this.state.discordusers.map(discorduser => {


            if (isLoadingDiscord) {
                return <div>Loading...</div>
            }
    
            if (isErrorDiscord) {
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
        const { telegramusers, isLoading, isError } = this.state

        return this.state.telegramusers.map(telegramuser => {


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
                    {telegramuser} user
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