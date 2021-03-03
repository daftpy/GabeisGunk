import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }
    toggleVisible = () => {
        console.log('clicked')
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            };
        })
    }
    render() {
        return ( <div className={headerStyles.header}>
            <div class={headerStyles.headerContainer}>
                <h1 class={headerStyles.brand}>{this.props.siteTitle}</h1>
                <div class={headerStyles.navbarContainer}>
                    <ul class={headerStyles.navbar}>
                        <li class={headerStyles.navLink}><a href="https://www.twitch.tv/gabeisgunk">Twitch</a></li>
                        <li class={headerStyles.navLink}><a href="https://www.tiktok.com/@gabeisgunk/">Tiktok</a></li>
                        <li class={headerStyles.navLink}><a href="https://www.instagram.com/gabewifdaglasses">Instagram</a></li>
                        <li class={headerStyles.navLink}><a href="https://soundcloud.com/gabeisgunk">Soundcloud</a></li>
                    </ul>
                </div>
                <div class={headerStyles.hamburger}><button onClick={this.toggleVisible}><i class="fas fa-bars"></i></button></div>
            </div>
            { this.state.isVisible &&
            <ul class={headerStyles.dropdownHeader}>
                <li class={headerStyles.dropdownLink}><a href="https://www.twitch.tv/gabeisgunk">Twitch</a></li>
                <li class={headerStyles.dropdownLink}><a href="https://www.tiktok.com/@gabeisgunk">Tiktok</a></li>
                <li class={headerStyles.dropdownLink}><a href="https://www.instagram.com/gabewifdaglasses">Instagram</a></li>
                <li class={headerStyles.dropdownLink}><a href="https://soundcloud.com/gabeisgunk">Soundcloud</a></li>
            </ul>
            }
        </div>
        )
    }
}
Header.propTypes = {
    siteTitle: PropTypes.string,
}
Header.defaultProps = {
    siteTitle: ``,
}