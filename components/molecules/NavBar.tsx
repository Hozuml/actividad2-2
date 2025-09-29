import React from "react";
import Logo from '../atoms/logo';
import NavbarButton from '../atoms/navbar-button';
import SessionButton from '../atoms/session-button';

export default function Navbar() {
    return (
        <nav style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Logo />
            <NavbarButton />
            <SessionButton />
        </nav>
    );
}