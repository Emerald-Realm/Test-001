import React from 'react'
import '../Styles/style.css'

function Header() {
    return (
        <div>
            <header className="header-tag" data-testid="header-tag">
                <div className="logo" data-testid="logo">
                    logo
                </div>
                <nav className="header-nav">
                    <ul className="nav-list"></ul>
                </nav>
            </header>
            <hr/>
        </div>
    )
}

export default Header
