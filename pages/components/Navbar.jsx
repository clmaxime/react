import Link from 'next/link';
import React from 'react';
import style from '@/styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <h3>Maxime Studio</h3>
            <ul className={style.ul}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;