import './DashboardNavbar.css'
import { RiDashboardFill } from "react-icons/ri";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoCallOutline } from "react-icons/io5";
import PhoneBook from '../../../assets/phonebook.svg'
import Vector from '../../../assets/vector.svg'
import { BiConversation } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';

const DashboardNavbar = () => {
    return (
        <div className="dashboard-navbar">
            <div className="dashboard-navbar-left">
                <a href="#dashboard"><RiDashboardFill size={20} />Dashboard</a>
                <a href="#live"><TbActivityHeartbeat />Live</a>
                <a href="#calls"><IoCallOutline />Calls</a>
                <a href="#phonebook">
                    <img src={PhoneBook} alt="" style={{ marginRight: '5px' }} />
                    Phonebook</a>
            </div>
            <div className="dashboard-navbar-right">
                <a href="#dialer">
                    <img src={Vector} alt="" style={{ marginRight: '5px' }} />
                    Dialer</a>
                <a href="#conversation"><BiConversation style={{ marginRight: '5px' }} />Conversation</a>
                <a href="#settings"><CiSettings style={{ marginRight: '5px' }} />Settings</a>
            </div>
        </div>
    );
}

export default DashboardNavbar;