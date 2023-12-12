import './navbar.css'
import { CiBellOn, CiSearch } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import ProfileDesktop from '../../assets/profile.svg';
import ProfileMobile from '../../assets/profile.png';

import { useEffect, useState } from 'react';

const Navbar = () => {
    const [profileImage, setProfileImage] = useState(ProfileDesktop);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setProfileImage(ProfileMobile);
            } else {
                setProfileImage(ProfileDesktop);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div></div>
            </div>
            <div className="navbar-center">
                <div className="search-container">
                    <span className="search-icon"><CiSearch size={25} /></span>
                    <input type="text" placeholder="Search..." className="search-input" />
                    <div className="border-right"></div>
                    <span className="category-icon"><BiCategory size={25} /></span>
                    <span className="category-label">Category</span>
                    <div className="border-right"></div>
                    <button className="search-btn">Search</button>
                </div>
            </div>
            <div className="navbar-right">
                <span className="icon"><CiBellOn size={25} /></span>
                <span className="icon"><CiSettings size={25} /></span>
                <span className="profile">
                    <img src={profileImage} alt="Profile" className="profile-pic" />
                    <span className="profile-name">Nick Thomas</span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
