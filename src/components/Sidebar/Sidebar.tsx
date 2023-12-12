import { FaAngleRight } from 'react-icons/fa';
import Call from '../../assets/call.svg'

const Sidebar = () => {
    return (
        <div style={{ backgroundColor: '#15122A', width: '250px', height: '100vh' }}>
            <div style={{
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
            }}>
                <img src={Call} alt="call" style={{ marginRight: '10px' }} />
                <span>Telecom</span>
                <div style={{ marginLeft: '140px' }}>
                    <FaAngleRight />
                </div>
            </div>

        </div>
    );
}

export default Sidebar;
