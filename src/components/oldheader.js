import React from "react"
import headerStyles from "./header.module.css"

export default function Header(props) {
    return <div className={headerStyles.header}>
        <div class={headerStyles.headerContainer}>
            <h1 class={headerStyles.brand}>{props.headerText}</h1>
            <div class={headerStyles.navbarContainer}>
                <ul class={headerStyles.navbar}>
                    <li class={headerStyles.navLink}><a href="#">Twitch</a></li>
                    <li class={headerStyles.navLink}><a href="#">Tiktok</a></li>
                    <li class={headerStyles.navLink}><a href="#">Instagram</a></li>
                    <li class={headerStyles.navLink}><a href="#">Soundcloud</a></li>
                </ul>
            </div>
            <div class={headerStyles.hamburger}><i class="fas fa-bars"></i></div>
        </div>
        <ul class={headerStyles.dropdownHeader}>
            <li class={headerStyles.dropdownLink}><a href="#">Twitch</a></li>
            <li class={headerStyles.dropdownLink}><a href="#">Tiktok</a></li>
            <li class={headerStyles.dropdownLink}><a href="#">Instagram</a></li>
            <li class={headerStyles.dropdownLink}><a href="#">Soundcloud</a></li>
        </ul>
    </div>
}
